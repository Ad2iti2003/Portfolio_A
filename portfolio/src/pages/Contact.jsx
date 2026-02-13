import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-neutral-900 text-white pt-28 px-10">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-6">
        Full-stack developer experienced in building modern web solutions and scalable systems.
      </p>

      <p className="mb-6">📧 akumari252003@gmail.com</p>

      <div className="flex gap-6 text-2xl">
  
  <a
    href="https://github.com/Ad2iti2003"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/aditi-kumari-b906a3225"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaLinkedin />
  </a>

</div>
    </div>
  </section>
  )
}

export default Contact
