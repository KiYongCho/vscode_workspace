import { Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

function App() {

  return (
  
    <>

      <div>
        <p>
          <a href="/">Home</a>&nbsp;
          <a href="/javascript">javascript</a>&nbsp;
          <a href="/typescript">typescript</a>&nbsp;
          <a href="/react">react</a><br />

          <Link to="/">Home</Link>&nbsp;
          <Link to="/javascript">javascript</Link>&nbsp;
          <Link to="/typescript">typescript</Link>&nbsp;
          <Link to="/react">react</Link><br />

          <NavLink to="/">Home</NavLink>&nbsp;
          <NavLink to="/javascript">javascript</NavLink>&nbsp;
          <NavLink to="/typescript">typescript</NavLink>&nbsp;
          <NavLink to="/react">react</NavLink><br />          
        </p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/javascript/*" element={<Javascript />} />
        <Route path="/typescript" element={<Typescript />} />
        <Route path="/react" element={<React />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

    </>

  );

} // App

function Home() {
  return (
    <div>
      <h2>Home 페이지</h2>
    </div>
  );
}

function Javascript() {
  return (
    <>
      <div>
        <h2>Javascript 페이지</h2>
        <p>
          <NavLink to="/javascript/1">sub1</NavLink>&nbsp;
          <NavLink to="/javascript/2">sub2</NavLink>
        </p>
      </div>
      <Routes>
        <Route path="/:pid" element={<JavascriptSub />} />
      </Routes>
    </>
  );
}

function JavascriptSub() {
  const params = useParams(); // 컴포넌트에 전달된 파라미터 데이터를 가진 useParams 훅
  const pid = params.pid; // pid파라미터 값
  if (pid==1 || pid==2) {
    return (
      <div>
        <h3>Javascript 서브페이지 {pid}</h3>
      </div>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

function Typescript() {
  return (
    <div>
      <h2>Typescript 페이지</h2>
    </div>
  );
}

function React() {
  return (
    <div>
      <h2>React 페이지</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 NOt Found! 페이지를 찾을 수 없어용!</h2>
    </div>
  );
}

export default App;
