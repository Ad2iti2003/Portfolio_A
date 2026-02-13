const projects = [
  {
    title: "Book Recommendation System",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    github: "https://github.com/Ad2iti2003/book-recommendation-system"
  },
  {
    title: "Recipe App",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    github: "https://github.com/Ad2iti2003/Recipe-App"
  },
  {
    title: "Food Delivery Website",
    img: "https://th.bing.com/th/id/OIP.G4ILpqtO5Z7CHzLql62roAHaFS?w=271&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    github: "https://github.com/Ad2iti2003/food_delivery_web"
  },
  {
    title: "Vedio player web",
    img: "https://prod-images.dacast.com/wp-content/uploads/2022/11/video-playyer-html5.jpeg",
    github: "https://github.com/Ad2iti2003/vedio-player"
  },
  {
    title: "Weather Prediction",
    img: "https://tse3.mm.bing.net/th/id/OIP.uQMzWPQcS3nf2aejjZ2DTAHaFx?rs=1&pid=ImgDetMain&o=7&rm=3",
    github: "https://github.com/Ad2iti2003/weather-prediction"

  }
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-28 px-10">
      <h2 className="text-3xl font-bold text-orange-500 text-center mb-12 tracking-wide">
        PROJECTS
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:scale-[1.03] transition duration-300"
          >
            
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex justify-between items-center">
              <h3 className="font-semibold text-lg">{project.title}</h3>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition"
              >
                GitHub ↗
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;

