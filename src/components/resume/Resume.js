import React, { useState } from 'react'
import Title from '../layouts/Title';
import Experience from './Experience';
import Skills from './Skills';

const Resume = () => {
    const EXPERIENCE_TAB = 'experience';
    const SKILL_TAB = 'skills';
    const [openedSection, setOpenedSection] = useState(null);
    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="3+ YEARS OF EXPERIENCE" des="My Resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 ">
                    <li
                        onClick={() =>
                            setOpenedSection(EXPERIENCE_TAB)
                        }
                        className={`${openedSection === EXPERIENCE_TAB
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() =>
                            setOpenedSection(SKILL_TAB)
                        }
                        className={`${openedSection === SKILL_TAB ? "border-designColor rounded-lg" : "border-transparent"
                            } resumeLi`}
                    >
                        Professional Skills
                    </li>
                </ul>
            </div>
            {openedSection === EXPERIENCE_TAB && <Experience />}
            {openedSection === SKILL_TAB && <Skills />}
        </section >
    );
}

export default Resume