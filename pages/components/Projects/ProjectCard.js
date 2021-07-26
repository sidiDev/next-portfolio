import projects from '../../../json/projects.json'

export default () => {
    return (
        projects.map((items, key) => {
            return (
                <div className="bg-white rounded-md shadow-md border border-gary-200 mt-3 p-4" key={key}>
                    <div className="bg-no-repeat w-full h-48 rounded-md" style={{backgroundImage: `url("/projects/${items.imgSrc}")`, backgroundSize: 'cover'}}></div>
                    <div className="mt-5">
                        <span className="text-xl font-semibold text-gray-700">{items.title}</span>
                        <p className="text-sm mt-2 text-gray-500">{items.desc}</p>
                        <div className="mt-3 flex space-x-3">
                            <a href={items.preview} target="_blank" className="bg-indigo-600 text-white rounded-md pt-2 pb-2 pl-3 pr-3 flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>Preview</span>
                            </a>
                            <a href={items.code} target="_blank" className="bg-indigo-600 text-white rounded-md pt-2 pb-2 pl-3 pr-3 flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <span>Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
    )
}