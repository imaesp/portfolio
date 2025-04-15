import React from 'react'
import { BiCurrentLocation, BiEnvelope, BiLogoChrome, BiLogoEdge, BiLogoGithub, BiLogoInternetExplorer, BiLogoLinkedin, BiLogoSlack, BiMoon, BiPhone, BiSun } from 'react-icons/bi'
import { DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiPostgresql, DiReact, DiSass } from 'react-icons/di'

function Home() {
  return (
    <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
        <main className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>

            <div className="space-y-5">
                <h1 className='text-2xl font-bold md:text-4xl'>About</h1>
                <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>From a young age, I was captivated by the process of building my own toys, fascinated by how I could bring something entirely new into existence with just my hands and imagination. This early obsession naturally evolved into a passion for software engineering and web development.
                Now, as a Computer Science student at Brooklyn College, I'm driven by the same desire to create and innovate, only now, I'm building software instead of toys. My aspiration to become a Full Stack Web Developer is fueled by this lifelong love of building, as I continue to develop my skills in both front-end and back-end development, eager to construct the digital solutions of tomorrow.</p>
            </div>

            <div className="space-y-10">
                 <h1 className='text-2xl font-bold md:text-4xl'>Experience</h1>
                 <div className='flex flex-col lg:flex-row lg:gap-20'>
                    <ul>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute 
                        before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 
                        before:rounded-full before:bg-black dark:before:bg-white before:transform'>    
                            <span className='text-lg font-semibold'>Web Development Fellow</span>
                            <span className='font-light'>CUNY Tech Prep</span>
                            <span className='text-sm text-gray-400'>2024-Current</span>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <p>Selected for a competitive web development fellowship with students from across the 11 CUNY senior colleges among 600+ applicants where Fellows create technical projects using tools such as React, Node + Express, and PostgreSQL.</p>
                                </li>
                                <li>
                                    <p>Participate in weekly courses and learn industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, TDD, and CI/CD.	</p>
                                </li>
                            </ul>
                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute 
                        before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 
                        before:rounded-full before:bg-black dark:before:bg-white before:transform'>    
                            <span className='text-lg font-semibold'>Software Developer Contractor</span>
                            <span className='font-light'>Cushman & Wakefield</span>
                            <span className='text-sm text-gray-400'>Jun-Aug 2021</span>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                   <p>Developed software in collaboration with another developer, using Python libraries ftplib and ftputil to aggregate data from multiple hosts into a main operating computer via an FTP server.
                                   </p>
                                </li>
                                <li>
                                   <p>Configured and tested 10+ computers for concurrent FTP server connections, eliminating the need for manual interaction across multiple floors, increasing  productivity by 100%.</p>
                                </li>
                                <li>
                                    <p>Created a temporary interactive system to troubleshoot and manage bugs, which promoted efficiency and reduced development time by two weeks.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                 </div>
            </div>

            <div className="max-w-3xl space-y-8">
                <h1 className='text-2xl font-bold md:text-4xl'>Projects</h1>

                {/* PAWfect Match */}
                <div className='text-baseline space-y-3'>
                    <h3 className='text-sm font-semibold md:text-lg'>PAWfect Match</h3>
                    <ul className='flex flex-wrap gap-3'>
                    <li className='flex items-center gap-2'>
                        <BiLogoGithub className='text-xl' />
                        <a
                        href="https://github.com/imaesp/PAWfect-Match"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        Repository
                        </a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiLogoInternetExplorer className='text-xl' />
                        <a
                        href="https://pawfect-match-k561zc7hj-imaesps-projects.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        Deployment
                        </a>
                    </li>
                    </ul>
                    <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                    PAWfect Match is a personalized pet matchmaking service designed to connect potential pet owners with pets that best suit their lifestyle, living conditions, and available resources. PAWfect Match makes the connection easy and efficient.
                    </p>
                    <div className="flex flex-wrap gap-3">
                    <DiJavascript size={40} />
                    <DiReact size={40} />
                    <DiNodejs size={40} />
                    <DiBootstrap size={40} />
                    <DiSass size={40} />
                    <DiPostgresql size={40} />
                    </div>
                </div>

                {/* BoroughLife */}
                <div className='text-baseline space-y-3'>
                    <h3 className='text-sm font-semibold md:text-lg'>BoroughLife</h3>
                    <ul className='flex flex-wrap gap-3'>
                    <li className='flex items-center gap-2'>
                        <BiLogoGithub className='text-xl' />
                        <a
                        href="https://github.com/imaesp/BoroughLife"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        Repository
                        </a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiLogoInternetExplorer className='text-xl' />
                        <a
                        href="https://karechob.github.io/BoroughLife-Project/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        Deployment
                        </a>
                    </li>
                    </ul>
                    <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                    BoroughLife is an interactive web platform designed to foster community engagement and provide a space for discussions on topics related to the five boroughs of New York City.
                    </p>
                    <div className='flex flex-wrap gap-3'>
                    <DiJavascript size={40} />
                    <DiHtml5 size={40} />
                    <DiCss3 size={40} />
                    <DiBootstrap size={40} />
                    </div>
                </div>

                {/* RESOURCESfirst */}
                <div className='text-baseline space-y-3'>
                    <h3 className='text-sm font-semibold md:text-lg'>RESOURCESfirst</h3>
                    <ul className='flex flex-wrap gap-3'>
                    <li className='flex items-center gap-2'>
                        <BiLogoGithub className='text-xl' />
                        <a
                        href="https://github.com/imaesp/ctp-hackathon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        Repository
                        </a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BiLogoInternetExplorer className='text-xl' />
                        <a
                        href="https://imaesp.github.io/ctp-hackathon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        Deployment
                        </a>
                    </li>
                    </ul>
                    <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
                    RESOURCESfirst is a web-based platform designed to centralize and streamline access to essential resources for students across all CUNY colleges.
                    </p>
                    <div className='flex flex-wrap gap-3'>
                    <DiJavascript size={40} />
                    <DiHtml5 size={40} />
                    <DiCss3 size={40} />
                    <DiBootstrap size={40} />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home