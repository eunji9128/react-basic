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


## Browser Router
### react-router-dom lib
- 기존에는 여러 페이지를 만들기 위해서는 각 페이지마다 html 파일을 만들면 됐었지만, react 는 하나의 html 파일에서 html tag를 다르게 재랜더링해 보여주는 방식이기 때문에 별도의 라우팅 라이브러리가 필요하다
- react-router-dom 라이브러리 홈페이지에서 설치 방법을 찾을 수 있다
    - npm install react-router-dom@6

```js
// (index.js file)
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
```
- 설치 후에는 위와 같이 index.js 에서 BrowserRouter import를 해준 뒤, <App /> component를 <BrowserRouter> component로 감싸 주어야 한다

```js
// (App.js file)
import { Routes, Route, Link } from 'react-router-dom';

function App(){
    return (
        <>
            <Link to='/'>홈</Link>
            <Link to='/detail'>상세 페이지</Link>

            <Routes>
                <Route path='/' element={ 메인 페이지 html ~~ } />
                <Route path='/detail' element={ <div>상세 페이지</div> } />
                <Route path='*' element={ <div>없는 페이지</div> } />
            </Routes>
        </>
    )
}
```
- 라우팅을 위해서는 Routes > Route component에 각 url path를 정의해주고, element 에 해당 url에서 표시될 html을 넣어준다
- 위와 같이 정의한 url을 직접 주소창에 기입하지 않고 링크를 통해 이동하기 위해서는 Link component를 사용하면 된다
    - (참고) React Bootstrap Nav componenet에서도 같은 기능으로 Nav.Link component가 있다

### nested routes
```js
function App() {
    return (
        <>
            <Routes>
                <Route path='/about' element={ <About/> }>
                    <Route path='member' element={ <div>members</div> }/>
                    <Route path='location' element={ <div>location</div> }/>
                </Route>
            </Routes>
        </>
    )
}
```
```js
// (About.js file)
import { Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <h4>About pages</h4>
            <Outlet></Outlet>
        </div>
    )
}
```
- Route > Route componenet 로 nested routes 형태를 만들면 /about/member 등 하위 페이지를 구축할 수 있다
- 이 때 하위 페이지가 랜더링될 위치를 Outlet componenet로 부모 Route component에 작성해 주어야 한다

### useNavigate()
```js
import { useNavigate } from 'react-router-dom';

function App() {
    let navigate = useNavigate();
    
    return (
        <>
            <button onClick={() => { navigate('/detail') }}>이동버튼</button>
            <button onClick={() => { navigate(-1) }}>뒤로가기</button>
            <button onClick={() => { navigate(2) }}>앞으로2번가기</button>
        </>
    )
}
```
- Link 대신 useNavigate 기능을 사용하여 페이지 이동을 할 수 있다
    - navigate('/page_name'): page_name으로 이동
    - navigate(-1): 뒤로 가기
    - navigate(1): 앞으로 가기


