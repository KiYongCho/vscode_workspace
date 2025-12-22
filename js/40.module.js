// 개별 import
// import {name, getName} from './mymodule/module.mjs';
// console.log(name, getName());

// 일괄 import
// 모든것들을 다 가져와서 m이란 이름으로 사용
// import * as m from './mymodule/module.mjs';
// console.log(m.name, m.getName());

// export default한 것을 add라는 이름으로 가져오기
// import add from './mymodule/module.mjs';
// console.log(add(1, 2));

// 개별 export한 것들과 export default한 것을 같이 가져오기
import add, {name, getName} from './mymodule/module.mjs';
console.log(add(1, 2));
console.log(name, getName());
