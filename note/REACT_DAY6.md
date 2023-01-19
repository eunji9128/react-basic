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

