import React from 'react'
import Title from '../layouts/Title'
import {
    StockhomeApp,
    TicTacToe,
    Robofriends,
    PersonalBlog,
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black font-bodyFont"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Projects"
                    des="Some of my works"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="StockHome Ecommerce App"
                    des="An active ReactJS Inventory App that stores real time data for customers and store owners as well as helps with inventory management"
                    src={StockhomeApp}
                />
                <ProjectsCard
                    title="TicTacToe"
                    des="If you think you're a pro at this game, check this out and have a match with the TicTacToe AI. ;)"
                    src={TicTacToe}
                />
                <ProjectsCard
                    title="Robofriends"
                    des="Create new Robot avatars for you and your friends. Robo arts are gotten from a Robo avatar API"
                    src={Robofriends}
                />
                <ProjectsCard
                    title="Personal Blog"
                    des="Tried my hands on WordPress and decided to create a personal blog."
                    src={PersonalBlog}
                />
            </div>
        </section>
    );
}

export default Projects