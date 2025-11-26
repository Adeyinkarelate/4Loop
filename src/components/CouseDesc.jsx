import React from 'react'
import Video from '../components/Video'

const CouseDesc = ({title ,desc}) => { 
  return (
    <section>
            <div className="mt-30 ">
              <div className="flex flex-col  gap-15 p-8  lg:flex-row justify-center lg:gap-30 items-center">
                <div className="max-w-2xl space-y-4">
                  <p className="font-out  text-center lg:text-justify lg:text-2xl font-semibold bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
                    A Course You'll Actually Finish
                  </p>
    
                  <h1 className="text-3xl text-center md:text-start  lg:text-4xl text-white font-extrabold leading-relaxed">
                   {title}
                  </h1>
                  <p className="  lg:text-xl text-center lg:text-justify text-white tracking-wide font-light">
                    {desc}
                  </p>
                  <button className="w-full py-2 lg:max-w-[100px] bg-linear-to-r from-purple-800 to-purple-300 rounded-3xl text-white font-bold">
                    {" "}
                    Enroll Now
                  </button>
                </div>
                <div className=" bg-black   bg-linear-to-tr from-purple-800 to-purple-300 w-[280px] h-[400px] rounded-3xl">
                  <div className="bg-black w-[280px] h-[395px] rounded-3xl mt-0.5"></div>
                </div>
              </div>
            </div>
    
            <div className="max-w-3xl mx-auto mt-10 ">
              <h1 className="text-3xl text-center text-white  p-2 tracking-wide font-light">
                Say goodbye to scattered tutorials and endless fluff. This course
                gives you a clear, structured path with bite-sized videos that blend
                theory and hands-on practice.
              </h1>
            </div>
            {/* another section */}
          </section>
  )
}

export default CouseDesc
