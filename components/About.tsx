"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{opacity: 1}}
     transition={{ duration: 1.5}}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity:0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x: 0,
                opacity:1
            }}
            viewport={{once: true}}
            // width={400}
            // height={400}
            src='/profil picture.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                En quelques{" "} <span className='underline decoration-[#F7AB0A]'>mots</span>{" "}...
            </h4>
            <p className='text-base'>
                Hello, I'm Alex ! 💯 Passionné par les nouvelles technologies, j'ai toujours eu soif d'apprendre et de créer. Mon voyage en tant que développeur web a commencé avec une simple ligne de code mystérieuse et incompréhensible. 
                <br/><br/>
                Après une première carrière dans la santé tourné quand même vers la technologie, j'ai décidé de donner un nouvel élan à ma carrière et me diriger vers le développement web. 🧑‍💻 Après m'être formé en autodidacte sur les bases du développement pendant plusieurs mois, j'ai décidé d'intégrer l'école Le Wagon à Lille afin d'approfondir mes connaissances, de monter en compétences et d'avoir les bonnes pratiques.📚
                <br/><br/>
                🎯 Chaque jour,je me lance de nouveaux défis pour rester à la pointe des dernières tendances et technologies du web. Mon objectif est de créer des expériences exceptionnelles et intuitives. Si vous souhaitez donner vie à vos idées, parlons-en 💬!
            </p>
        </div>
    </motion.div>
  )
}