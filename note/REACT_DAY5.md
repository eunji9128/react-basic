## import, export
### export
```js
// (export1.js file)

var a = 10;
export default a;
```
```js
// (export2.js file)

var b = 10;
var c = 20;
export { b, c }
```
- js 파일을 따로 만들어 그 안의 데이터를 다른 js 파일에서 사용하기 위해서는 데이터를 가져올 파일에서 export 를 해주어야 한다
- 하나의 변수를 export 할 때는 export default 변수명 으로 사용, 두 개 이상의 변수를 export 할 때는 export { 변수명1, 변수명2 } 로 사용한다

### import
```js
// (import.js file)
import a from './export1.js';
import { b, c } from './export2.js';
```
- export 한 변수를 사용하기 위해서는 사용하고자 하는 js 파일에서 import 해주면 된다
- 즉, export default/import or export {}/import {} 로 사용하면 된다




