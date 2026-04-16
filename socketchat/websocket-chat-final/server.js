const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 3000;

// 접속한 사용자 목록 저장
// key: WebSocket 객체, value: 닉네임
const userMap = new Map();

/**
 * 현재 접속 중인 사용자 닉네임 목록 반환
 */
function getUserList() {
  return Array.from(userMap.values());
}

/**
 * 모든 사용자에게 JSON 메시지 전송
 */
function broadcast(data) {
  const jsonData = JSON.stringify(data);

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(jsonData);
    }
  });
}

/**
 * 특정 사용자에게만 JSON 메시지 전송
 */
function sendToClient(ws, data) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(data));
  }
}

/**
 * 닉네임으로 WebSocket 찾기
 */
function findClientByNickname(nickname) {
  for (const [client, name] of userMap.entries()) {
    if (name === nickname) {
      return client;
    }
  }
  return null;
}

/**
 * 사용자 목록 전체 갱신
 */
function broadcastUserList() {
  broadcast({
    type: "userList",
    users: getUserList()
  });
}

wss.on("connection", (ws) => {
  console.log("클라이언트 접속");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());

      // 1. 최초 입장(닉네임 설정)
      if (data.type === "join") {
        const nickname = (data.nickname || "").trim();

        if (!nickname) {
          sendToClient(ws, {
            type: "error",
            message: "닉네임을 입력해주세요."
          });
          return;
        }

        // 중복 닉네임 체크
        if (getUserList().includes(nickname)) {
          sendToClient(ws, {
            type: "error",
            message: "이미 사용 중인 닉네임입니다."
          });
          return;
        }

        userMap.set(ws, nickname);

        sendToClient(ws, {
          type: "system",
          message: `[입장 완료] ${nickname}님, 채팅방에 연결되었습니다.`
        });

        broadcast({
          type: "system",
          message: `[입장] ${nickname}님이 들어왔습니다.`
        });

        broadcastUserList();
        return;
      }

      // 아직 닉네임 등록이 안 된 사용자는 차단
      const sender = userMap.get(ws);
      if (!sender) {
        sendToClient(ws, {
          type: "error",
          message: "먼저 닉네임을 설정해야 합니다."
        });
        return;
      }

      // 2. 전체 채팅
      if (data.type === "chat") {
        const text = (data.message || "").trim();

        if (!text) {
          return;
        }

        broadcast({
          type: "chat",
          sender,
          message: text
        });
        return;
      }

      // 3. 1:1 채팅
      if (data.type === "private") {
        const text = (data.message || "").trim();
        const targetNickname = (data.to || "").trim();

        if (!targetNickname) {
          sendToClient(ws, {
            type: "error",
            message: "귓속말 받을 사용자를 선택해주세요."
          });
          return;
        }

        if (!text) {
          return;
        }

        if (targetNickname === sender) {
          sendToClient(ws, {
            type: "error",
            message: "자기 자신에게 귓속말을 보낼 수 없습니다."
          });
          return;
        }

        const targetClient = findClientByNickname(targetNickname);

        if (!targetClient) {
          sendToClient(ws, {
            type: "error",
            message: "대상 사용자가 존재하지 않습니다."
          });
          broadcastUserList();
          return;
        }

        // 받는 사람에게 전송
        sendToClient(targetClient, {
          type: "private",
          sender,
          to: targetNickname,
          message: text
        });

        // 보낸 사람 화면에도 표시
        sendToClient(ws, {
          type: "private",
          sender,
          to: targetNickname,
          message: text,
          self: true
        });

        return;
      }
    } catch (error) {
      sendToClient(ws, {
        type: "error",
        message: "메시지 처리 중 오류가 발생했습니다."
      });
    }
  });

  ws.on("close", () => {
    const nickname = userMap.get(ws);

    if (nickname) {
      userMap.delete(ws);

      broadcast({
        type: "system",
        message: `[퇴장] ${nickname}님이 나갔습니다.`
      });

      broadcastUserList();
    }

    console.log("클라이언트 종료");
  });

  ws.on("error", (error) => {
    console.error("웹소켓 에러:", error);
  });
});

server.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});