import React from "react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Greyspire Innovation India Pvt. Ltd.",
    date: "May 2024 – Aug 2024",
    points: [
      "Built scalable and responsive landing pages and admin dashboards using React.js and Next.js",
      "Developed and integrated RESTful APIs for email/contact workflows and optimized frontend performance",
      "Collaborated with cross-functional teams to implement features, debug issues, and meet sprint deadlines"
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Bharat Chase",
    date: "Jan 2024 – Feb 2024",
    points: [
      "Performed UI/UX and responsiveness testing across 10+ browsers and devices, identifying usability issues",
      "Identified, documented, and reported 30+ UI/UX issues and proposed design improvements"
    ]
  }
];

function Experience() {
  return (
    <section className="min-h-screen bg-black text-white pt-28 px-6">
      
      <h2 className="text-3xl font-bold text-blue-500 text-center mb-14 tracking-wide">
        EXPERIENCE
      </h2>

      <div className="max-w-3xl mx-auto relative border-l border-gray-700">

        {experiences.map((exp, i) => (
          <div key={i} className="mb-12 ml-6 relative">

            {/* timeline dot */}
            

            <h3 className="text-xl font-semibold">
              {exp.role}
            </h3>

            <p className="text-gray-300 font-medium">
              {exp.company}
            </p>

            <p className="text-gray-400 text-sm mb-3">
              {exp.date}
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;

