"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SkillLeft from './SkillLeft'
import SkillRight from './SkillRight'
import SkillRails from './Skills/SkillRails'
import SkillRuby from './Skills/SkillRuby'
import SkillJavascript from './Skills/SkillJavascript'
import SkillHtml from './Skills/SkillHtml'
import SkillCss from './Skills/SkillCss'
import SkillPostgresql from './Skills/SkillPostgresql'
import SkillGit from './Skills/SkillGit'
import SkillGithub from './Skills/SkillGithub'
import SkillTailwind from './Skills/SkillTailwind'
import SkillNextjs from './Skills/SkillNextjs'

// type Props = {
//   directionLeft: boolean;
// }

function Skills() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className=' flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over askill for currency profienciency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <SkillRails />
            <SkillRuby />
            <SkillJavascript />
            <SkillHtml />
            <SkillCss />
            <SkillPostgresql />
            <SkillGit />
            <SkillGithub />
            <SkillLeft />
            <SkillTailwind/>
            <SkillNextjs />
        </div>
    </motion.div>
  )
}

export default Skills