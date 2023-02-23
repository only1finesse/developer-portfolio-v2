import React from 'react'
import { Link } from 'react-scroll'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { navLinksdata } from '../../constants'

const NavBar = () => {
    const downloadResume = () => {
        // using Java Script method to get PDF file
        fetch('StanleyOmotuyole-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'StanleyOmotuyole-Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className='w-full h-20 sticky top-0 z-50 bg-darkBlue mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-black'>
            <h1 className='text-3xl font-logoFont font-semibold hover:text-3xl'><span className='text-designColor'>š</span>omotuyole.</h1>

            <div>
                <ul className='flex items-center gap-10'>
                    {
                        navLinksdata.map(({ _id, title, link }) => (
                            <li className='text-base font-normal text-gray-200 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={450}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <ul className='flex items-center'>
                    <li><BsFillMoonStarsFill /></li>
                    <li className='bg-gradient-to-r from-designColor to-purple-500 text-offWhite p-2 rounded-md  ml-8 hover:bg-gradient-to-r hover:from-red-700 hover:to-purple-700 duration-300 transition-all'>
                        <button className='flex flex-row gap-2 justify-between items-center font-medium' onClick={downloadResume}>
                            <HiDownload />
                            <p className='font-medium pr-2'>Resume</p>
                            {/* <a className='font-medium ' href="google.com"> Resume</a> */}
                        </button>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar