const About = () => {
    return (
        <section className="bg-white overflow-hidden mt-32 sm:mt-56" id="about">
            <div className="px-8 py-8 sm:px-12">
                <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">About me</p>
                <div className="block sm:flex sm:justify-between sm:items-center sm:flex-row-reverse">
                    <div className="w-full mt-5 sm:mt-0">
                        <img src='/images/about.webp' />
                    </div>
                    <div className="w-full mt-5">
                        <p className="text-gray-800 text-left">
                            Hello everybody, my name is Sidi, 
                            I'm a senior <b>front-end web developer </b>
                            with 3 years of experience.
                            <br />
                            My goal is to build beautiful UIs (User Interfaces) and better user experience
                            and make the websites responsive with all devices and faster.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:space-x-6 mt-5 justify-center">
                    <div className="w-full sm:w-48 mt-5 sm:mt-0">
                        <img src='/images/responsive.webp' className="w-16 m-auto"/>
                        <p className="mt-2 text-center"><b>Responsive Design</b></p>
                    </div>
                    <div className="w-full sm:w-48 mt-5 sm:mt-0">
                        <img src='/images/idea.webp' className="w-16 m-auto"/>
                        <p className="mt-2 text-center"><b>Creative</b></p>
                    </div>
                    <div className="w-full sm:w-48 mt-5 sm:mt-0">
                        <img src='/images/clean-code.webp' className="w-16 m-auto"/>
                        <p className="mt-2 text-center"><b>Clean &amp; reusable code</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About