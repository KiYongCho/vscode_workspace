/*
    클래스 상속(inheritance)
      - 이미 생성된 클래스를 상속받아 프라퍼티와 메소드를 추가해서 사용
      - 재사용(reusing)
*/

class Bird {
    constructor(name, sound, sort) {
        this._name = name;
        this._sound = sound;
        this._sort = sort;
    }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get sound() { return this._sound; }
    set sound(sound) { this._sound = sound; }
    get sort() { return this._sort; }
    set sort(sort) { this._sort = sort; }    
    cry() {
        console.log('[Bird]');
        console.log(`${this.name}은 ${this.sound} 소리를 내는 ${this.sort}입니다!`);
    }
}

// Bird를 상속받은 Eagle
class Eagle extends Bird {
    constructor(name, sound, sort) {
        // 하위클래스 생성자의 첫번째 문장은 상위클래스 생성자 호출문
        super(name, sound); // super => Bird
        this.canFly = true;
        this.sort = sort;
    }
}

// Eagle 객체 생성
const eagle = new Eagle('독수리', '꽤꽤', '맹금류');
eagle.cry(); // 상위클래스인 Bird의 cry메소드 사용
console.log(eagle.canFly ? '날 수 있다' : '날 수 없다');

// Bird를 상속2받은 Chicken 클래스
class Chicken extends Bird {
    constructor(name, sound, sort) {
        super(name, sound, sort); // super => Bird
        this.canFly = false;
        this.sort = sort;
    }
}

// Chicken 객체 생성
const chicken = new Chicken('닭', '꼬끼오', '가금류');
chicken.cry();
console.log(chicken.canFly ? '날 수 있다' : '날 수 없다');


// 동적 상속
//  - 실행시간에 조건에 따라 상속하는 클래스를 변경 가능

const birdName = '오골계';

class AnyBird extends (birdName=='오골계' ? Chicken : Eagle) {
    constructor(name, sound, sort) {
        super(name, sound, sort);
    }
    // AnyBird는 조건에 따라 Chicken이나 Eagle을 상속 받음
    // Chicken이나 Eagle을 상속 받았으므로 AnyBird는 Bird를 상속 받았음
    // Bird에 있는 cry메소드를 AnyBird가 재정의 (오버라이딩)
    cry() {
        console.log('[AnyBird]');
        console.log(`${this.name}은 ${this.sound} 소리를 내는 ${this.sort}입니다!`);
    }
}

const ogolgye = new AnyBird('오골계', '오골오골', '가금류');
ogolgye.cry();
console.log(ogolgye.canFly ? '날 수 있다' : '날 수 없다');

