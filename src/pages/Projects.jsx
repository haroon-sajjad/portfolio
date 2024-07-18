import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Showcasing Innovation Through Real-World Solutions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto my-16">
        {projects.map((project, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={project.thumbnailUrl} alt={project.name} />
            <div className="px-6 py-4 font-poppins">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <p className="text-gray-500 text-base italic mb-4">{project.date}</p>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="px-6 pt-2 pb-4">
              {project.link ? (
                <div className="flex flex-row items-center gap-2 mb-6">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              ) : (
                <div
                  className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-6"
                  role="alert"
                >
                  <p>
                    Only accessible by admins of the company.
                  </p>
                </div>
              )}

              {project.skills.split(",").map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div key={index} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={`${project.name} Icon`}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex-flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <CallToAction />
    </section>
  );
};

export default Projects;
