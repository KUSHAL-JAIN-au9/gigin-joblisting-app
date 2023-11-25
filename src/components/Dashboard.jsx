import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL, GET_JOBS, HOT_GIGS } from "../service/service"


const Dashboard = () => {
const [job, setJobs] = useState([])
const [hotgigs, setGigs] = useState([])

useEffect(() => {
  
getJobs()
gethotGigs()


}, [])

const getJobs =  async () => {
    const {data }= await axios.post(`${BASE_URL}${GET_JOBS}`,{
        employee_id:"221516"
        }
        )
    console.log(data.data);

    setJobs(data.data);

}

const gethotGigs =  async () => {
    const {data }= await axios.post(`${BASE_URL}${HOT_GIGS}`,{
        employee_id:"221516"
        }
        )
    console.log(data.data);

    setGigs(data.data);

}


console.log("jobs",job);
console.log("jobs",hotgigs);

  return (
    <>
    <h1 className=' w-full text-center text-2xl font-extrabold'><u>Job listing app</u></h1>
    <div className=" w-full flex flex-row justify-around" >
        
        {
            job.map((item) => {
                return <div key={item} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                <div className="flex justify-end px-4 pt-4">
                    {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button> */}
                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/> */}
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {item.em.name || "NA"}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400"> comapny id:{item.id}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400"> comapny city:{item.dtls.loc.city}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">  state:{item.dtls.loc.state}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">  country:{item.dtls.loc.country}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400"> comapny :{item.cmpny.ind.name|| "NA"}</span>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">apply</a>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</a>
                    </div>
                </div>
                </div>
            // </div>
            })
        }
        </div>
        </>)


}

export default Dashboard