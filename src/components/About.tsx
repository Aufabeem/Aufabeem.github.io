import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="text-purple-600" size={32} />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: <Smartphone className="text-green-600" size={32} />,
      title: "Responsive",
      description: "Building applications that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <Globe className="text-orange-600" size={32} />,
      title: "Modern Web",
      description: "Using cutting-edge technologies to create fast and interactive web applications."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a 7th semester student at Politeknik Negeri Semarang and a Front-End Developer & UI/UX Designer 
            focused on creating attractive and user-friendly web interfaces. I believe that good design should 
            seamlessly integrate with functionality, creating satisfying and effective user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-100"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 md:p-14 shadow-xl" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a student at Politeknik Negeri Semarang, I've been passionate about web development 
                and design since my early semesters. My journey has taken me through various technologies 
                and frameworks, always with a focus on creating beautiful and functional user interfaces.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                When I'm not studying or coding, you'll find me exploring new design trends, learning about 
                user experience principles, and working on personal projects that challenge my creativity 
                and technical skills.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Student Developer
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  UI/UX Enthusiast
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Lifelong Learner
                </span>
              </div>
            </div>
            <div className="relative group transition-transform duration-700 hover:scale-105">
              <img
                src="images/projects/myjourney.jpeg"
                alt="Working"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
