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
                <h4 className='text-4xl font-light'>Fullstack Developper</h4>
                <p className='font-bold text-xl mt-1'>Panima</p>
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
                        className="h-10 w-10 rounded-full" src="/Javascript.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full" src="/html.png"
                        alt="React"
                        width={400}
                        height={400}
                    />
                    <Image
                        className="h-10 w-10 rounded-full" src="/css.png"
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
                <p className='uppercase py-5 text-gray-300'> Avril 2023 - Juin 2023</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li> Project de fin de formation</li>
                    <li> Création en collaboration du MVP d&apos;une solution de gestion de magasin autonome ( voir section project ⬇️ )</li>
                    <li> Conception user-storie, maquette et implémentation des différentes features</li>
                </ul>

            </div>
    </article>
  )
}



// ! use <Image /> component // time video : 1H32