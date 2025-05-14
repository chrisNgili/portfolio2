import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Christopher Ngili</h1>
        <p className="mt-2 text-xl">Full-Stack Developer & Designer</p>
        <p className="mt-4">Building intuitive web experiences with React & Tailwind CSS</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
          View My Work
        </button>
      </section>

      {/* About Section */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/your-photo.jpg"
            alt="Christopher Ngili"
            className="w-32 h-32 rounded-full"
          />
          <p>
            I’m Christopher, an 18-year-old Nairobi-based developer passionate about crafting
            clean, responsive web applications. Currently diving deep into React, Vite, and Tailwind
            CSS, I love solving real-world problems—most recently creating a football boots donation
            platform. Outside of code, I’m an avid chess player, F1 fan, and pianist.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="list-disc ml-5">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Backend</h3>
            <ul className="list-disc ml-5">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Tools</h3>
            <ul className="list-disc ml-5">
              <li>Git/GitHub</li>
              <li>Vercel</li>
              <li>Docker</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold">HustleHub</h3>
          <p>A job-application tracker with add/edit features and API integration.</p>
          <p className="text-sm text-gray-600">Tech: React, Tailwind, Node.js, Express, MongoDB</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold">Football Boots Platform</h3>
          <p>Marketplace and donation site for pre-loved football boots.</p>
          <p className="text-sm text-gray-600">Tech: React, Firebase, Stripe, Tailwind</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold">Expense Tracker</h3>
          <p>Vite-based React app with CRUD and searchable table.</p>
          <p className="text-sm text-gray-600">Tech: React, Vite, Tailwind</p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-2xl font-semibold mb-6">Experience & Education</h2>
        <div className="mb-4">
          <h3 className="font-bold">Education</h3>
          <p>High School Diploma, [Your School], Nairobi (2023)</p>
        </div>
        <div className="mb-4">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic mb-4">
          “Christopher’s code is clean, efficient, and always on time. A true team player.”
          <br />— Jane Doe, CTO at TechCorp
        </blockquote>
        <blockquote className="italic">
          “His eye for detail turned our rough idea into a polished product.”
          <br />— John Smith, Founder of StartupX
        </blockquote>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white p-10">
        <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
        <p>Email: christopher.ngili@example.com</p>
        <p>LinkedIn: linkedin.com/in/chrisngili</p>
        <p>GitHub: github.com/chrisngili</p>
        <p>Twitter: @chrisngili</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 bg-gray-100">
        © 2025 Christopher Ngili • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
