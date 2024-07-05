import React, { useEffect, useState } from 'react'

const intialPosts = [
  {
    id:1,
    username: 'Arjun Reddy',
    content : 'this is a post 1'
  },
  {
    id:2,
    username: 'Arjun Reddy',
    content : 'this is a post 2'
  },
  {
    id:3,
    username: 'Arjun Reddy',
    content : 'this is a post 3'
  },
]
const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(intialPosts);
    console.log(intialPosts);
  }, []);

  console.log(posts)
  return (
    <div className='bg-[#FEFEFE] ml-[30%] mr-[30%] mt-[50px] pl-[60px]'>
      <div className='items-center pb-[20px]'>
        <button className='border bg-[#FF748D] text-[white] px-4 py-2 rounded font-bold'>Write</button>
      </div>
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
  );
};

export default Feed