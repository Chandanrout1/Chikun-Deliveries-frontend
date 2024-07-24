import React from 'react'

const SignUp = () => {
  return (
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                <div className="bg-slate-300 px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Create an account</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="Username"
                        placeholder="Enter your Username" 
                        required
                        />
                        
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="Mobile Number"
                        placeholder="Enter your number"
                        required
                         />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        required
                         />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                         />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 hover:bg-green-600 font-bold text-blue-950 focus:outline-none my-1"
                    >Sign Up</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the Terms of Service and Privacy Policy
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SignUp