import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className=" relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0 pb-16 lg:pb-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#000000" />
            <stop offset={1} stopColor="#0000ff" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto text-center lg:mx-0  lg:py-32 lg:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let's Collaborate
        </h2>
        <h3 className="text-2xl mt-3 font-bold tracking-tight text-gray-900 sm:text-3xl">
          To Empower Your Online Presence
        </h3>
        <p className="mt-6 text-lg leading-8 text-gray-900">
          Ready to bring your vision to life? Let's work together to create
          innovative and impactful web solutions that exceed your expectations.
          Get in touch today!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/contact"
            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Contact Now
          </Link>
        </div>
      </div>
      {/* <div className="relative mt-16 h-80 lg:mt-8">
        <img
          className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt="App screenshot"
          width={1824}
          height={1080}
        />
      </div> */}
    </section>
  );
};

export default CallToAction;
