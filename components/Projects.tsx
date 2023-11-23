"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projets
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* {projects.map((project, i ) => (
                <div key="" className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                   <motion.img
                    initial={{
                        y:-300,
                        opacity: 0
                    }}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true }}
                    src="/React Logo.png"
                    alt="React"
                    width={200}
                    height={200}
                   />
                   <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study {i + 1} of {projects.length} :
                        </span>{" "} 
                        UPS clone
                    </h4>

                    <div className='flex items-center space-x-2 justify-center'>
                        <Image
                            className=' h-10 w-10'
                            src="/React Logo.png"
                            alt='tech use'
                            width={40}
                            height={30}
                        />
                    </div>

                    <p className='text-lg text-center md:text-left'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, placeat, aut dignissimos sunt perferendis sequi commodi tempore suscipit adipisci ipsam autem. Quos dolor voluptatem minus earum cumque officia perspiciatis suscipit.
                    </p>
                   </div>
                
                </div>
            ))} */}
        {/* Projects */}
        <div
          key="1"
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
        >
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/portfolio.png"
            alt="portfolio"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50">
              Mon Portfolio
            </h4>

            <div className="flex items-center space-x-2 justify-center">
              <Image
                className="h-10 w-10"
                src="/Nextjs.png"
                alt="next"
                width={40}
                height={40}
              />
              <Image
                className=" h-10 w-10"
                src="/tailwind.png"
                alt="tailwind"
                width={50}
                height={40}
              />
              <Image
                className=" h-10 w-10 rounded-full"
                src="/sanity.png"
                alt="sanity"
                width={50}
                height={40}
              />
            </div>

            <p className="text-lg text-center md:text-left">
              🎯 Après avoir suivi le tuto et la doc&apos; j&apos;ai décidé de
              me lancer dans ce projet et de faire ce portfolio en Next.JS et
              TailwindCss 🚧 Des améliorations sont en cours pour implémenter le
              CMS Sanity, afin d&apos;améliorer le code et faciliter la mise à
              jour du projet... Wait & See 🔜
            </p>
          </div>
        </div>
        {/* Projects */}
        <div
          key=""
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
        >
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/getinspired.png"
            alt="Merci Mathilde pour l'image"
            width={300}
            height={300}
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50">
              Get inspired...
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <Image
                className=" h-10 w-10"
                src="/Nextjs.png"
                alt="tech use"
                width={40}
                height={30}
              />
              <Image
                className=" h-10 w-10"
                src="/tailwind.png"
                alt="tech use"
                width={40}
                height={30}
              />
            </div>

            <div className="text-lg px-20 text-center md:text-left ">
              <span>
                📊 A la base ce n&apos;était qu&apos;un exercice où il fallait
                crée la logique pour générer un message aléatoire, que j&apos;
                décidé de transformer en petit projet Next.js
              </span>
            </div>
          </div>
        </div>

        {/* Project */}
        <div
          key=""
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
        >
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/Panima.png"
            alt="Merci Mathilde pour l'image"
            width={300}
            height={300}
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50">
              Panima
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <Image
                className=" h-10 w-10"
                src="/Ruby on Rails Logo.png"
                alt="tech use"
                width={40}
                height={30}
              />
              <Image
                className=" h-10 w-10"
                src="/pngwing.com.png"
                alt="tech use"
                width={40}
                height={30}
              />
              <Image
                className=" h-10 w-10"
                src="/Javascript.png"
                alt="tech use"
                width={40}
                height={30}
              />
              <Image
                className=" h-10 w-10"
                src="/PostgreSQL Logo.png"
                alt="tech use"
                width={40}
                height={30}
              />
            </div>

            <div className="text-lg px-20 text-center md:text-left ">
              <span>
                📊 Panima est une plateforme en version MVP qui permet de gérer
                un magasin autonome, project de fin de formation crée en
                collaboration lors du bootcamp Le Wagon à Lille
              </span>
              <span>
                🛒 Un magasin autonome est un magasin sans caisse ni caissier.
                Grâce à cette interface, le responsable du magasin peut suivre à
                distance et en temps réel.
              </span>
            </div>
          </div>
        </div>
        {/* Projects */}
      </div>
      {/* Project */}

      <div className=" w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}

export default Projects;
