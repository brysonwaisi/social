import { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import './stories.scss'

const Stories = () => {

  // dummy data 

  const stories = [
    {
      id: 1,
      name: 'breezy',
      img: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'breezy',
      img: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'breezy',
      img: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'breezy',
      img: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  const { currUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story">
          <img src={currUser.profilePic} alt="" />
          <span>{currUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story => {
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      })}
    </div>
  )
}

export default Stories