import Logo from "../../assets/images/job hunt.png";
import { Link } from "react-router-dom";


const Banner = ()=>{
    return (
                  <div className="flex flex-col md:flex-row mt-28 ">
                    <div className="">
                      <div
                        className=""
                      
                      >
                        <img src={Logo} alt="" />
                      </div>
                    </div>
                    <div className="basis-1/2 ">
                      <div className="mx-4 lg:mx-8">
                        <h2 className="text-2xl text-center md:text-4xl font-bold my-6">Over 2000 local and international jobs open for grabs!</h2>
                        <p className="text-lg font-normal my-4 hidden md:block text-black">
                        Owerri Job Hunt is the biggest and largest talent pull targeting job providing platforms for job seekers. This Job Hunt will allow us to onboard more candidates, provide businesses with more equipped human resources, reduce the cost of hiring for so many businesses, and help youths create better means of livelihood for themselves
                        </p>
                      </div>
                      <div className="flex justify-center md:justify-start lg:justify-center md:flex-col lg:flex-row  mt-16 mb-12 md:mb-0  lg:ml-6">
                        <button className="mr-2  text-xs">
                          <Link to="/users/register"  className="bg-green-500 py-3 px-6 rounded-full text-white text-xs md:text-sm ">Register As Student</Link>
                        </button>

                        <button className="md:mt-12 lg:mt-0">
                          <Link  to="/companies/register"  className="bg-indigo-500 text-white py-3 px-6 rounded-full text-xs md:text-sm" >Register As Business</Link>
                        </button>
                      </div>
                    </div>
                </div>
    )
}

export default Banner;