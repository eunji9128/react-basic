## url parameter
### :id
```js
function App() {
    <>
        <Routes>
            <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
    </>
}
```
- 상세 페이지 등 같은 레이아웃을 가지는 다수 페이지 url을 만들 때, path='/:parameter명' 라고 사용하면 경로에 아무 문자를 넣어도 그 문자에 맞는 url을 생성해 Detail component를 보여주며, url 값을 parameter명으로 저장해준다

### useParams()
```js
// (Detail.js file)
import { useParams } from 'react-router-dom';

function Detail() {
    let {id} = useParams();

    return (
        <h4>product id: {parseInt(id)}</h4>
    )
}
```
- 앞서 저장된 url parameter 값은 useParams 기능을 이용해 component file에서 사용할 수 있다
- (참고) url parameter에 저장된 값은 string으로 연산이 필요하다면 int로 바꾸어 사용해야 한다


## styled-components
### install & setting
- class를 중복으로 만들거나 원하지 않는 스타일이 적용되거나 등 CSS 관리가 어려울 때 스타일을 바로 적용한 component를 만들 수 있다 = styled-components
- npm install styled-components
- 사용하고 싶은 component 상단에 import styled from 'styled-components' 작성

### styled component
```js
import styled from 'styled-components';

let Box = styled.div`
    padding: 20px;
    color: grey;
`

let Btn = styled.button`
    background: ${ props => props.bg };
    color: black;
    padding: 10px;
`

function Detail() {
    return (
        <div>
            <Box>
                <Btn bg='yellow'>button</Btn>
            </Box>
        </div>
    )
}
```
- 상단 변수 선언부처럼 Component = styled.tag`` 를 통해 스타일된 component를 만들어 사용할 수 있다
- props 문법도 사용 가능하며, ${ props => props.변수명 } 으로 작성해주면 된다
    - (참고) props 전달 시 props명={props명} > props명 = '값' 도 가능하다

### 장단점
- 장점
    - CSS 파일 오픈 없이 JS 파일에서 바로 스타일 적용이 가능하다
    - 해당 JS 파일에서 적은 스타일이 다른 파일을 오염시키지 않는다
        - (참고) CSS 파일도 오염되지 않게 하려면(App > Detail 등으로 스타일 적용이 되는 것을 방지) component명.module.css 라고 파일명을 작성하면 적은 component명과 같은 js 파일에만 스타일이 적용된다
    - 페이지 로딩 시간이 단축된다(이유는 styled-component로 작성한 스타일은 html 페이지의 style 태그에 들어가기 때문에..(?))
- 단점
    - JS 파일이 복잡해진다(styled component인지 general component인지 구별이 어려움)
    - JS 간 중복 디자인이 많이 필요할 때는 비효율적
    - CSS 담당 디자이너가 있고, styled-components 문법을 모른다면 협업 시 불편할 수 있음


## Component Lifecycle
### Lifecycle
- Component Lifecycle
    1. Mount: 페이지에 장착, 즉 생성
    2. Update: 업데이트, 즉 재렌더링
    3. Unmount: 페이지에서 탈착, 즉 삭제
- component 가 생성, 업데이트, 삭제 되는 주기 중간에 특정 코드를 실행해줄 수 있는데 이를 lifecyle hook 이라고 한다

### class lifecycle hook
```js
class Detail1 extends React.Component {
    componentDidMount() {
        // Detail1 component가 마운트되고 나서 실행할 코드
    }
    componentDidUpdate() {
        // Detail1 component가 업데이트되고 나서 실행할 코드
    }
    componentDidUnmount() {
        // Detail1 component가 언마운트되기 전 실행할 코드
    }
}
```
- class component 작성 시에는 위와 같이 각 주기에 실행할 코드를 작성해줄 수 있다

### function lifecycle hook
```js
import { useEffect } from 'react';

function Detail2() {
    useEffect( () => {
        // component 마운트 & 업데이트 마다 실행할 코드
    } )

    return ()
}
```
- useEffect 기능을 사용하면 component 마운트 & 업데이트마다 코드를 실행할 수 있다
- 하지만 마운트 & 업데이트 시에는 function component 안의 코드를 다시 읽어주기 때문에 useEffect 밖의 코드도 매번 실행이 된다
- 차이점은 function component 내의 html 렌더링이 끝난 후에 useEffect 내부 코드가 실행되어 빠르게 페이지 렌더링을 해줄 수 있다는 점이다
    - (참고) 데이터를 받아오거나, 오래 걸리는 연산, 타이머 거는 작업 등 페이지 렌더링에 크게 연관되지 않는 오래 걸리는 코드는 useEffect 내에 사용해주면 좋다

```js
import { useEffect } from 'react';

function Detail2() {
    useEffect( () => {
        setTimeout( () => {console.log('hi')}, 5000 )
    } )

    return ()
}
```
- 타이머 사용은 useEffect 내에서 setTimeout( () => {실행코드}, 시간 )을 사용하면 되며, 시간은 ms 단위로 5000 > 5초 뒤 실행을 의미한다

### useEffect trigger
```js
import { useEffect } from 'react';

function Detail2() {
    useEffect( () => {
        console.log('hi')
    }, [count] )

    return ()
}
```
- useEffect 의 두번째 변수로 변수나 state가 들어갈 수 있는데 이는 useEffect의 실행 트리거 역할을 해준다(변수나 state가 변할 때만 실행)
- [] 안에는 다수의 변수/state를 넣을 수도 있으며, []만 넣을 때는 마운트 시에만 실행하고 이후엔 실행되지 않게 된다

### useEffect cleanup function
```js
import { useEffect } from 'react';

function Detail2() {
    useEffect( () => {
        let a = setTimeout(() => {console.log('hi')}, 5000);
        return () => {
            clearTimeout(a);
        }
    } )
    return ()
}
```
- 다중 timer가 발생하는 버그를 방기하기 위해 timer cleanup을 해주고 싶을 때 위와 같이 useEffect(()=>{ return () => {clearTimeout}}) 을 작성해주면 되는데, useEffect에서 return () => {코드} 가 먼저 동작하기 때문에 가능하며, 이 부분을 cleanup function이라고 한다
- Timer를 cleanup 하기 위해서는 먼저 setTimeout 을 변수에 저장해주어야 한다
- (참고) cleanup function 에는 타이머 제거, socket 연결 요청 제거, ajax 요청 중단 등의 코드를 많이 작성한다
- (참고) component unmount 시에도 cleanup function 1회 동작한다

