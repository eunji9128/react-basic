// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순 정렬</button>
      {/* <div className='list'>
        <h4>{ title[0] }<span onClick={() => {setLike(like + 1)}}>👍</span>{ like }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function(a, i) {
          return (
            <div className='list' key={i}>
              <h4>
                { title[i] }
                <span onClick={() => {
                    var copy = [...like];
                    copy[i] += 1;
                    setLike(copy);
                  }}>👍
                </span>
                { like[i] }
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal/> : null
      }
      

    </div>
  );
}

function Modal() {
  return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  )
}

export default App;
