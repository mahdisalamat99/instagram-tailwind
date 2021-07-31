import Head from 'next/head'

export default function Home() {
  return (
    <div className="w-full h-screen bg-myTheme">
      <div className="w-full h-full  flex flex-row items-center" >

        <div className=" w-6/12 pl-60  flex justify-end items-center h-full">
          <img src="/images/Phone.png" ></img>
        </div>
        <div className="w-6/12 p-10 items-center  " >
          <div className="flex flex-col bg-white w-72 p-2 items-center" >
            <h1 className="mb-5" >Instagram</h1>
            <input className="w-60 mb-5 bg-gray-300 p-1 rounded-md" type="text" placeholder="phone number, user name, or email" ></input>
            <input className="w-60 mb-5 bg-gray-300 p-1 rounded-md" placeholder="password" ></input>
            <button className="w-60 p-2 bg-blue-500 text-white rounded-md" >Log In</button>
            <div className="m-1" >
              or
            </div>
            <div className="m-2 text-blue-600" >Log in with facebook</div>
            <div className="m-2" >forget password?</div>
          </div>

          <div className="bg-white mt-2 w-72 p-5 items-center" >Don't have an account?<a>Sign up</a></div>
          <p className="m-2 pl-11" >Get the app</p>

          <div className="flex" >
            <img src="/images/Google-play.png" className="flex" ></img>
            <img src="/images/App-store.png" className="flex" ></img>
          </div>


        </div>

      </div>

      <div></div>
    </div>
  )
}
