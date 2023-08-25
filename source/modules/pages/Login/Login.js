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
    <div className='mx-auto' style={{maxWidth: '410px'}}>
    <div className="flex flex-col justify-center items-center">
          <div className="content w-full bg-white py-10 rounded-xl px-3">
              <div className="select-none">
                <p className='py-5 font-bold text-gray-500 text-center'>Start Building your Hub 👇</p>
              </div>
              <div className="">
                  <form onSubmit={handleLogin} className="flex flex-col py-3 z-10">
                      <span className="login-email flex flex-row border border-gray-700 bg-white text-black shadow-md p-2 rounded-lg mb-4">
                        <img className='w-6' src="/svg/email.svg" style={{marginRight: '5px'}}/>
                        <input onChange={e=>setEmail(e.target.value)} value={email} id="email" className="w-full focus:outline-none autofocus pl-4" type="email" placeholder='Email ID' spellCheck="false" required/>
                      </span>
                      <input onChange={e=>setPassword(e.target.value)} value={password} id="password" className="border border-gray-700 bg-white text-black shadow-lg p-2 pl-3 rounded-lg focus:outline-none autofocus mb-4" type="password" placeholder='Enter a password' required/>
                      <input className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer" type="submit" value="Login" />
                  </form>
                  <p className='text-center text-sm pb-2'>or</p>
                  <button
                      class="w-full flex justify-center px-4 py-2 border gap-4 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                      <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                      <span>Login with Google</span>
                  </button>
                <h4 className='text-center text-sm py-3 text-gray-500'>New here? <Link className='text-indigo-500 font-bold' href="/register">Sign up</Link></h4>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login