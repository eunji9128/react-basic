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


