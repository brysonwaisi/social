import './rightbar.scss'
import uno from '../../assets/uno.jpeg'

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Your Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <span>Breezy</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <span>Breezy</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activity</span>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <p>
                <span>Breezy</span> changed their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <p>
                <span>Breezy</span> changed their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <p>
                <span>Breezy</span> changed their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <p>
                <span>Breezy</span> changed their profile pic
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <div className="online" />
              <span>Breezy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <div className="online" />
              <span>Breezy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <div className="online" />
              <span>Breezy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={uno} alt="" />
              <div className="online" />
              <span>Breezy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar