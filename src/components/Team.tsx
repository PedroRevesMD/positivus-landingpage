import "../index.css"
import JohnPic from "../assets/johnpic.webp"
import JanePic from "../assets/janepic.webp"
import MichaelPic from "../assets/michaelpic.webp"
import EmilyPic from "../assets/emilypic.webp"
import BrianPic from "../assets/brianpic.webp"
import SarahPic from "../assets/sarahpic.webp"

import type { TeamCardType } from "../types/TeamCardType";
import TeamCard from "./TeamCard"

export const teamMembers: TeamCardType[] = [
  {
    id: "00",
    name: "John Smith",
    position: "CEO and Founder",
    imgUrlPath: `${JohnPic}`,
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
  },
  {
    id: "01",
    name: "Jane Doe",
    position: "Director of Operations",
    imgUrlPath: `${JanePic}`,
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
  },
  {
    id: "02",
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    imgUrlPath: `${MichaelPic}`,
    description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
  },
  {
    id: "03",
    name: "Emily Johnson",
    position: "PPC Manager",
    imgUrlPath: `${EmilyPic}`,
    description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
  },
  {
    id: "04",
    name: "Brian Williams",
    position: "Social Media Specialist",
    imgUrlPath: `${BrianPic}`,
    description: "4+ years of experience in social media marketing. Expert in scheduling content and analyzing metrics"
  },
  {
    id: "05",
    name: "Sarah Kim",
    position: "Content Creator",
    imgUrlPath: `${SarahPic}`,
    description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content."
  }
];

export default function Team() {
  return (
    <section className="max-w-screen m-20">
      <div className="flex flex-col lg:flex-row gap-x-8 items-center">
        <h3 className="font-medium bg-lime-green p-2 rounded-xl text-dark-gray text-2xl font-grotesk">Team</h3>
        <p className="text-base font-grotesk max-w-[450px] my-4 text-center lg:text-start">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 my-6">
        {teamMembers.map((member) => (
          <TeamCard id={member.id} imgUrlPath={member.imgUrlPath} name={member.name} position={member.position} description={member.description} />
        ))}
      </ul>
      <div className="flex justify-center lg:justify-end lg:mr-26 max-w-screen my-4">
        <button type="button" className="bg-dark-gray font-grotesk text-white w-fit px-16 py-4 my-4 rounded-lg" >See all team</button>
      </div>
    </section >
  )
}
