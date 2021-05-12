import React from 'react';
import aboutIcon from '../../images/about-icon.png';
import project1 from '../../images/project-1.PNG';
import project2 from '../../images/project-2.PNG';
import project3 from '../../images/project-3.PNG';
import project4 from '../../images/project-4.PNG';

const Projects = () => {
    return (
        <section className="mt-5" id="projects">
            <div className="px-8 sm:px-12 bg-white py-8">
                <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">
                    Projects
                </p>
                <p className="mt-4 text-gray-800">
                    This is some of my projects i create you can do preview
                </p>
                <div className="flex flex-wrap justify-around mt-5">
                    <div className="rounded mt-3 project" style={{width: '360px',border: 'solid 2px #DDDDDD'}}>
                        <div className="w-full h-64" style={{borderBottom: 'solid 2px #DDDDDD'}}>
                            <img src={project1} className="w-full h-full"/>
                        </div>
                        <div className="w-full p-4 flex flex-wrap justify-between">
                            <div className="ml-1 py-2 px-2 bg-gray-400 inline-block rounded-full project-title">
                                Youtube Interface
                            </div>
                            <a href="https://sididev.github.io/youtube_project/" className="p-2 no-underline text-teal-600 hover:text-teal-800">Preview</a>
                        </div>
                    </div>
                    <div className="rounded mt-3 project" style={{width: '360px',border: 'solid 2px #DDDDDD'}}>
                        <div className="w-full h-64" style={{borderBottom: 'solid 2px #DDDDDD'}}>
                            <img src={project2} className="w-full h-full"/>
                        </div>
                        <div className="w-full p-4 flex flex-wrap justify-between">
                            <div className="ml-1 py-2 px-2 bg-gray-400 inline-block rounded-full project-title">
                                E-shop Interface
                            </div>
                            <a href="https://sididev.github.io/shop-site/" className="p-2 no-underline text-teal-600 hover:text-teal-800">Preview</a>
                        </div>
                    </div>
                    <div className="rounded mt-3 project" style={{width: '360px',border: 'solid 2px #DDDDDD'}}>
                        <div className="w-full h-64" style={{borderBottom: 'solid 2px #DDDDDD'}}>
                            <img src={project3} className="w-full h-full"/>
                        </div>
                        <div className="w-full p-4 flex flex-wrap justify-between">
                            <div className="ml-1 py-2 px-2 bg-gray-400 inline-block rounded-full project-title">
                                Freelance Interface
                            </div>
                            <a href="https://sididev.github.io/workflow/" className="p-2 no-underline text-teal-600 hover:text-teal-800">Preview</a>
                        </div>
                    </div>
                    <div className="rounded mt-3 project" style={{width: '360px',border: 'solid 2px #DDDDDD'}}>
                        <div className="w-full h-64" style={{borderBottom: 'solid 2px #DDDDDD'}}>
                            <img src={project4} className="w-full h-full"/>
                        </div>
                        <div className="w-full p-4 flex flex-wrap justify-between">
                            <div className="ml-1 py-2 px-2 bg-gray-400 inline-block rounded-full project-title">
                                Remotely Job
                            </div>
                            <a href="https://sididev.github.io/remotely-jobs/" className="p-2 no-underline text-teal-600 hover:text-teal-800">Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;