## Props
### props between components
```js
function App() {
    let [title, setTitle] = useState(['title1', 'title2', 'title3']);

    <Modal/>
}

function Modal() {
    return (
        <div>
            <h4>{ title[0] }</h4> 
            <p>상세 내용</p>
        </div>
    )
}
// Modal not working
```
- let으로 선언한 변수의 유효 범위는 function 단위기 때문에 App 바깥에 선언된 Modal component에서 title state 변수 값을 가져다 사용할 수 없다

```js
function App() {
    let [title, setTitle] = useState(['title1', 'title2', 'title3']);
    let [content, setContent] = useState(['content1', 'content2', 'content3']);

    <Modal title = {title} content = {content}/>
}

function Modal(props) {
    return (
        <div>
            <h4>{ props.title[0] }</h4> 
            <p>{ props.content[0] }</p>
        </div>
    )
}
```
- 다만, App > Modal 처럼 부모 자식 관계를 가진 component의 경우 state를 상속해서 사용할 수 있다(=props)
- Modal component 사용 시 상속할 변수를 선언해주고, Modal 선언 부분에서 props를 parameter로 작성 뒤 return 내부에서 props.state명 으로 사용할 수 있다
    - 변수명은 새로 작성해도 되지만 편의상 state와 같은 이름을 사용
    - 아무 이름이나 가능하나 대체로 props 사용
- props 문법은 부모 > 자식에게만 상속되어 사용할 수 있으며, 자식 > 부모 혹은 자식 > 자식 간에는 상속할 수 없다

