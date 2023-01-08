## onClick attribute
### JSX onClick
```html
<div onclick="function()">onclick 함수</div>
```
```js
function App(){
    return(
        <div onClick={function}>onClick 함수</div>
    )
}
```
- html에서는 onclick="콜백 함수()" 로 사용하는 onclick attribute를 JSX에서는 onClick={콜백 함수}의 형태로 사용한다
- 콜백 함수 자리에 그냥 코드를 넣으면 실행되지 않고, 함수 형태가 들어가야 한다(함수명 혹은 function() {}, () => {})

## state 변경
### setState
```js
function App(){

    let [like, setLike] = useState(0);

    return (
        <h4><span onClick={() => {setLike(like + 1)}}>👍</span>{ like }</h4>
    )
}
```
- state 값을 변경하기 위해서는 setState 함수를 이용해 변경해야 UI에 반영될 수 있다(state 값을 변수처럼 변경은 가능하나 UI 반영은 안된다)
- useState 를 활용해 엘리먼트 클릭 시 변하는 데이터 값을 바로 UI에 반영(재랜더링)되도록 할 수 있다

### state array 변경
```js
function App(){
    
    let [arr, setArr] = useState([1,2,3]);

    return (
        <button onClick={() => {setArr([2,2,3])}}>btn</button>
    )
}
```
- 위와 같이 state array 자료형을 변경할 때는 전체 array를 다시 선언해주어 변경할 수 있다
- 다만 이 방법은 array 크기가 클 경우 사용이 어렵고, 확장성이 없다

```js
function App(){
    
    let [arr, setArr] = useState([1,2,3]);

    return (
        <button onClick={() => {
            arr[0] = 2;
            setArr(arr);
        }}>btn</button>
    )
}
```
- 위와 같이 특정 인덱스만 변경 후 setState 함수를 통해 업데이트 해줄 수 있다
- 다만 array 원본을 훼손시키는 방법이므로 위험 요소가 높다

```js
function App(){
    
    let [arr, setArr] = useState([1,2,3]);

    return (
        <button onClick={() => {
            let copy = [...arr];
            copy[0] = 2;
            setArr(copy);
        }}>btn</button>
    )
}
```
- 원본을 훼손시키지 않고 복사본을 만들어 값을 변경, state 변경해주는 방법으로 가장 안전하고 확장성이 높다
- ...arr 은 spread operator라는 문법으로 array를 해체시켜준다, spread operator로 해체 후 다시 []를 만들어주는 이유는 아래 setState 동작 원리를 통해 이해할 수 있다

### setState 동작 원리
```js
function App(){
    
    let [arr, setArr] = useState([1,2,3]);

    return (
        <button onClick={() => {
            let copy = arr; // spread operator 사용 X
            copy[0] = 2;
            setArr(copy); // state 변경 안됨
        }}>btn</button>
    )
}
```
- 위처럼 코드를 작성하면 setState 함수가 state 변경을 해주지 않는다
- setState 함수가 state를 변경시키는 전제 조건이 있는데, 이는 기존 state와 변경할 state를 비교했을 때 '같지 않을' 경우에만 변경해주기 때문이다
- copy = arr 을 할 경우에는 arr 값이 저장된 RAM 주소만 카피하기 때문에 setState가 copy == arr 비교했을 때에는 같은 변수라고 판단하게 된다
    - console.log(copy == arr) > true 가 나온다
    - array, object 등이 위와 같은 성질을 가진 자료형이며, 자세한 내용은 javascript reference data type을 참고할 수 있다
- 이를 방지하기 위해 [...arr] 로 카피할 경우 데이터를 새로운 주소에 할당하게 되어 setState에서 변경이 가능해진다, 이를 shallow copy or deep copy 라고 한다


## Component
### Component 작성
```js
function App(){
    return (
        <div>
            <Modal></Modal>
            <Modal/>
        </div>
    )
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세 내용</p>
        </div>
    )
}
```
- React에서는 긴 html을 별도 function으로 정의하여 태그화할 수 있는데, 이를 Component라고 한다(Component는 대문자로 시작하는 게 일반적)
    - (참고) function App(){} 도 하나의 Component로 Index.js 에서 <App></App> 으로 사용하고 있음을 알 수 있다
- <Modal></Modal> or <Modal/> 두 가지 다 사용 가능하다
- Component 사용 시 장점
    1. 반복 되는 html 구조를 Component화 하여 효율을 높일 수 있다
    2. 내용이 자주 변경 되는 html 구조를 Component화 하면 유지 보수가 편해진다
    3. 페이지 별로 Component화 하면 통합 시 유용하다
    4. 다른 팀원과 협업할 때 Component 단위로 작업할 수 있다

```js
const Modal = () => {
    return ( <div></div> )
}
```
- 변수를 선언해 함수를 저장하여 사용해도 Component로 사용할 수 있다
- const 를 사용하여 변수 선언 시 실수로 값을 변경하는 것을 막을 수 있어 유용하다

### Component 동적 UI
```js
function App(){
    let [modal, setModal] = useState(false);
    
    return (
        <button onClick={ setModal(true) }>btn</button>
        {
            modal == true ? <Modal/> : null
        }
    )
}

function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세 내용</p>
        </div>
    )
}
```
- Modal Component를 버튼 클릭 시에만 보이는 동적 UI 구현을 위해서는 state와 조건식을 이용할 수 있다
    - JS에서는 html class를 변경하는 방식으로 동적 UI를 구현했다면, react에서는 상태 변수를 이용해 html 렌더링을 조작하는 방식이다
- modal state를 만들어 동적 상태를 저장해놓고(true = visible, false = invisible 등), modal == true 일 경우에만 <Modal/> component를 출력해주면 된다
- 다만 JSX 안에서 {} 안에 JS 문법을 사용할 때 if, for 등 문장(statement)를 사용할 수 없고, 식(expression)의 형태인 삼항연산자(Condition oprator)를 사용할 수 있다
> 문(statement)과 식(expression)의 차이
    - 식은 값을 만들어 내며 다른 식의 하위 요소로 계산에 참여할 수 있는 반면 문은 자신을 둘러싸고 있는 가장 안쪽 블록의 최상위 요소로 존재하며 아무런 값을 만들어 내지 않는다는 차이가 있다


### state toggle
```js
modal === true ? setModal(false) : setModal(true);
setModal(!modal);
```
- 동적 UI 구현 시 state toggle 을 이용할 때 삼항연산자를 이용해 조건을 붙일 수 있지만, 더 간단하게는 !modal 을 이용해 true > false, false > true로 변경해줄 수 있다


