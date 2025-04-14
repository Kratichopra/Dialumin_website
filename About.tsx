// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Camera, Users, Target, Lightbulb, Gem } from 'lucide-react';

// export function About() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative py-24 bg-secondary">
//         <div className="container">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl text-white"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               About Dialumin
//             </h1>
//             <p className="text-xl text-gray-300">
//               Pioneering the future of jewelry photography through innovation and excellence
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Company */}
//       <section className="section" ref={ref}>
//         <div className="container">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={fadeIn}
//               transition={{ duration: 0.6 }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Dialumin Office"
//                 className="rounded-lg shadow-xl"
//               />
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={fadeIn}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-6">
//                 Founded with a vision to revolutionize jewelry photography, Dialumin has
//                 grown from a small startup to an industry leader in automated photography
//                 solutions.
//               </p>
//               <p className="text-gray-600">
//                 Our team of experts combines deep technical knowledge with years of
//                 experience in jewelry photography to deliver cutting-edge solutions that
//                 meet the evolving needs of our clients.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="section bg-gray-50">
//         <div className="container">
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
//             <p className="text-gray-600 text-lg">
//               Comprehensive solutions for all your jewelry photography needs
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Automated Photography",
//                 description: "High-quality automated jewelry photography solutions",
//                 icon: Camera,
//               },
//               {
//                 title: "Training & Support",
//                 description: "Expert training and 24/7 technical support",
//                 icon: Users,
//               },
//               {
//                 title: "Custom Solutions",
//                 description: "Tailored solutions for specific photography needs",
//                 icon: Target,
//               },
//               {
//                 title: "Innovation Consulting",
//                 description: "Strategic guidance for photography automation",
//                 icon: Lightbulb,
//               },
//               {
//                 title: "Product Integration",
//                 description: "Seamless integration with existing systems",
//                 icon: Gem,
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//               >
//                 <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
//                   <service.icon className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="section">
//         <div className="container">
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
//             <p className="text-gray-600 text-lg">
//               Meet the experts behind Dialumin's success
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Alex Thompson",
//                 role: "CEO & Founder",
//                 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 name: "Sarah Chen",
//                 role: "Head of Technology",
//                 image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 name: "Michael Roberts",
//                 role: "Lead Engineer",
//                 image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 name: "Emily Parker",
//                 role: "Product Manager",
//                 image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
//               },
//             ].map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 variants={fadeIn}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
//                 />
//                 <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                 <p className="text-gray-600">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useInView } from 'react-intersection-observer';
export function About() {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Dialumin</h1>
            <p className="text-xl text-gray-300">Pioneering the future of jewelry photography through innovation and excellence</p>
            </div>
        </div>
      </section>

      {/* About Company */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              
            >
              <img
                src="/company.JPG"
                alt="Dialumin Office"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize jewelry photography, Dialumin has
                grown from a small startup to an industry leader in automated photography
                solutions.
              </p>
              <p className="text-gray-600">
                Our team of experts combines deep technical knowledge with years of
                experience in jewelry photography to deliver cutting-edge solutions that
                meet the evolving needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <div
            
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CAD Designing",
                description: "Creating precise and innovative designs for product development and prototyping, ensuring your vision is brought to life with accuracy and detail.",
                
              },
              {
                title: "PCB Designing",
                description: "Providing high-quality PCB designs that meet industry standards, ensuring reliability and performance for your electronic products .",
                
              },
              {
                title: "AI/ML Solutions",
                description: "Developing advanced AI and machine learning models to solve complex problems, optimize processes, and drive data-driven decision-making for your business.",
                
              },
              {
                title: "Web Development",
                description: "Building dynamic, user-friendly websites and applications that enhance your online presence and provide seamless experiences for your customers.",
                
              },
              {
                title: "Software Development",
                description: " Crafting custom software solutions tailored to your business needs, with a focus on usability, scalability, and innovation",
          
              },
            ].map((service, index) => (
              <div
                key={index}
               
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-bold mb-6">A Team of Experts, Delivering Excellence</h2>
              <p className="text-gray-600 mb-6">
              Our expert team at DiaLumin is a dynamic and diverse group of professionals, including highly skilled engineers across electrical, electronics, mechanical, and software domains. We also have specialized experts in data analytics, research, production, quality assurance, and customer service, all working in harmony to deliver comprehensive, innovative solutions.
              </p>
              <p className="text-gray-600">
              Each member brings a unique set of skills, ensuring that every project is met with the highest standards of technical expertise, creativity, and precision. Together, our team drives excellence, transforming complex challenges into seamless, impactful results for our clients.

              </p>
            </div>
            <div
             
            >
              <img
                src="/team.jpg"
                alt="Dialumin Office"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[#E3ECFB]  ">
        <div className="container">
          <div
            
            className="text-center max-w-3xl mx-auto mb-16 "
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Dialumin?
            </h2>
           
          </div>

          

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                      {[
                        {
                          name: "Innovative Solutions",
                          desc: "We leverage cutting-edge technology to deliver advanced industrial manufacturing solutions tailored to your needs.",
                          image: "/innovation.png",
                        },
                        {
                          name: "Expertise & Precision",
                          desc: "With a team of skilled professionals, we ensure top-notch quality and accuracy in every project.",
                          image: "/expertise_and_precision.png",
                        },
                        {
                          name: "Future-Ready Technology",
                          desc: "We stay ahead of industry trends,integrating smart and scalable technologies to keep you competitive.",
                          image: "/future.png",
                        },
                        {
                          name: "Reliable Support & Service",
                          desc: "Our dedicated team provides prompt assistance, ensuring smooth project execution and long-term operational success.",
                          image: "/growth.png"
                        },
                        {
                          name: "Customer-Centric Approach",
                          desc: "Your success is our priority. We collaborate closely to provide customized solutions that drive efficiency and growth.",
                          image: "/meeting.png"
                        }

                      ].map((member, index) => (
                        <div
                          key={index}

                          className="text-center"
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
                          />
                          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                          <p className="text-gray-600">{member.desc}</p>
                        </div>
                      ))}
                    </div>
        </div>
      </section>
    </div>
  );
}