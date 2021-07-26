import ProjectCard from "./ProjectCard";

const Projects = () => {

    return (
        <section className="mt-5" id="projects">
            <div className="px-8 sm:px-12 bg-white py-8">
                <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">
                    Projects
                </p>
                <p className="mt-4 text-gray-800">
                    This is some of my projects i built you can do preview
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5">
                    <ProjectCard />
                </div>
            </div>
        </section>
    )
}

export default Projects;