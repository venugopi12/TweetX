import React, { useEffect, useState } from 'react'

const initialUsers = [
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
const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(initialUsers);
  }, [])
  const handleFollow = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, following: !user.following } : user));
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-6'>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id} className='ml-[30%] mr-[30%] border p-4 mb-2 rounded-md flex justify-between items-center'>
              <h3>{user.username}</h3>
              <button onClick={() => handleFollow(user.id)} className={`ml-4 p-2 rounded ${user.following ? 'bg-white text-[#707070]' : 'bg-[#FF748D] text-white'}`}>{user.following ? 'following' : 'Follow'}</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No User available</p>
      )}
    </div>
  )
}

export default Users