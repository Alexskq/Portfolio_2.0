"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] xl:mt-20 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            className="w-32 h-32  xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="/xray.png" 
            alt="" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Manip&apos; Radiologie</h4>
                <p className='font-bold text-xl mt-1'>Epicura & Tivoli</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech use */}
                    <Image
                        className="h-10 w-10 rounded-full" src="/heart.png"
                        alt="React"
                        width={400}
                        height={400}
                        
                    />
                    {/* Tech use */}
                   
                </div>
                <p className='uppercase py-5 text-gray-300'> Avril 2023 - Juin 2023</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li> Rigueur, écoute, travail en équipe </li>
                    <li> Réalisations des différents examens radios 🩻, scanner ☢️, IRM {" "}
                    <Image
                        className="h-10 w-10 rounded-full inline-block" src="/proton.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    </li>
                </ul>

            </div>
    </article>
  )
}



// ! use <Image /> component // time video : 1H32