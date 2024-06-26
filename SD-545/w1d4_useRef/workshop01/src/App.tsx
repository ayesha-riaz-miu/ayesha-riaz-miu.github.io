import { useRef, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import _ from 'lodash'
import dayjs from 'dayjs'

import { v4 as uuvidv4 } from 'uuid'

import classNames from 'classnames'


interface Comment {
  rpid: number | string;
  user: {
    uid: string,
    avatar: string,
    uname: string
  };
  content: string;
  ctime: string;
  like: number;
}

// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: '13258165',
      avatar: '',
      uname: 'Jay Zhou',
    },
    // comment content
    content: 'Nice, well done',
    // created datetime
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: 'Song Xu',
    },
    content: 'I search for you thousands of times, from dawn till dusk.',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
    ctime: '10-19 09:00',
    like: 66,
  },
  {
    rpid: 5,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'follow me.',
    ctime: '11-19 09:00',
    like: 89,
  },
]



// current logged in user info
const user = {
  // userid
  uid: '30009257',
  // profile
  avatar,
  // username
  uname: 'John',
}


// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
]

const App = () => {

  const [comment, setcomment] = useState<Comment[]>(defaultList)
  const [tabtype, settab] = useState('hot')

  const textref = useRef<HTMLTextAreaElement>(null)


  const delte_comment = (rpid: number|string) => {

    setcomment(comment.filter(item => item.rpid !== rpid))

  }

  const change_tab = (value: string) => {
    settab(value)

    if (value == 'hot') {
      setcomment(_.orderBy(comment, 'like', 'desc'))
    }
    else {
      setcomment(_.orderBy(comment, 'ctime', 'desc'))
    }

  }
  const post_button = () => {
    //console.log(textref.current!.value);

    const new_comment = {

      rpid: uuvidv4(),
      user,
      content: textref.current!.value,
      ctime:dayjs(Date.now()).format('MM-DD HH-mm'),
      like: 100,
    }
    
      setcomment([...comment, new_comment])

      textref.current!.value = '';
      textref.current!.focus();



  }





return (
  <div className="app">
    {/* Nav Tab */}
    <div className="reply-navigation">
      <ul className="nav-bar">
        <li className="nav-title">
          <span className="nav-title-text">Comments</span>
          {/* Like */}
          <span className="total-reply">{10}</span>
        </li>
        <li className="nav-sort">
          {/* highlight class name： active */}

          {tabs.map(tab => (
            <span className={classNames('nav-item', { 'active': tab.type == tabtype })} key={tab.type} onClick={() => change_tab(tab.type)}>{tab.text}   </span>

          ))

          }

          {/* <span className='nav-item'>Top</span>
            <span className='nav-item'>Newest</span> */}
        </li>
      </ul>
    </div>

    <div className="reply-wrap">
      {/* comments */}
      <div className="box-normal">
        {/* current logged in user profile */}
        <div className="reply-box-avatar">
          <div className="bili-avatar">
            <img className="bili-avatar-img" src={avatar} alt="Profile" />
          </div>
        </div>
        <div className="reply-box-wrap">
          {/* comment */}

          <textarea ref={textref}
            className="reply-box-textarea"
            placeholder="tell something..."
          />
          {/* post button */}

          <div className="reply-box-send" onClick={post_button}>
            <div className="send-text">post</div>
          </div>

        </div>
      </div>
      {/* comment list */}



      <div className="reply-list">
        {comment.map(item => (
          <div className="reply-item" key={item.rpid}>
            {/* profile */}
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img
                  className="bili-avatar-img"
                  alt=""
                />
              </div>
            </div>

            <div className="content-wrap">
              {/* username */}
              <div className="user-info">
                <div className="user-name">{item.user.uname}</div>
              </div>
              {/* comment content */}
              <div className="root-reply">
                <span className="reply-content">{item.content}</span>
                <div className="reply-info">
                  {/* comment created time */}
                  <span className="reply-time">{item.ctime}</span>
                  {/* total likes */}
                  <span className="reply-time">Like:{item.like}</span>

                  {
                    item.user.uid === user.uid &&
                    <span className="delete-btn" onClick={() => delte_comment(item.rpid)}>
                      Delete
                    </span>
                  }


                </div>
              </div>
            </div>
          </div>
        ))}


        {/* comment item */}




      </div>
    </div>
  </div>
)
}

export default App
