const Header = () => {
    return (
        <header className="m-0">
            <div className="w-full bg-white relative overflow-hidden header-container">
                <div className="block sm:flex sm:justify-between h-full sm:items-center relative z-30 bg-white"> 
                    <div className="block mx-8 sm:flex sm:justify-between sm:mx-12 h-full sm:items-center">
                        <div className=" w-full mt-32 sm:pt-0 sm:mt-0">
                            <p className="text-xl text-2xl sm:text-3xl">Front End Developer</p>
                            <div className="mt-3">
                                <p className="text-left text-gray-800">
                                    welcome everybody in my portfolio and all information
                                        <br/>
                                    about me and what is my job
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-center mt-12 lg:mt-20">
                            <img src='/images/header-icon.png' className="w-full ms:w-full"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 transform sm:-translate-y-8 md:-translate-y-10 header-bottom">
                <img src='/images/wave2.svg' className="absolute" style={{top: '2px'}}/>
                <img src='/images/wave.svg' className="absolute z-20"/>
            </div>
        </header>
    )
}

export default Header