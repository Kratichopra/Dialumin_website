// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Camera, Settings, Image, Monitor, Cpu, Database, Cloud, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { ImageComparison } from '../components/ImageComparison';

// export function Product() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const productImages = [
//     "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   ];

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
//   };

//   return (
//     <div>
//       {/* Hero Section with Product Overlay */}
//       <section className="relative min-h-[90vh] flex items-center">
//         <div className="absolute inset-0 z-0">
//           <img 
//             src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent" />
//         </div>
//         <div className="container relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               transition={{ duration: 0.8 }}
//               className="text-white"
//             >
//               <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                 GemCapture
//               </h1>
//               <p className="text-xl mb-8">
//                 Revolutionary automated photography solution designed specifically for jewelry. 
//                 Experience unmatched quality and efficiency in jewelry photography.
//               </p>
//               <Link to="/contact" className="btn-primary">
//                 Request a Demo
//               </Link>
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="hidden lg:block"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="GemCapture Device"
//                 className="rounded-lg shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Product Description & Slider */}
//       <section className="section bg-gray-50" ref={ref}>
//         <div className="container">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={fadeIn}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl font-bold mb-6">What is GemCapture?</h2>
//               <p className="text-gray-600 mb-6">
//                 GemCapture is a state-of-the-art automated photography solution that combines 
//                 advanced hardware with intelligent software to deliver stunning, 
//                 professional-quality images of jewelry consistently.
//               </p>
//               <p className="text-gray-600">
//                 With its innovative design and cutting-edge technology, GemCapture streamlines 
//                 the jewelry photography process while maintaining the highest standards of quality.
//               </p>
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={fadeIn}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative overflow-hidden rounded-lg shadow-xl"
//             >
//               <div className="relative aspect-[4/3]">
//                 <img
//                   src={productImages[currentImageIndex]}
//                   alt={`GemCapture View ${currentImageIndex + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-secondary" />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//                 >
//                   <ChevronRight className="h-6 w-6 text-secondary" />
//                 </button>
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                   {productImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentImageIndex(index)}
//                       className={`w-2 h-2 rounded-full transition-all ${
//                         index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features with Diagonal Layout */}
//       <section className="section">
//         <div className="container">
//           {[
//             {
//               title: "Automated Capture System",
//               description: "One-click operation captures perfect shots every time with our advanced automation technology.",
//               image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               reverse: false
//             },
//             {
//               title: "Intelligent Processing",
//               description: "Real-time image processing and enhancement powered by AI technology.",
//               image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               reverse: true
//             },
//             {
//               title: "360° Photography",
//               description: "Capture every angle with our revolutionary rotating platform and multi-angle lighting system.",
//               image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               reverse: false
//             }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={fadeIn}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${
//                 feature.reverse ? 'lg:translate-x-12' : 'lg:-translate-x-12'
//               }`}
//             >
//               {!feature.reverse && (
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="rounded-lg shadow-xl"
//                 />
//               )}
//               <div className={`text-center lg:text-${feature.reverse ? 'right' : 'left'}`}>
//                 <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//               {feature.reverse && (
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="rounded-lg shadow-xl"
//                 />
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Hardware Features */}
//       <section className="section bg-gray-50">
//         <div className="container">
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Cutting-Edge Hardware</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience precision engineering at its finest with our advanced hardware components
//             </p>
//           </motion.div>
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               alt="Hardware Features"
//               className="rounded-lg shadow-xl mx-auto mb-8"
//             />
//             <p className="text-gray-600 max-w-2xl mx-auto text-center">
//               GemCapture's hardware is engineered for precision and reliability. 
//               Our system includes a professional-grade camera, adjustable LED lighting, 
//               and a motorized rotating platform for perfect 360° captures.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Software Features */}
//       <section className="section">
//         <div className="container">
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Intelligent Software</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Powered by advanced algorithms and intuitive controls for seamless operation
//             </p>
//           </motion.div>

