import React, { useEffect } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

// Mock Data
const projects = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'A revolutionary platform for decentralized finance.',
    imageUrl: 'https://images.unsplash.com/photo-1593642532744-d377ab01cb33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    name: 'Project Beta',
    description: 'AI-powered tool for creative content generation.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386804-66554037d791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    name: 'Project Gamma',
    description: 'E-commerce solution with personalized recommendations.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    name: 'Project Delta',
    description: 'Augmented reality application for interior design.',
    imageUrl: 'https://images.unsplash.com/photo-1606761568589-c621c6533177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
    github: '#',
  },
];

const technologies = [
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
  { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Framer Motion', icon: 'https://framer.com/m/framer-icon.png' },
  { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Vite', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Vitejs-logo.svg' },
];

const HeroSection = () => {
  const [scope, animate] = useAnimate();

  const headline = 'Transforming Ideas into Digital Realities.'
  const subHeadline = 'Crafting innovative web experiences with cutting-edge technology.'

  useEffect(() => {
    animate(
      'div.text-element', 
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.8, delay: stagger(0.2) },
    );
  }, [animate]);

  return (
    <section 
      ref={scope}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden p-8"
    >
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-900 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-mesh-gradient opacity-70"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {headline.split('').map((letter, index) => (
            <motion.span key={index} className="text-element inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          {subHeadline}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="/contact"
            className="px-8 py-3 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'div.card-content > *', 
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.6, delay: stagger(0.15) },
    );
  }, [animate]);

  return (
    <motion.div
      ref={scope}
      className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      whileHover={{ y: -10 }}
      whileTap={{ y: 0 }}
    >
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 card-content">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          className="text-2xl font-bold text-white mb-2"
        >
          {project.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          className="text-gray-300 mb-4"
        >
          {project.description}
        </motion.p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'div.tech-item', 
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: 0.7, delay: stagger(0.1) },
    );
  }, [animate]);

  return (
    <section className="relative py-24 px-8 bg-gray-900/50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-800 mix-blend-screen"></div>
      </div>
      <div ref={scope} className="relative z-10 container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Technologies We Master</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-item flex flex-col items-center p-4 bg-white/5 backdrop-blur-lg rounded-lg shadow-lg border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <span className="text-lg font-semibold text-gray-200">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'div.cta-content > *', 
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.8, delay: stagger(0.2) },
    );
  }, [animate]);

  return (
    <section 
      ref={scope}
      className="relative py-24 px-8 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-pink-500 mix-blend-screen"></div>
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Build Something Amazing?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Let's collaborate and turn your vision into a stunning digital product. Reach out to us today!</p>
        <motion.div 
          className="cta-content flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
        >
          <motion.a
            href="/contact"
            className="px-10 py-4 bg-gradient-to-br from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold rounded-full shadow-xl transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const ShowcasePage = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'section',
      { opacity: [0, 1] },
      { duration: 1.0 },
    );
    animate(
      'div.project-grid > *',
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.8, delay: stagger(0.2), at: '<+0.5' },
    );
  }, [animate]);

  return (
    <div ref={scope} className="bg-gray-950 min-h-screen text-white font-sans antialiased">
      <HeroSection />
      
      <section className="relative py-24 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <ContactCTA />
    </div>
  );
};

export default ShowcasePage;
