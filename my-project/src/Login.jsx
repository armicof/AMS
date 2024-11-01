function Login() {
    return (
        <section className="flex flex-col lg:flex-row">
            <div className="flex items-center justify-start h-screen w-">
                <div className="flex flex-col">
                    <h1 className="px-8 text-9xl">WELCOME</h1>
                    <h1 className="px-36 text-9xl border-b-8 border-b-black">EXPLORER</h1>
                </div>
            </div>
            <div className="relative margin-2 h-screen w-60 bg-white"></div>
            <div className="p-8 flex flex-col gap-5 justify-center margin-2 w-4/12 bg-indigo-950">
                <div className="mx-16">
                    <h1 className="text-3xl text-white">Log In to Start</h1>
                    <p className="text-white">Enter your details below</p>
                </div>
                <div className="flex flex-col justify-center mx-auto w-64 gap-4">
                    <input type="email" placeholder="Email" className="bg-indigo-950 py-2 border-b-2 text-white"></input>
                    <input type="password" placeholder="Password" className="bg-indigo-950 py-2 border-b-2 text-white"></input>
                </div> 
                <div className="flex flex-row justify-end mx-16">
                    <button className="bg-blue-900 text-white py-2 px-4 rounded w-28 ">Log In</button>
                </div>
                
                <button className="underline underline-offset- text-white">Dont have an account?</button>

            </div>
        </section>
    )
  }
  
  export default Login
  