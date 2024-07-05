import React,{useState} from 'react';
import img from '../images/WhatsApp Image 2024-07-04 at 11.05.37 AM.jpeg';
import { useNavigate } from 'react-router-dom';


const Createaccount = () => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleCreateacc = () => {
    if(name.trim()==='' || email.trim() === '' || password.trim()=== '' || confirmPassword.trim() === ''){
      alert("All fields are required");
      return;
    }
    navigate('/');
  }
  const handleLogin =()=>{
    navigate('/')
  }
  return (
    <div className='flex w-100%'>
      <div className='content-justify flex-row w-[50%]'>
        <div className='flex-column mt-[20px] ml-[30px]'>
          <div className='flex'>
            <h1 className='text-[#FF748D] text-2xl font-medium'>TweetX</h1>
          </div>
          <div className='flex mt-[30px]'>
            <button className='border border-black hover:bg-black hover:text-white py-2 px-4 rounded w-[150px]' onClick={handleLogin}>Login</button>
          </div>
        </div>
        <div className='flex-column mt-[10%] ml-[30px]'>
          <div className='flex'>
            <h3 className='text-[#5D676E] text-2xl font-bold' >Create Account</h3>
          </div>
          <div className='flex mt-[20px]'>
            <input className='h-[80%] w-[50%] bg-[#F9F9F9] rounded focus:outline-none p-[10px] ml-[0px] mt-[20px]' type='text' placeholder='Name' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex mt-[20px]'>
            <input className='h-[80%] w-[50%] bg-[#F9F9F9] rounded focus:outline-none p-[10px] ml-[0px] mt-[20px]' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex'>
            <input className='h-[80%] w-[50%] bg-[#F9F9F9] rounded focus:outline-none p-[10px] mt-[20px]' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex'>
            <input className='h-[80%] w-[50%] bg-[#F9F9F9] rounded focus:outline-none p-[10px] mt-[20px]' type='password' placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex flex-row mt-[20px]'>
            <div className='ml-[200px]'>
              <button className='border bg-[#FF748D] text-[white] px-4 py-2 rounded font-bold' onClick={handleCreateacc}>Signup</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[50%] flex-row'>
        <div>
          <img src={img} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Createaccount