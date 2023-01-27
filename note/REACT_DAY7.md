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
### axios get
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

### 다중 axios get
```js
Promise.all( [axios.get('URL1'), axios.get('URL2')] )
    .then((res)=>{code})
    .catch(()=>{code})
```
- 2개 이상의 axios get 요청을 하기 위해서는 Promise.all([])을 사용할 수 있다
- then, catch 문법을 붙일 수 있고, Promise.all 안의 모든 get 요청이 완료되었을 때만 then 구문이 동작한다

### axios post
```js
axios.post('URL', {name: 'kim'})
    .then((res)=>{code})
    .catch(()=>{code})
```
- axios post 요청은 위와 같이 사용할 수 있으며, 기입한 서버 URL로 {name: 'kim'} object를 전달한다

### fetch
```js
fetch('URL')
    .then((res) => {res.json()})
    .then((res) => {})
```
- fetch는 JS 기본 문법으로 마찬가지로 서버에 데이터 요청을 할 수 있다
- 다만 fetch 를 사용할 때는 결과 데이터(res)를 json 변환해주어야 한다(변환은 아래 설명)


## JSON
### JSON
- 서버와 데이터를 주고 받을 때는 문자 자료형만 가능하며, array/object 등의 자료형은 전송이 불가능하다
- 이 때문에 array, object 등의 자료형은 전체를 ""로 묶어 문자 자료형으로 변환하는데, 이걸 JSON 이라고 한다
- 따라서 위 데이터를 서버와 주고 받을 때는 JSON 변환이 필요하다
    - (참고) axios 는 JSON 자료형을 자동으로 변환해주어 res.data 처럼 값을 사용할 수 있다




