import skills from '../../../json/skills.json'

const Skills = () => {

    const skillsCard = () => {
        return (
            skills.map((items, key) => {
                return (
                    <div className="bg-white text-center pb-5 pt-3 w-56 rounded shadow-lg skill" key={key}>
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-500 m-auto">
                            <img src={`/images/${items.imgSrc}`} className="w-8 h-9" />
                        </div>
                        <p className="mt-2">{items.title}</p>
                    </div>
                )
            })
        )
    }

    return (
        <section className="mt-16" id="skills">
            <div className="mx-8 sm:mx-12">
                <div className="skill-title">
                    <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">Skills</p>
                </div>
                <div className="mt-5 grid gap-y-4 skills-container">
                    {skillsCard()}
                </div>
            </div>
            <br/>
            <br/>
        </section>
    )
}

export default Skills