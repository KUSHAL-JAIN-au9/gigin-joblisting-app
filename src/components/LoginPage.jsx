import axios from "axios";
import { BASE_URL, LOGIN } from "../service/service";
import { useState } from "react";


const LoginPage = ({setIsauthenticated
}) => {

const [email, setemail] = useState("emailforapi@gigin.ai")
const [password, setpassword] = useState("65$az")
const [errmsg, setErrmsg] = useState("")

    const handleSubmit =async (e) => { 
        e.preventDefault()

        try {
            const {data }= await axios.post(`${BASE_URL}${LOGIN}`,{
                email : email , 
                password : password
                } 
                )
    
                console.log(data);
                // console.log(email);
                // console.log(password);

                if(data=== '') {
                    setIsauthenticated(true)
                }else {
                    setErrmsg(data?.message)
                }
              
            
        } catch (error) {
            throw new Error(error.message)

        }

      
     }

  return (
    <div>
      
<form className="max-w-sm mx-auto">
<h1 className="w-full h-44  text-center text-2xl font-bold " >Login Page</h1>

{errmsg && <span className="font-bold text-lg text-red-700" >{errmsg}</span>}
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={(e) => setemail(e.target.value)} required value={email} />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password}  onChange={(e) => setpassword(e.target.value)} />
  </div>
  {/* <div className="flex items-start mb-5">

    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required >
    </div>
    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div> */}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"onClick={handleSubmit} >Submit</button>
</form>

    </div>
  )
}

export default LoginPage