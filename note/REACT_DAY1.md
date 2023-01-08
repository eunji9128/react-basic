## React Introduction
### React 장점
- React는 JavaScript의 라이브러리 중 하나
- 웹 페이지 새로 고침 없이 페이지 전환 등을 가능하게 하는 Single Page Application 구현을 쉽게 도와줌
- html을 함수, array, object 등에 보관이 가능해 html 재사용, 관리를 편하게 해줌
- React 문법 기반의 React Native로 앱 개발까지 확장이 용이

### 개발환경 셋팅
1. 구글에 Nodejs 검색 후 LTS 버전 설치 (=> npm 설치)
    - 설치 경로는 기본 경로를 유지하는 게 좋음
    - chocolatey ~~ 는 설치 불필요
2. 작업용 폴더 생성 후 shift+우클릭 > 여기서 powershell 창 열기 클릭
3. 터미널에서 npx create-react-app [프로젝트이름] 엔터
4. 폴더를 VS code에서 오픈하여 src > App.js 에 코드 작성
5. 에디터 상단에서 Terminal > New terminal 누르고, npm start 입력하여 미리보기 브라우저 실행

### JSX
```js
function App() {
    return (
        <div className="App">
            <div className="nav">
                <h4>Blog</h4>
            </div>
        </div>
    )
}
```
- JSX(JavaScript XML)는 JavaScript에 XML을 추가한 확장 문법으로, 브라우저 실행 전 Babel을 통해 JavaScript 문법으로 치환된다
- JSX의 장점은 JS 문법에 HTML 요소를 함꼐 작성할 수 있다는 확장성과 일반 JavaScript만 사용하는 것에 비해 가독성이 높다는 것
- 주의해야 할 JSX 문법
    1. html에 class 지정 시 JSX에서는 className을 사용 > JSX는 JavaScript 기반이기 때문에 class 라는 JS 예약어와 중복을 방지하고자 className을 사용하도록 되어 있다
    2. 변수를 html에 넣을 때는(=데이터 바인딩) {} 사용 > document.getElementsByClass(~).innerHTML 등 대신 중괄호를 사용할 수 있다
    3. html에 style 속성 넣을 때는 style={ {obj 자료형} } 사용 > html에서 <div style="color: blue"> 대신 style={ {color: 'blue', fontSize: '30px'} } 로 넣어야 한다
        - html 에서는 font-size 처럼 dash 를 사용했지만, JS에서 dash는 minus로 동작하기 때문에 camelCase 로 사용해야 한다
    4. 메인 페이지 작성 시 function App() { return (~~)} 처럼 return 안에 코드 작성해야 하며, return 에서 병렬 2개 이상의 태그는 반환이 안된다 (ex. return(<div>1</div> <div>2</div>))
        - (참고) 2개의 병렬 태그 반환이 필요할 경우에는 <div></div> or <></> 로 전체를 묶어 하나의 반환 값으로 만들 수 있다 > 여기서 의미 없는 공 태그인 <></>를 fragment tag라고 부른다

## 자료 저장
### State와 변수
```js
import { useState } from 'react';
import './App.css';

function App(){
    
    let [post, setPost] = useState('포스트명');

    return (
        <div className="App">
            <div className="nav">
                <h4>Blog</h4>
            </div>
            <div className="list">
                <h4>{ post }</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    )
}
```
- React에서는 자료를 보관해서 사용할 때 변수 이외에 State를 사용할 수 있다
- State는 변수와 다르게 값이 변하였을 때 state를 사용한 html 값을 자동으로 재렌더링 해준다(JS는 변수 값이 변했을 때 html 내용도 변경해주어야 한다는 코드를 별도로 작성해야 함) > 따라서 자주 데이터 변경이 예상되고 UI에 자동 반영이 필요한 요소는 State에 저장해 사용하면 좋다
- State 사용: let [변수명, 변경함수명] = useState('변수값')
    - (참고) Distructuring 문법: let [a, b] = [1, 2]라고 선언할 경우 a=1, b=2를 할당해주는 문법이다


### Warning message 제거
- 터미널에서 선언했지만 사용되지 않은 변수, 라이브러리 등을 알려주는 warning message가 뜨는데, 이를 없애고 싶을 때는 스트립트 첫째줄에 /* eslint-disable */ 을 써주면 된다

