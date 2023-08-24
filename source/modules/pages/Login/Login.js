import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
    .then(data => {
      if(data.status==='error') {
        toast.error(data.error);
        return;
      };
      toast.success(data.message);
      localStorage.setItem('LinkTreeToken', data.token);
      router.push('/dashboard');
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <>
    <div className='mx-auto' style={{maxWidth: '430px'}}>
    <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="content w-full bg-white px-6 py-10 rounded-3xl">
              <div className="select-none">
                <p className='py-5 font-bold text-gray-500 text-center'>Start Building your Hub 👇</p>
              </div>
              <div className="">
                  <form onSubmit={handleLogin} className="flex flex-col py-3 z-10">
                      <span className="login-email flex flex-row border-1 border-gray-100 bg-white text-black shadow-lg p-2 rounded-lg mb-4">
                        <img className='w-6' src="/svg/email.svg" style={{marginRight: '5px'}}/>
                        <input onChange={e=>setEmail(e.target.value)} value={email} id="email" className="w-full focus:outline-none autofocus pl-4" type="email" placeholder='Email ID' required/>
                      </span>
                      <input onChange={e=>setPassword(e.target.value)} value={password} id="password" className="border-1 border-gray-100 bg-white text-black shadow-lg p-2 pl-3 rounded-lg focus:outline-none autofocus mb-4" type="password" placeholder='Enter a password' required/>
                      <input className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer" type="submit" value="Login" />
                  </form>
                <h4 className='text-center text-sm py-3'>New here? <Link className='text-indigo-500' href="/apply">Apply</Link></h4>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login