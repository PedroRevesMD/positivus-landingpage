import type { TeamCardType } from "./types/TeamCardType";

import JohnPic from "../src/assets/johnpic.webp"
import JanePic from "../src/assets/janepic.webp"
import MichaelPic from "../src/assets/michaelpic.webp"
import EmilyPic from "../src/assets/emilypic.webp"
import BrianPic from "../src/assets/brianpic.webp"
import SarahPic from "../src/assets/sarahpic.webp"

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

