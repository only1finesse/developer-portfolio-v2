import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-4"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2010 - Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc - Medical Laboratory Science"
                        subTitle="Imo State University, Nigeria (2014 - 2020)"
                        result="3.5/5"
                        des="Specialized in Histopathology and Phlebotomy. Learned necessary skills needed to function in the Laboratory sector of the health industry"
                    />
                    <ResumeCard
                        title="Certificate in Software Development"
                        subTitle="YEAR UP / Seattle Central College (2020 - 2021)"
                        result="4/4"
                        des="Certificate provided in order to prepare aspiring Software Engineers to work in various sectors of the IT Industry."
                    />
                    <ResumeCard
                        title="Secondary School Education"
                        subTitle="Praiseland COllege, Nigeria (2010 - 2013)"
                        result="GED"
                        des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div>
            {/* part Two */}

            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Software Engineer Apprentice (E-Commerce)"
                        subTitle="Box - (2022 - Present)"
                        result="Redwood, CA"
                        des="Worked with engineers to create and implement marketing strategies that make online transactions possible thus, enabling customer retention."
                    />
                    <ResumeCard
                        title="Software Engineer/PM Intern (Zero-Trust)"
                        subTitle="Microsoft - (Apr 2022 - Oct 2022)"
                        result="Redmond, WA"
                        des="Involved in agile development and building/maintaining secure internal tools used across the organization."
                    />
                    <ResumeCard
                        title="Producer / Mixing Engineer"
                        subTitle="Swift Records - (2018 - 2020)"
                        result="Nigeria"
                        des="Produced, mixed and mastered audio in a professional studio setting, ensuring quality records for clients."
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Experience