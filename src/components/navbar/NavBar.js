import React from 'react'
import { Link } from 'react-scroll'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { navLinksdata } from '../../constants'
import { my_resume } from '../../assets'

const NavBar = () => {
    const downloadResume = (blob, fileName) => {
        const link = document.createElement('a');
        // create a blobURI pointing to our Blob
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        // some browser needs the anchor to be in the doc
        document.body.append(link);
        link.click();
        link.remove();
        // in case the Blob uses a lot of memory
        setTimeout(() => URL.revokeObjectURL(link.href), 7000);
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
                        <a
                            href={my_resume} download="stan-omotuyole-resume" target='_blank'
                            rel="noreferrer"
                        >
                            <button className='flex flex-row gap-2 justify-between items-center font-medium' onClick={() => downloadResume(new Blob(['resume']), 'stan-omotuyole-resume.pdf')}>
                                <HiDownload />
                                <p className='font-medium pr-2'>Resume</p>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar