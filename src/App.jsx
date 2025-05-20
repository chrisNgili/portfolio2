import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans text-grey-800 bg-gradient-to-r from-sky-600 to-emerald-500 py-12 px-4 sm:px-6 rounded-l shadow-lg">
      <section className=" text-black p-10 text-center">
        <h1 className="text-4xl font-bold ">Christopher Ngili</h1>
        <p className="mt-2 text-xl">Full-Stack Developer & Designer</p>
        <p className="mt-4">Building intuitive web experiences with React & Tailwind CSS </p>

      </section>

      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">

          <p>
            I’m Christopher, an 18-year-old Nairobi-based developer passionate about crafting
            clean, responsive web applications. Currently diving deep into React, Vite, and Tailwind
            CSS, I love solving real-world problems—most recently creating a football boots donation
            platform. Outside of code, I’m an avid chess player, F1 fan, footballer and pianist(more or less).
          </p>
        </div>
      </section>

      <section className=" p-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="list-disc ml-5">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Backend</h3>
            <ul className="list-disc ml-5">
              <li>Node.js</li>
              <li>JSON Server</li>
              <li>Flask</li>
              {/* <li>Express</li>
              <li>MongoDB</li>
              <li>REST APIs</li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Tools</h3>
            <ul className="list-disc ml-5">
              <li>Git/GitHub</li>
              <li>Vercel</li>
              <li>Render</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6 ">Projects</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold">
            <a href = 'https://hustlehub-indol.vercel.app/'>HustleHub</a></h3>
          <p>A job-application tracker with add/edit features and API integration.</p>
          <p className="text-sm text-gray-600">Tech: React, Tailwind</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold">
            <a href="https://boots-hub-chrisngilis-projects.vercel.app/">BootsHub</a></h3>
          <p>Marketplace and donation site for pre-loved football boots.</p>
          <p className="text-sm text-gray-600">Tech: Javascript, HTML, Bootstrap css</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold" >
            <a href="https://expense-tracker-topaz-ten.vercel.app//">Expense Tracker</a></h3>
          <p>Vite-based React app with CRUD and searchable table.</p>
          <p className="text-sm text-gray-600">Tech: React, Vite, Tailwind</p>
        </div>
      </section>

      <section className=" p-10">
        <h2 className="text-2xl font-semibold mb-6">Experience & Education</h2>
        <div className="mb-4">
          <h3 className="font-bold">Education</h3>
          <p>High School Diploma-Strathmore: 2021 - 2024</p>
        </div>
        {/* <div className="mb-4">
          <h3 className="font-bold">Frontend Intern</h3>
          <p>[Company Name], Nairobi (2024)</p>
          <ul className="list-disc ml-5">
            <li>Built responsive UI components</li>
            <li>Improved page load times by 30%</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Volunteer Developer</h3>
          <p>[Non-Profit], Nairobi (2023–Present)</p>
          <ul className="list-disc ml-5">
            <li>Built internal tools for donation tracking</li>
          </ul>
        </div> */}
      </section>

      {/* <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic mb-4">
          “Christopher’s code is clean, efficient, and always on time. A true team player.”
          <br />— Jane Doe, CTO at TechCorp
        </blockquote>
        <blockquote className="italic">
          “His eye for detail turned our rough idea into a polished product.”
          <br />— John Smith, Founder of StartupX
        </blockquote>
      </section> */}

      <section className=" text-white p-10">
        <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
        <p>Email: ngilichristopher@gmail.com</p>
        {/* <p>LinkedIn: linkedin.com/in/chrisngili</p> */}
        <p>
          <a href="https://github.com/chrisNgili">Github(Press me)</a>
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4 bg-gray-100">
        © 2025 Christopher Ngili • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
