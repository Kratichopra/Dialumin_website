import { Link } from 'react-router-dom';
import {Eye,Target,Gem } from 'lucide-react'
import { useInView } from 'react-intersection-observer';
import Model3D from "../components/Model3D"

export function Home() {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experience the Future of Jewelry Photography
            </h1>
            <p className="text-xl mb-8 text-gray-200">
            Your Professional Jewelry Photography Companion ✨📸
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section bg-gray-50" ref={ref}>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision & Mission</h2>
            
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                description: "To provide innovative and technology-driven industrial manufacturing solutions that enhance efficiency, precision, and scalability.",
                icon: Eye,
              },
              {
                title: "Mission",
                description: "To be a global leader in industrial innovation, transforming manufacturing processes with smart, technology-driven solutions that enhance productivity, sustainability, and excellence.",
                icon: Target,
              },
              {
                title: "Values",
                description: "We are committed to innovation, excellence, efficiency, and customer satisfaction, delivering industry solutions that empower businesses and drive success.",
                icon: Gem,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Product Showcase 
      <section className="section">
        <div className="container flex justify-center items-center">
          <div className=" ">
            {/* <div>
              <img
                src="PRODT_HERO.png"
                alt="GemCapture Device"
                className=" "
              />
            </div> 
             
             <div>
            
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet GemCapture
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our state-of-the-art jewelry photography solution combines advanced hardware
                with intelligent software to deliver stunning, professional-quality images
                every time.
              </p>
              <Link to="/product" className="btn-primary">
                Learn More
              </Link>
              
              <div className="container mx-auto px-4">

      <Model3D modelPath="/hhhhh.glb" />
  </div>
</div>

            
           
          </div>
        </div>
      </section>*/}


<section className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Text Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold">Meet GemCapture</h2>
      <p className="text-gray-600 mt-4">
        Our state-of-the-art jewelry photography solution combines advanced hardware 
        with intelligent software to deliver stunning, professional-quality images every time.
      </p>
      <Link to="/product" className="btn-primary">
                Learn More
              </Link>
    </div>


    <div className="flex justify-center items-center w-full max-w-md h-auto">
      <Model3D
        modelPath="\hhhhh.glb"
      />
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