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

