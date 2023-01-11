## class
### class component
```js
class Modal extents React.Component {
    contructor() {
        super()
    }

    render() {
        return (
            <div>안녕</div>
        )
    }
}
```
- 예전엔 class Component를 사용했었는데, 현재는 좀 더 간단한 function Component를 권장하고 있다
- class component는 기본적으로 contructor() {super()} render() {} 로 구성되어 있으며, 값을 반환하기 위해 render() { return() } 을 사용할 수 있다

### class state
```js
class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'kim',
            age: 20,
        }
    }

    render() {
        return (
            <div> {this.state.name} </div>
            <button onClick={ this.setState({name: 'yang'}) }>btn</button>
        )
    }
}
```
- class 내부에서 state를 사용할 때는 this.state > object 형태로 선언해 사용할 수 있다
- html 내에서 데이터 바인딩할 때는 this.state.objkey 로 사용할 수 있다
- state 변경은 this.setState({key: 'newvalue'}) 로 변경 가능한데, function component와 달리 하나의 값만 따로 변경이 가능하다

### class props
```js
class Modal extents React.Component {
    contructor(props) {
        super(props)
    }

    render() {
        return (
            <div> {this.props.name} </div>
        )
    }
}
```
- class에서 props 문법을 사용할 때는 contructor, super에 모두 props 를 상속해주어야 한다
- 데이터 바인딩 시에 마찬가지로 this.props.propsname으로 사용해야 한다


## React Bootstrap
### React Bootstrap 설치
- JS에서 사용하는 Bootstrap과 별개로 React Bootstrap 라이브러리를 따로 사용해야 한다
- 터미널에서 원하는 프로젝트 파일을 생성 후 디렉토리로 이동(npm create-react-app projectname), react bootstrap 사이트에서 제공하는 get started의 install code를 터미널에 입력하면 설치가 끝난다
- 어떤 스타일은 bootstrap css 을 요구하는 경우가 있어 bootstrap.min.css 를 import 하기 위한 link 태그를 index.html head에 넣어주면 된다

### React Bootstrap 사용
```js
import {Button} from 'react-bootstrap'

function App() {
    return (
        <div className="app">
            <Button variant="primary">Primary</Button>
        </div>
    )
}
```
- bootstrap 사용은 JS와 동일하게 사이트에서 검색해 코드를 복사해 사용하면 되는데, 차이점은 react bootstrap 라이브러리는 component 형태로 되어 있어 사용 시 라이브러리 import를 상단에 해주어야 한다는 점이다(component기 때문에 대문자로 시작)
- 여러 component 사용 시에는 import { Button, Nav } 처럼 나열해 작성해주면 된다


## 이미지 삽입
### backgrond image
```js
<div className="main-bg"></div>
```
```css
.main-bg {
    height: 300px;
    background-image: url(./img/bg.png);
    background-size: cover;
    background-position: center;
}
```
- div 태그에 이미지를 넣어 메인 배너로 활용할 수 있다
    - background-image: url에 원하는 이미지 경로를 입력
    - background-size: 이미지가 어떤 형태로 자동 맞춤 될 것인지 선택, cover는 이미지가 잘리더라도 여백 없이 채워주고 contain은 여백이 있더라도 이미지가 잘리지 않도록 채워준다
    - background-position: cover 속성일 경우 이미지의 어느 위치를 기준으로 이미지를 맞출 건지 정해주는 속성, default로는 왼쪽 상단을 기준으로 하고 center로 바꿀 경우 가운데를 기준점으로 이미지가 채워진다

### image import
```js
import bg from './img/bg.png';

function App() {
    return (
        <div className="app">
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}>
        </div>
    )
}
```
- 위와 같이 bg.png를 import해 style 속성으로 넣어주는 방법도 가능하다

### img src
```js
import bg from './img/bg.png'

function App() {
    return (
        <div className="app">
            <img src={bg} width="100%"/>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        </div>
    )
}
```
- HTML과 마찬가지로 img src 속성을 통해 이미지 경로를 삽입해 주는 방법도 가능하다
    - 상대 경로는 import 후 src={이미지명}, 절대 경로는 url 그대로 넣어주면 된다

### Public 경로
```js
function App(){
    return (
        <div className="app">
            <img src="/image.png" />
            <img src={process.env.PUBLIC_URL + '/image.png'} />
        </div>
    )
}
```
- 여러 가지 수정이 필요 없는 static file은 public 폴더에 보관해도 되는데(build 시 압축이 필요 없는 image, txt, json 등의 파일들), public 폴더의 파일들은 build 시 그대로 보존된다
- public 폴더에 저장한 이미지 파일을 사용할 땐 <img src="/image.png" /> 처럼 /이미지경로 로 사용하면 되며, 따로 import가 필요하지 않다
- 권장하는 public 경로 사용 방법은 src={process.env.PUBLIC_URL} 을 앞에 불여주는 것인데, ~.com 경로에 리액트 페이지를 배포할 땐 상관 없지만 ~.com/page 경로에 배포할 때는 /image.png 로 사용하면 경로를 찾지 못할 수 있어 상대적인 public 경로를 추가해주는 것이 좋다



