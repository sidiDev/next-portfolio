import React from 'react';
import html from '../../images/html.png';
import css from '../../images/css.png';
import tailwindcss from '../../images/tailwindcss.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import versionControl from '../../images/version-control.png';
import sass from '../../images/sass.png';

const Skills = () => {
    return (
        <section className="mt-16" id="skills">
            <div className="mx-8 sm:mx-12">
                <div className="skill-title">
                    <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">Skills</p>
                </div>
                <div className="mt-5 grid gap-y-4 skills-container">
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={html} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">HTML</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={css} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">CSS</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={js} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">JavaScript</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={tailwindcss} className="w-8 h-6" />
                        </div>
                        <p className="mt-2">Tailwindcss</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={sass} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">Sass</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={react} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">React</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={redux} className="w-8 h-8" />
                        </div>
                        <p className="mt-2">Redux</p>
                    </div>
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={versionControl} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">Version Control</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </section>
    )
}

export default Skills