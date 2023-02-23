import React from 'react';
import { Link } from 'react-scroll'
import { FaReact, FaNodeJs, } from 'react-icons/fa';
import { SiTailwindcss, SiSass, SiFastapi, SiPhp, SiPython, SiWordpress } from 'react-icons/si';
import Title from '../layouts/Title'

const About = () => {
    return (
        <section
            id="about"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title="About" des="What I do" />
            <div className='px-10 flex gap-10'>
                <div className='flex w-1/2 flex-col gap-8 leading-relaxed'>
                    <h4 className='text-lg font-bold'>Hello!</h4>
                    <div className='flex flex-col gap-3'>
                        <p>
                            I'm Stanley, a devoted Software Engineer with experience in both Front-End and Back-End development. In my 3 years of experience, mostly as a Front-End developer, I've built strong skills in Agile Web Development and Integration Testing, focusing on problem solving and building solutions.
                        </p>
                        <p>
                            I'm someone who is always eager to learn by doing, and thus, gain new experiences. When I'm not writing code, I'm either making music, playing a video game or playing soccer!
                        </p>
                        <p>
                            So whether it's a project, job opportunity, a quick <span className='font-semibold'>COD Deathmatch</span> or a chat over some of Seattle's finest Bobba tea, don't hesitate to <Link
                                className='text-blue-400 hover:text-blue-600 underline' href='/home'
                                activeClass="active"
                                to={'home'}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={450}
                            >
                                reach out!
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='flex w-1/2 flex-col gap-8'>
                    <h4 className='text-lg font-bold'>Skills</h4>
                    <div>
                        <div className="flex gap-6 flex-wrap">
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                            <span className="bannerIcon">
                                <FaNodeJs />
                            </span>
                            <span className="bannerIcon">
                                <SiTailwindcss />
                            </span>
                            <span className="bannerIcon">
                                <SiSass />
                            </span>
                            <span className="bannerIcon">
                                <SiPhp />
                            </span>
                            <span className="bannerIcon">
                                <SiFastapi />
                            </span>
                            <span className="bannerIcon">
                                <SiPython />
                            </span>
                            <span className="bannerIcon">
                                <SiWordpress />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}

export default About