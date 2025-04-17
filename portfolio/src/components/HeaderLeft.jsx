import React from 'react'
import image from '/public/image.jpg'
import { BiCurrentLocation, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiLogoSlack, BiMoon, BiPaperclip, BiParagraph, BiPhone, BiSun } from 'react-icons/bi'

function HeaderLeft({darkMode, toggleDarkMode}) {
  return (
    <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white
    sm:border-r dark:border-gray-700'>
        <div className='flex flex-col gap-5'>
            <div className="flex flex-col items-center justify-center gap-5">
                <img src={image} alt="" className='w-32 rounded-full'/>
                <div className='text-center space-y-1'>
                    <h1 className='text-4xl font-light'>Imanol <span className='font-semibold'>Espinal</span></h1>
                    <h3 className='text-x1 font-light'>Software Engineer</h3>
                </div>

                <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
                    {
                        darkMode ? (
                            <BiSun className='text-2x1'></BiSun>
                        ) :
                        (
                            <BiMoon className='text-2x1'></BiMoon>
                        )
                    }
                </button>
            </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 boder-b p-5
        dark:border-gray-700">
            <ul className='space-y-3'>
                <li className='flex items-center gap-2'>    
                    <BiCurrentLocation className='text-x1'/>
                    <span>New York City, NY</span>
                </li>
                <li className='flex items-center gap-2'>    
                    <BiEnvelope className='text-x1'/>
                    <span>imanolespinalh@gmail.com</span>
                </li>
                <li className='flex items-center gap-2'>    
                    <BiPhone className='text-x1'/>
                    <span>917-209-6036</span>
                </li>
                <li className='flex items-center gap-2'>    
                    <BiPaperclip className='text-x1'/>
                    <span><a href="https://drive.google.com/file/d/19Xq4GGepHARjBV7URQxdGEnYAAS8hNeb/view?usp=sharing">My Resume</a></span>
                </li>
            </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
            <h1 className='text-base font-semibold md:text-2xl'>SOCIAL</h1>
            <ul className='space-y-3'>
                <li className='flex items-center gap-2'>
                <BiLogoGithub className='text-xl' />
                <a
                    href="https://github.com/imaesp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-500"
                >
                    @imaesp
                </a>
                </li>
                <li className='flex items-center gap-2'>
                <BiLogoLinkedin className='text-xl' />
                <a
                    href="http://www.linkedin.com/in/imanol-espinal-8b366326b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-500"
                >
                    @ImanolEspinal
                </a>
                </li>
            </ul>
        </div>


        <div className="flex flex-col items-start justify-start gap-5 boder-b p-5
        dark:border-gray-700">
            <h1 className='text-base font-semibold md:text-2xl'>EDUCATION</h1>
            <ul>
                <li className='relative flex flex-col gap-1 border-l p-6 before:absolute 
                before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 
                before:rounded-full before:bg-black dark:before:bg-white before:transform'>    
                    <span className='font-semibold md:text-lg'>Full Stack Development</span>
                    <span className='font-light'>CUNY Tech Prep</span>
                    <span className='text-sm text-gray-400'>2024-2025</span>
                </li>
                <li className='relative flex flex-col gap-1 border-l p-6 before:absolute 
                before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 
                before:rounded-full before:bg-black dark:before:bg-white before:transform'>    
                    <span className='font-semibold md:text-lg'>Computer Science</span>
                    <span className='font-light'>CUNY Brooklyn College</span>
                    <span className='text-sm text-gray-400'>2019-2024</span>
                </li>
            </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 boder-b p-5
        dark:border-gray-700">
            <h1 className='text-base font-semibold md:text-2xl'>LANGUAGES</h1>

            <div className='flex flex-wrap gap-3'>
                <div className="flex flex-wrap gap-3">
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Python</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Java</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>JavaScript</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>TypeScript</span>
                </div>

                <div className="flex flex-wrap gap-3">
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>HTML</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>CSS/Sass</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>SQL</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>GraphQL</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 boder-b p-5
        dark:border-gray-700">
            <h1 className='text-base font-semibold md:text-2xl'>FRAMEWORKS & LIBRARIES</h1>

            <div className='flex flex-wrap gap-3'>
                <div className="flex flex-wrap gap-3">
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>React</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Node</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Express</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Bootstrap</span>
                </div>

                <div className="flex flex-wrap gap-3">
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Tailwind</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>ftplib</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>PyGame</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>PyAudio</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 boder-b p-5
        dark:border-gray-700">
            <h1 className='text-base font-semibold md:text-2xl'> TECHNOLOGIES & TOOLS</h1>

            <div className='flex flex-wrap gap-3'>
                <div className="flex flex-wrap gap-3">
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>REST</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Git</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>GitHub</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>MySQL</span>
                </div>

                <div className="flex flex-wrap gap-3">
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Supabase</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>Postman</span>
                    <span className='rounded-xl bg-black text-white p-3 text-center
                    dark:bg-white dark:text-black'>VSCode</span>
                </div>
            </div>
        </div>      

        <div className="flex flex-col items-start justify-start gap-5 boder-b p-5
        dark:border-gray-700">
            <h1 className='text-base font-semibold md:text-2xl'>INTERESTS & HOBBIES</h1>
            <div className='flex flex-wrap gap-16 p-3'>
                <ul className='flex list-disc flex-col gap-3'>
                    <li>Web Design</li>
                    <li>Theater and Performing Arts</li>
                    <li>Acrylic Painting</li>
                    <li>Arts and Crafts</li>
                    <li>Rock 'n' Roll Music and History</li>
                    <li>Electronics and Hardware</li>
                </ul>
            </div>
        </div>  
    </div>
  )
}

export default HeaderLeft