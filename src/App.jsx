import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-blue-500">
          Zohaib.dev
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Skills</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-blue-500">
            Zohaib Ahmad Ali
          </span>
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Full Stack Developer | DevOps Learner | Cloud Enthusiast.
          I build scalable web apps and modern systems.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-gray-600 hover:border-white rounded-lg font-semibold transition">
            Contact Me
          </button>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 px-6 py-20">

        <h3 className="text-3xl font-bold text-center mb-10">
          About Me
        </h3>

        <div className="max-w-4xl mx-auto text-center text-gray-400 leading-relaxed">

          <p>
            I am a passionate developer focused on building
            modern web applications using React, Node.js,
            Docker, and Cloud platforms.
          </p>

          <p className="mt-4">
            Currently learning DevOps, system design,
            and cloud infrastructure to become a
            high-impact software engineer.
          </p>

        </div>

      </section>

      {/* Skills Section */}
      <section className="px-6 py-20">

        <h3 className="text-3xl font-bold text-center mb-12">
          Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {[
            "React",
            "Node.js",
            "Docker",
            "Linux",
            "AWS",
            "Nginx",
            "MongoDB",
            "GitHub"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 p-6 rounded-xl text-center shadow hover:scale-105 transition"
            >
              <p className="font-semibold text-blue-400">
                {skill}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-6 py-20 text-center">

        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Amazing
        </h3>

        <p className="mb-6 text-blue-100">
          Have an idea? Want to collaborate? Let's talk.
        </p>

        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Get In Touch
        </button>

      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 text-center text-gray-500">

        © {new Date().getFullYear()} Zohaib Ahmad Ali. All rights reserved.

      </footer>

    </div>
  );
};

export default App;