//           {/* Image Comparison Feature */}
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//             className="grid lg:grid-cols-2 gap-12 items-center mb-24"
//           >
//             <div className="order-2 lg:order-1">
//               <h3 className="text-2xl font-bold mb-4">AI-Enhanced Image Processing</h3>
//               <p className="text-gray-600 mb-6">
//                 Experience the power of our AI-driven image enhancement technology. Our advanced 
//                 algorithms automatically optimize lighting, contrast, and color balance to make 
//                 your jewelry photographs stand out.
//               </p>
//               <p className="text-gray-600">
//                 Drag the slider to see the dramatic difference between original and 
//                 AI-enhanced jewelry photos. Every detail is perfectly captured and enhanced 
//                 for maximum visual impact.
//               </p>
//             </div>
//             <div className="order-1 lg:order-2">
//               <ImageComparison
//                 beforeImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 afterImage="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 beforeLabel="Original"
//                 afterLabel="Enhanced"
//               />
//             </div>
//           </motion.div>

//           {/* Other Software Features */}
//           {[
//             {
//               title: "Cloud Integration",
//               description: "Seamless cloud storage and sharing capabilities with automatic backup and synchronization across all your devices. Access your jewelry catalog from anywhere, anytime.",
//               image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               icon: Cloud
//             },
//             {
//               title: "Real-time Processing",
//               description: "Watch your images transform instantly with our powerful real-time processing engine. Make adjustments and see the results immediately for perfect shots every time.",
//               image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               icon: Zap
//             },
//             {
//               title: "Advanced Cataloging",
//               description: "Keep your jewelry collection organized with our intelligent tagging and categorization system. Search, filter, and manage your portfolio with ease.",
//               image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               icon: Database
//             },
//             {
//               title: "Multi-device Control",
//               description: "Take control of your GemCapture device from any smartphone, tablet, or computer. Our responsive interface adapts perfectly to any screen size.",
//               image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//               icon: Monitor
//             }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               variants={fadeIn}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="grid lg:grid-cols-2 gap-12 items-center mb-16"
//             >
//               <div className="order-2 lg:order-1">
//                 <div className="flex items-center mb-4">
//                   <feature.icon className="h-8 w-8 text-primary mr-3" />
//                   <h3 className="text-2xl font-bold">{feature.title}</h3>
//                 </div>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//               <div className="order-1 lg:order-2">
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="rounded-lg shadow-xl"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section bg-secondary text-white">
//         <div className="container text-center">
//           <motion.div
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={fadeIn}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Transform Your Jewelry Photography?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Book a demo today and experience the power of GemCapture
//             </p>
//             <Link to="/contact" className="btn-primary">
//               Request Demo
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


