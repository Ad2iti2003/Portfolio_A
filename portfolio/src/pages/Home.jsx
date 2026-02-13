import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white pt-24">

      <motion.img
        src="https://tse3.mm.bing.net/th/id/OIP.lYIKLOnLoQUA5TaBglRuvwHaHt?w=942&h=980&rs=1&pid=ImgDetMain&o=7&rm=3"
        className="w-40 h-40 mb-6 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-bold max-w-2xl">
        Hi! I am Aditi Kumari <h1><span className="text-pink-500 text-5xl">Software Developer</span></h1>
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Full-stack developer passionate about building scalable web applications and clean user experiences. I enjoy turning ideas into real products using modern technologies and writing efficient, maintainable code.
      </p>

      <div className="flex gap-4 mt-8">
        <a href="/contact">
  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
    Get In Touch
  </button>
</a>

        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">
         <a href="https://drive.google.com/file/d/1bhE6dXcr3_f6umnp-q_HpqjusTKpf04K/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download CV</a> 
        </button>
      </div>

    </section>
  );
};

export default Home;
