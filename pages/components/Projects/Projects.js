import projects from '../../../json/projects.json'

const Projects = () => {

    const projectCard = () => {
        return (
            projects.map((items, key) => {
                return (
                    <div className="rounded mt-3 project" key={key} style={{width: '360px',border: 'solid 2px #DDDDDD'}}>
                        <div className="w-full h-64" style={{borderBottom: 'solid 2px #DDDDDD'}}>
                            <img src={`images/${items.imgSrc}`} className="w-full h-full"/>
                        </div>
                        <div className="w-full p-4 flex flex-wrap justify-between">
                            <div className="ml-1 py-2 px-2 bg-gray-400 inline-block rounded-full project-title">
                                {items.title}
                            </div>
                            <a href={items.link} className="p-2 no-underline text-teal-600 hover:text-teal-800">Preview</a>
                        </div>
                    </div>
                )
            })
        )
    }
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
                    {projectCard()}
                </div>
            </div>
        </section>
    )
}

export default Projects;