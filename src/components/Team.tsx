"use client";

import SectionHeading from "./SectionHeading";
import Wrapper from "./Wrapper";
import teamMember from "../assets/dr1.png";
import TeamMember from "./TeamMember";
import Carousel from "./Carousel";

const Team = () => (
  <section id="team">
    <Wrapper>
      <SectionHeading
        direction="right"
        title={
          <>
            Meet Our Team of{" "}
            <span className="text-[2.6rem] font-bold">Professionals</span>
          </>
        }
        subtitle={
          <>
            Our <span className="text-accent">Top</span> Specialists
          </>
        }
      />
      <div className="mt-20">
        <Carousel className="px-20">
          {Array.from(Array(6), (_, index) => (
            <TeamMember
              image={teamMember}
              name="Prateek"
              occupation="Dentist"
              key={index}
            />
          ))}
        </Carousel>
      </div>
    </Wrapper>
  </section>
);

export default Team;
