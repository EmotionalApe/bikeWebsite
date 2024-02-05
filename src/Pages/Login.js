import React from 'react'

const Login = () => {
    return (
        <div className='bg-gray-700 w-screen h-screen flex flex-col items-center justify-center space-y-14'>
            <div className='text-white text-4xl'>Login to Your Account</div>
            <div className='text-white'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </div>

            <div className='flex flex-row space-x-5'>
                <div className='flex flex-col space-y-4'>
                    <input className='w-[250px] h-[50px] bg-black text-white p-2 rounded-xl text-sm' placeholder='Email' />
                    <input className='w-[250px] h-[50px] bg-black text-white p-2 rounded-xl text-sm' placeholder='Password' />
                    <button className='w-[250px] h-[50px] bg-red-600 text-center rounded-lg p-2 text-white'>Login to your account</button>
                    <div className='text-white text-[10px]'>Don't have an account yet? <b>Register Now!</b></div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <button className='w-[250px] h-[50px] border-[1px] border-white text-center rounded-lg p-2 text-white'>
                        Sign in with Google
                    </button>

                    <button className='w-[250px] h-[50px] border-[1px] border-white text-center rounded-lg p-2 text-white'>
                        Sign in with Facebook
                    </button>

                    <button className='w-[250px] h-[50px] border-[1px] border-white text-center rounded-lg p-2 text-white'>
                        Sign in with Appple
                    </button>
                </div>
            </div>

            <div className=' text-white underline'>Forgot Password?</div>
        </div>
    )
}

export default Login