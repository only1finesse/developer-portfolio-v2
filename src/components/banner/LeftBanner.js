import React from 'react'
import { CgHello } from 'react-icons/cg'
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Software Engineer.", "Front-End Dev.", "Music Producer.", "Sound Engineer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 3000,
    });

    const GITHUB_LINK = 'https://github.com/only1finesse';
    const LINKEDIN_LINK = 'https://www.linkedin.com/in/stanley-o-1926121b9/'
    const DISCORD_LINK = 'https://discord.com/users/758000198587777065'


    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20 pt-10 pl-16'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-4 items-center'>
                    <CgHello className='text-3xl' />
                    <h4 className='text-lg font-normal uppercase'> Welcome, friend!</h4>
                </div>
                <h1 className='text-6xl font-bold'>Hi, I'm{' '}
                    <span className='text-designColor'>Stanley Omotuyole</span></h1>
                <h2 className='text-4xl font-bold'>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>

            </div>
            {/* <div className='cursor-pointer flex flex-row gap-16'>
                <Link
                    className='bannerLink'
                    activeClass="active"
                    to={'about'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={450}
                >
                    More About Me
                </Link>
                <Link
                    className='bannerLink'
                    activeClass="active"
                    to={'projects'}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={450}
                >
                    Latest Projects
                </Link>
            </div> */}
            <div>
                <div className="flex flex-col gap-10">
                    <h2 className="text-base font-semibold uppercase font-titleFont mb-4">
                        Let's Connect! Find me on:
                    </h2>
                    <div className="flex gap-4">
                        <a href={GITHUB_LINK} className="bannerIcon">
                            <FaGithub />
                        </a>
                        <a href={LINKEDIN_LINK} className="bannerIcon">
                            <FaLinkedinIn />
                        </a>
                        <a href={DISCORD_LINK} className="bannerIcon">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>


        </div>
    )
}

export default LeftBanner