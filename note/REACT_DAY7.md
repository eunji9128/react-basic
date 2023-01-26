## 서버와의 통신
### 서버
- 본 강의의 설명: 유저가 데이터를 받기를 정확한 규격에 맞게 요청했을 때, 데이터를 보내주는 프로그램
    - 어떤 데이터인지(URL 형식으로)
    - 어떤 방법으로 요청할 지(GET, POST): 데이터를 가져올 때는 GET, 데이터를 보낼 떄는 POST
- 병행하는 네트워크 스터디에서는 네트워크에 연결된 컴퓨터인 호스트의 한 역할로 설명을 하고 있음

### 데이터 요청 방법 1: 브라우저 주소창
- 브라우저 주소창에 URL을 작성하는 것도 데이터를 요청하는 방법 중에 하나이며(GET), 요청 시 서버가 html을 보내주어 브라우저에 페이지가 렌더링 되는 것이다
- 단점은 매 요청 시마다 브라우저가 새로고침 된다

### 데이터 요청 방법 2: AJAX
- 서버에 GET/POST 요청을 할 때 새로고침 없이 데이터를 주고 받을 수 있도록 해주는 브라우저 기능
- AJAX로 GET/POST 요청하는 방법은 세 가지가 있다
    1. XMLHttpRequest 문법 사용
    2. fetch() 문법 사용
    3. axios 같은 외부 라이브러리 사용

## AJAX 요청
### axios
```js
import axios from 'axios';

function App() {
    return (
        <button onClick={()=>{
            axios.get('url').then((res) => {
                console.log(res);
            })
            .catch(()=>{
                console.log('failed');
            })
        }}>btn</button>
    )
}
```
- 터미널에서 npm install axios 로 설치한다
- axios.get('URL'): URL GET 요청(ex. https://~~~.com/data.json)
- .then((res)=>{code}): GET 요청으로 가져온 데이터를 res 변수에 저장 후 코드를 실행
    - (참고) 실제 데이터 값을 사용할 경우에는 res.data를 사용해야 한다
- .catch(()=>{code}): GET 요청이 실패했을 경우 코드를 실행

