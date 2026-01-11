import "../index.css"
import { teamMembers } from "../teamMembers"
import TeamCard from "./TeamCard"


export default function Team() {
  return (
    <section className="max-w-screen m-8 lg:m-20">
      <div className="flex flex-col lg:flex-row gap-x-8 items-center">
        <h2 className="font-medium bg-lime-green p-2 rounded-xl text-dark-gray text-2xl font-grotesk">Team</h2>
        <p className="text-base font-grotesk max-w-[450px] my-4 text-center lg:text-start">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 my-6 justify-items-center">
        {teamMembers.map((member) => (
          <TeamCard id={member.id} imgUrlPath={member.imgUrlPath} name={member.name} position={member.position} description={member.description} />
        ))}
      </ul>
      <div className="flex justify-center lg:justify-end lg:mr-16 max-w-screen my-4">
        <button type="button" className="bg-dark-gray font-grotesk text-white w-fit px-16 py-4 my-4 rounded-lg cursor-pointer" >See all team</button>
      </div>
    </section >
  )
}
