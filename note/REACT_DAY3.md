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


## input
### input type
```js
<input type="text"/>
<input type="range"/>
<input type="date"/>
<input type="number"/>
<textarea></textarea>
<select></select>
```
- input은 react, JS가 동일하며, 특정 값을 입력 받을 수 있는 input type 속성을 정의할 수 있다
- 여러 줄의 문장을 입력 받기 위해서는 text area를 사용하면 된다
- 정해진 option 중 선택하도록 하는 dropdown input 은 select를 사용하면 된다

### input event
```js
<input onChange={() => { 실행할 코드 }}>
<input onInput={() => { 실행할 코드 }}>
```
- 사용자가 input 입력할 때마다 특정 코드를 실행하도록 할 수 있다
- onChange, onInput 모두 입력 마다 코드를 실행하는 이벤트 핸들러이며, 이외에 다양한 이벤트 핸들러가 많다

```js
<input onChange={(e) => { console.log(e.target.value) }}>
```
- 사용자가 input에 입력한 값을 이벤트 파라미터로 받아올 수 있다
- 이벤트 객체는 JS study 참고
- 받아 온 입력 값은 변수나 state에 저장해두고 사용하는 것이 편리하다

### 기본 동작 해제, 버블링 해제
```js
<button onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
}}>
```
- 기본 동작을 멈추게 해주고, 버블링이 생기지 않게 해준다(JS Study 참고)

