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
            src="coffecode.png" 
            alt="code" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Formation autodidacte</h4>
                <p className='font-bold text-xl mt-1'>Freecodecamp & Udemy</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech use */}
                    <Image
                        className="h-10 w-10 rounded-full" src="/freecodecamp.png"
                        alt="React"
                        width={400}
                        height={400}
                        
                    />
                    {/* Tech use */}
                    <Image
                        className="h-10 w-12 rounded-full" src="/Udemy.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                </div>
                <p className='py-5 text-gray-300'> 2022 - Présent</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li> Apprentissage des bases
                    <Image
                        className="h-10 w-10 rounded-full inline-block" src="/html.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full inline-block" src="/css.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full inline-block" src="/javascript.png"
                        alt="React"
                        width={400}
                        height={400}
                    /></li>
                    <li> Réalisation de diverses mini-projects afin d'appréhender les concepts</li>
                    <li> Utilisation de Git & Github {" "}
                    <Image
                        className="h-10 w-10 rounded-full inline-block" src="/GitHub.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full inline-block" src="/Git.png"
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