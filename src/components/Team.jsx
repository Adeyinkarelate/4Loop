
import { Helmet } from "react-helmet";
import { TeamMembers } from "../data/data";
import { motion } from 'framer-motion';


const Team = () => {
  return (
    <div>
     

      <div className="max-w-7xl container mx-auto py-10 my-10">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <h2 className="text-2xl font-semibold md:text-4xl font-out text-white">The Team</h2>
          <p className="mt-1 text-gray-400">
            Our team is made up of leading practitioners who bring current best
            practices and case studies to sessions that fit into your work
            schedule.
          </p>
        </div>

        <div className="grid-col-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TeamMembers.map((member, index) => (
            <motion.div 
            initial={{
                opacity: 0,
                x: 100,
                transition: { duration: 0.5, delay: 1 },
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 1 },
              }}
              key={index}
              className="flex gap-x-4 gap-y-3 rounded-xl border border-gray-900 p-3 "
            >
              <img
                className="h-38 w-38 rounded-lg object-cover object-top"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />

              <div className="flex h-full flex-col">
                <div>
                  <h3 className=" text-md font-out  font-semibold text-gray-400 dark:text-gray-200 md:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs  text-gray-500">
                    {member.position}
                  </p>
                  <p className="mt-1 text-xs  text-gray-500">
                    {member.cert}
                  </p>
                </div>

                <div className="mt-auto flex items-center space-x-8 ">
                  {/* <a
                    target="_blank"
                    rel="noreferrer"
                    href={member.linkedInURL}
                    className="inline-flex items-center justify-center text-gray-500 hover:text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="h-5 w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a> */}

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-custom_light_purple px-3 py-1 text-xs font-medium text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    {member.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
