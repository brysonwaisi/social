import Post from '../post/Post'
import './posts.scss'

const Posts = () => {

  // dummy data

  const posts = [
    {
      id: 1,
      name: 'breezy',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna mi. Fusce semper libero non arcu suscipit convallis. Sed sit amet gravida mauris. ',
      img: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'breezy',
      userId: 2,
      profilePic: 'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna mi. Fusce semper libero non arcu suscipit convallis. Sed sit amet gravida mauris. ',
    },
  ];

  return (
    <div className="posts">
      {posts.map(post => {
        <Post post={post} key={post.id} />
      })}
    </div>
  )
}

export default Posts