import  { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Image, Cloud, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageComparison  from '../components/ImageComparison';
import Model3D from "../components/Model3D"
 
export function Product() {
  const [ setCurrentImageIndex] = useState(0);
  const [selectedResultImage, setSelectedResultImage] = useState(0);
  const [ setIsZoomed] = useState(false);

  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  const productImages = [
    "/PRODT_HERO.png",
    "/Proct_side.JPG",
    "/Proct_top.JPG"
  ];

  const resultImages = [
    "/results/r-1.png",
    "/results/r-2.jpg",
    "/results/r-3.jpg",
    "/results/r-4.jpg",
  ];

  


  

  return (
    <div>
      {/* Hero Section with Product Overlay */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/100 to-primary" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
             
              className="hidden lg:block"
            >
              <img
                src="\PRODT_HERO.png"
                alt="GemCapture Device"
                className=""
              />
            </div>
            <div
              
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                GemCapture
              </h1>
              <p className="text-xl mb-8">
              Your Ultimate Jewelry Photography Solution 

              </p>
              <Link to="/contact" className="btn-primary">
                Request a Demo
              </Link>
            </div>
            
          </div>
        </div>
      </section>

     

  {/* Product Description & Slider */}
 <section className="section bg-gray-100" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              
            >
              <h2 className="text-3xl font-bold mb-6">What is GemCapture?</h2>
              <p className="text-gray-600 mb-6">
                GemCapture is a state-of-the-art automated photography solution that combines 
                advanced hardware with intelligent software to deliver stunning, 
                professional-quality images of jewelry consistently.
              </p>
              <p className="text-gray-600">
                With its innovative design and cutting-edge technology, GemCapture streamlines 
                the jewelry photography process while maintaining the highest standards of quality.
              </p>
            </div>
            <div
              
              className="relative overflow-hidden "
            >
              <div className="relative aspect-[4/3] ">
              <Model3D modelPath="/JALEBI.glb" />
              </div>
            </div>
          </div>
        </div>
      </section> 

       


    <section className="section py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Results</h2>
          <p className="text-gray-600">
            Experience the exceptional quality of GemCapture's photography
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image Display */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-3xl h-auto overflow-hidden rounded-lg shadow-lg cursor-zoom-in">
              <img
                src={resultImages[selectedResultImage]}
                alt={`Result ${selectedResultImage + 1}`}
                className="w-full h-auto object-cover transition-transform duration-200"
              />
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
              {resultImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedResultImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition ring-offset-2 ${
                      selectedResultImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  






      {/* Key Features */}
      <section className="section py-12">
  <div className="container mx-auto px-4">
    {[
      {
        title: "HD Quality Images & 360° Videos",
        description1: "HD Image Capture: Take sharp, high-definition photos directly through the web and mobile apps with incredible color accuracy.",
        description2: "360° Video Capturing: Create dynamic, interactive 360° video views of your jewelry by rotating both the top and bottom stages, giving customers a full, immersive look at every angle.",
        image: "/360.gif",
      },
      {
        title: "Edit, Store & Access Anywhere",
        description1: "Image Editing Tools: Adjust brightness, contrast, sharpness, clarity, color, apply filters, and crop or resize for perfect results.",
        description2: "Cloud Storage & Sharing: Upload and store your images and videos in the cloud, accessible from any device, and easily share them with others.",
        image: "/edit_store_access.gif",
      },
      {
        title: "Accessories",
        description1: "Versatile Black & White Stages: Designed to complement any jewelry style, offering flexibility for various photography needs.",
        description2: "Specialized Hanging Tools: Perfect for capturing intricate details and unique angles of your jewelry.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16"
      >
        {/* Content First on Mobile, Alternating on Desktop */}
        <div
          className={`text-center lg:text-left ${
            index % 2 == 0 ? "lg:order-last" : ""
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.description1}</p>
          <p className="text-gray-600 mt-2">{feature.description2}</p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full max-w-md h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    ))}
  </div>
</section>

     {/* Hardware Features */}
     <section className="section bg-gray-50">
        <div className="container">
          <div
           
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Hardware Features</h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Adjustable Lighting",
                description: " Achieve uniform, professional lighting for every shot, enhancing the natural shine and detail of your jewelry.",
                
                image: "/lightining.gif"
              },
           
              
              {
                title: "Compact & Portable Design ",
                description: " A lightweight, space-saving photo studio solution perfect for jewelers, online sellers, and manufacturers.",
                
                image: "/compact.jpg"
              },
             
              {
                title: "Enhanced Durability",
                description: "The robust aluminium construction offers superior strength, withstanding everyday use in a busy photography environment.",
                
                image: "/durability .jpg"
              } ,{
                title: "Adjustable Speed Rotating Stage",
                description: "Smoothly rotate your jewelry at customizable speeds with rotating top and bottom stages, ensuring precise, seamless, and dynamic 360° imaging.",
                
                image: "/rotating_1.gif"
              },
            ].map((feature, index) => (
              <div
                key={index}
                
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                 <div className="h-[300px] w-[600px] max-w-full overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* <div className="w-full overflow-hidden rounded-lg">
  <img
    src={feature.image}
    alt={feature.title}
    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
  />
</div> */}

                <div className="p-6">
                  <div className="flex items-center mb-4">
                 
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  

           {/* Software Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Software Features</h2>
          </div>

          {/* Image Comparison Feature */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">AI Background Removal</h3>
              
              <p className="text-gray-600">
              Effortlessly remove backgrounds with fine detail, ensuring a clean and professional presentation for your jewelry.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <ImageComparison/>
            </div>
          </div>

          {[
            {
              title: "Advanced Image Editing ",
              description: "Edit photos for a polished, professional look, including fine adjustments for color, brightness, and contrast.",
              image: "/rings-Trim-ezgif.com-video-to-gif-converter.gif",
              icon: Image
            },
            {
              title: "Cloud Storage Integration ",
              description: "Store your jewelry photos securely in the cloud, allowing easy access and management from any device, anywhere",
              image: "/cloud.png",
              icon: Cloud
            },
            {
              title: "AI Retouch",
              description: "Enhance your photos effortlessly with just one click!",
              image: "/AI retouch.gif",
              icon: Zap
            },
          
           
          ].map((feature) => (
            <div
              
              className="grid lg:grid-cols-2 gap-12 items-center mb-16"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  {/* <feature.icon className="h-8 w-8 text-primary mr-3" /> */}
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <div
            
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Jewelry Photography?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a demo today and experience the power of GemCapture
            </p>
            <Link to="/contact" className="btn-secondary">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}