import React, { useEffect, useState } from 'react'
const intialProfileData = {
  posts: 10,
  followers: 511,
  following: 511,
  username: 'Arjun Reddy',
  profilePicture: '',
};
const intialPosts = [
  {
    id: 1,
    username: 'Arjun Reddy',
    content: 'this is a post 1'
  },
  {
    id: 2,
    username: 'Arjun Reddy',
    content: 'this is a post 2'
  },
  {
    id: 3,
    username: 'Arjun Reddy',
    content: 'this is a post 3'
  },
];
const initialFollowers = [
  {
    id: 1,
    username: 'user1',
    following: true
  },
  {
    id: 2,
    username: 'user2',
    following: false
  },
  {
    id: 3,
    username: 'user3',
    following: false
  },
  {
    id: 4,
    username: 'user4',
    following: false
  },
];
const initialFollowing = [
  {
    id: 1,
    username: 'user1',
    following: true
  },
  {
    id: 2,
    username: 'user2',
    following: true
  },
  {
    id: 3,
    username: 'user3',
    following: true
  },
  {
    id: 4,
    username: 'user4',
    following: true
  },
];
const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [selectedSection, setSelectedSection] = useState('posts');
  const [posts, setPosts] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setProfileData(intialProfileData);
    setPosts(intialPosts);
    setFollowers(initialFollowers);
    setFollowing(initialFollowing);
  }, []);


  return (
    <div className='p-4 ml-[30%] mr-[30%]'>
      <div className='bg-[#FEFEFE] shadow-lg rounded-lg p-6'>
        <div className='flex items-center mb-4'>
          <div className='border w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden'>
            {profileData.profilePicture ? (
              <img src={profileData.profilePicture} className='w-full h-full object-cover' />
            ) : (
              <span></span>
            )}
          </div>
          <div className='ml-4'>
            <h3 className='text-xl font-bold'>{profileData.username}</h3>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mb-4 p-2'>
            <h3 className='text-s font-lg'>Posts : {profileData.posts}</h3>
          </div>
          <div className='mb-4 p-2'>
            <h3 className='text-s font-lg'>followers : {profileData.followers}</h3>
          </div>
          <div className='mb-4 p-2'>
            <h3 className='text-s font-lg'>following : {profileData.following}</h3>
          </div>
        </div>
        <div className='flex'>
          <button className='ml-[10%]' onClick={() => setSelectedSection('posts')}>Posts</button>
          <button className='ml-[10%]' onClick={() => setSelectedSection('followers')}>Followers</button>
          <button className='ml-[10%]' onClick={() => setSelectedSection('following')}>Following</button>
        </div>
        <div className='mb-4 justify-between mt-[20px]'>
          {selectedSection === 'posts' && (
            <div>
              <div>
                {posts.length > 0 ? (
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className='border p-4 mb-2 rounded-md flex justify-between items-center'>
                        <h3>{post.username}</h3>
                        <p>{post.content}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>no posts available</p>
                )}
              </div>
            </div>
          )}
          {selectedSection === 'followers' && (
            <div>
              {followers.length > 0 ? (
                <ul>
                  {followers.map((user) => (
                    <li key={user.id} className='border p-4 mb-2 rounded-md flex justify-between items-center'>
                      <h3>{user.username}</h3>
                      <button className={`ml-4 p-2 rounded ${user.following ? 'bg-white text-[#707070]' : 'bg-[#FF748D] text-white'}`}>{user.following ? 'following' : 'Follow'}</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Followers available</p>
              )}
            </div>
          )}
          {selectedSection === 'following' && (
            <div>
              {following.length > 0 ? (
                <ul>
                  {following.map((user) => (
                    <li key={user.id} className='border p-4 mb-2 rounded-md flex justify-between items-center'>
                      <h3>{user.username}</h3>
                      <button className={`ml-4 p-2 rounded ${user.following ? 'bg-white text-[#707070]' : 'bg-[#FF748D] text-white'}`}>{user.following ? 'following' : 'Follow'}</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Followers available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile