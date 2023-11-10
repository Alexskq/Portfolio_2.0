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
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" 
            alt="" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Teacher</h4>
                <p className='font-bold text-xl mt-1'>Le Wagon</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech use */}
                    <Image
                        className="h-10 w-10 rounded-full" src="/Ruby on Rails Logo.png"
                        alt="React"
                        width={400}
                        height={400}
                        
                    />
                    {/* Tech use */}
                    <Image
                        className="h-10 w-10 rounded-full" src="/pngwing.com.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    {/* Tech use */}
                    <Image
                        className="h-10 w-10 rounded-full" src="/Javascript.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full" src="/PostgreSQL Logo.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    {/* Tech use */}
                    <Image
                        className="h-10 w-10 rounded-full" src="/Figma.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full" src="/GitHub.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full" src="/Git.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'> Octobre 2023 - Présent</p>

                <ul className='list-disc space-y-1 ml-5 text-lg'>
                    <li> Dispense du cours sur différents concepts</li>
                    <li> Aide sur les problèmes de la partie pratique</li>
                    <li> Réflexion et supervision sur les projects de fin de batch des étudiants</li>
                    <li> ( Améliorer l&apos;expérience social apèrs la journée 🍻 ) </li>
                </ul>

            </div>
    </article>
  )
}



// ! use <Image /> component // time video : 1H32