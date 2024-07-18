import React from "react";
import { experiences, skills } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CallToAction from "../components/CallToAction";
import { Button, Tooltip } from "flowbite-react";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Haroon!
        </span>
      </h1>
      <h2 className="subhead-text">
        Innovative Full-Stack Developer & Designer
      </h2>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 font-semibold">
        <p>
          Dynamic Full-stack web developer and web designer with 10+ years of
          experience in creating visually appealing and highly functional
          websites. Adept at both frontend and backend development, with a
          strong foundation in UI/UX design. Proven track record of delivering
          projects on time and exceeding client expectations.
        </p>
      </div>
      <div className="py-10 flex-flex-col">
        <h3 className="subhead-text">Skills</h3>
        <p className="mt-2">Empowering Projects with Cutting-Edge Technology</p>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <Tooltip
              key={index}
              content={`${skill.name} - ${skill.type}`}
              style="light"
              animation="duration-500"
              placement="bottom"
              arrow={false}
            >
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <p className="mt-2">
          Delivering Excellence Through Innovation and Collaboration
        </p>
        {/* <div className="mt-5 flex flex-col gap-3 text-slate-500 shadow-lg border-b-8 border-b-blue-300 rounded p-5 relative">
          <img src="{zingsquad}" alt="" />
          <h3 className="text-black text-xl font-poppins font-semibold">
            Freelance Web DeveloperFreelance Web Developer
          </h3>
          <p className="font-poppins font-slate-500 font-semibold">
            Zing Squad • FreelanceZing Squad • Freelance
          </p>
          <p className="font-poppins font-slate-500">
            Aug 2018 to Present • 5 yrs 11 mos
          </p>
          <p className="font-poppins font-slate-500 font-thin">Remote</p>
          <p className="font-poppins">
            As a Senior Web Developer in the technology, information, and
            internet industry, I bring expertise in enhancing web presence
            through expert solutions and top-tier development and design
            strategies. Working remotely in a full-time capacity, I am dedicated
            to driving impactful results and ensuring client satisfaction.
          </p>

          <h4 className="text-black text-lg font-poppins font-semibold">
            Key Responsibilities:
          </h4>
          <ul className="mb-5 list-disc ml-5 font-poppins">
            <li>
              Leveraging proficiency in PHP, MySQL, HTML, CSS, JavaScript, and
              jQuery to develop robust and dynamic websites.
            </li>

            <li>
              Specializing in WordPress theme and plugin development, catering
              to diverse client needs and preferences.
            </li>

            <li>
              Collaborating closely with clients to understand their objectives
              and translate them into functional and visually appealing web
              solutions.
            </li>

            <li>
              Implementing best practices in web development, ensuring
              compatibility, responsiveness, and performance optimization across
              various platforms and devices.
            </li>

            <li>
              Conducting thorough testing and debugging to maintain high-quality
              standards and deliver error-free products.
            </li>

            <li>
              Providing ongoing support and maintenance, troubleshooting issues,
              and implementing necessary updates and improvements.
            </li>

            <li>
              Staying updated with the latest trends and advancements in web
              development, continuously refining skills to deliver cutting-edge
              solutions.
            </li>

            <li>
              Communicating effectively with team members and stakeholders,
              fostering a collaborative and productive work environment.
            </li>

            <li>
              Offering personalized consultations to clients, guiding them
              through the development process and delivering tailored solutions
              to meet their specific needs.
            </li>
          </ul>
          <p>
            Through a combination of technical expertise, creativity, and
            client-focused approach, I strive to elevate web presence and drive
            tangible results for businesses. Let's connect to discuss how we can
            amplify your web presence and achieve your goals effectively.
          </p>
        </div> */}

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                      style={experience.style}
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-small font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <div className="font-poppins font-slate-500 font-thin">
                  {experience.location}
                </div>
                <p className="text-slate-500 font-normal font-base my-5 ml-5 space-y-2">
                  {experience.description}
                </p>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>



      <CallToAction></CallToAction>
    </section>
  );
};

export default About;
