// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let today = new Date();

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, 0]);
  let [post_input, setPostInput] = useState('');
  let [date, setDate] = useState(new Array(3).fill(today.toLocaleDateString()));

  const submitPost = function() {
    var copy_title = [...title];
    copy_title.unshift(post_input);
    setTitle(copy_title);
    
    var copy_like = [...like];
    copy_like.unshift(0);
    setLike(copy_like);

    var copy_date = [...date];
    copy_date.unshift(today.toLocaleDateString());
    setDate(copy_date);
  }

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

      {
        title.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                var copy = [...modal];
                copy[0] = !copy[0];
                copy[1] = i;
                setModal(copy);
              }}>
                {title[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  var copy = [...like];
                  copy[i] += 1;
                  setLike(copy);
                }}>👍
                </span>
                {like[i]}
              </h4>
              <p>{ date[i] }</p>
              <button onClick={() => {
                var copy_title = [...title];
                copy_title.splice(i, 1);
                setTitle(copy_title);

                var copy_like = [...like];
                copy_like.splice(i, 1);
                setLike(copy_like);
              }}>삭제
              </button>
            </div>
          )
        })
      }

      {
        modal[0] === true ? <Modal title={title} modal={modal} /> : null
      }

      <div>
        <input type="text" onChange={(e) => {
          setPostInput(e.target.value);
        }} />
        <button onClick={
          post_input === '' ? null : submitPost
        }>글 발행</button>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modal[1]]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}


export default App;
