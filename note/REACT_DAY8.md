## tab UI
```js

function Detail() {

    let [tab, setTab] = useState(0);
    let [tab_fade, setTabFade] = useState('');

    useEffect(() => {
        setTimeout(() => {setTabFade('end');}, 100);
        return () => {
            setTabFade('');
        }
    }, [tab]);

    return (
        <div>
            <Nav variant='tab' defaultActiveKey='link-0'>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey='link-0'>Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey='link-1'>Tab 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab} tab_fade = {tab_fade}/>
        </div>
    )
}

function TabContent(props) {
    return (
        <div className={'start '+ props.tab_fade}>
            {
                [<div>content 0</div>, <div>content 1</div>][props.tab]
            }
        </div>
    )
}
```
- 간단한 tab UI를 만들 때 기존에 배웠던 useState, useEffect 를 이용할 수 있다(css 내의 start, end style은 opacity 1 > 0, transition 0.5s 로 구현 되어 있음)
- tab_fade 라는 state로 className='start' > className='start end'로 스타일을 추가할 수 있다
- tab 클릭 시 tab state가 변경되는 것을 이용해 useEffect의 트리거를 [tab]으로 설정해놓고, 변경 시 tab_fade 가 '' > 'end'로 변경되도록 할 수 있다
- 이 떄 주의할 점은 '' 에서 'end' 로 스타일이 변경될 때만 transition이 적용되므로(기존에 end 가 남아있으면 적용 안됨), useEffect cleansing code를 넣어주어야 한다
    - cleansing code 는 return () => { setTabFade('') }
    - 메인 실행 코드에서 setTimeout을 써주었는데, 이유는 리액트 18버전 이상부터는 automatic batch 기능이 추가 되었기 때문인데, automatic batch는 효율성을 위해 setState 함수가 연달아 실행될 경우 변경 함수를 모두 처리한 후 재랜더링은 한 번만 실행해주어 transition 적용이 보이지 않게 된다. 이를 방지 하기 위해서는 setTimeout() 으로 setState 함수 간의 시간차를 두거나 flushSync() 를 이용해 automatic batching 을 막을 수 있다

