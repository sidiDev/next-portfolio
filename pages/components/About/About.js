import React from 'react';
import aboutIcon from '../../images/about-icon.png';
import ResponsiveDesign from '../../images/responsive-design .png';
import creative from '../../images/idea.png';
import cleanCode from '../../images/clean-code.png';


const About = () => {
    return (
        <section className="bg-white overflow-hidden mt-32 sm:mt-56" id="about">
            <div className="px-8 py-8 sm:px-12">
                <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">About me</p>
                <div className="block sm:flex sm:justify-between sm:items-center sm:flex-row-reverse">
                    <div className="w-full mt-5 sm:mt-0">
                        <img src={aboutIcon} />
                    </div>
                    <div className="w-full mt-5">
                        <p className="text-gray-800 text-left">
                            Hello everybody my name is Sidi, i'am from mauritania, 
                            i have expertise in <b>front end development</b>, 
                            i create some amazing projects like <b>youtube interface</b> and <b>freelance site</b> interface and <b>ecommerce</b> site,
                            i have a good knowledge in <b>Html</b> and <b>Css</b> and <b>js</b> and <b>React</b> and <b>tailwindcss</b> and other,
                            i'am always trying to improve my skills.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:space-x-6 mt-5 justify-center">
                    <div className="w-full sm:w-48 mt-5 sm:mt-0">
                        <img src={ResponsiveDesign} className="w-16 m-auto"/>
                        <p className="mt-2 text-center"><b>Responsive Design</b></p>
                    </div>
                    <div className="w-full sm:w-48 mt-5 sm:mt-0">
                        <img src={creative} className="w-16 m-auto"/>
                        <p className="mt-2 text-center"><b>Creative</b></p>
                    </div>
                    <div className="w-full sm:w-48 mt-5 sm:mt-0">
                        <img src={cleanCode} className="w-16 m-auto"/>
                        <p className="mt-2 text-center"><b>Clean &amp; reusable code</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About