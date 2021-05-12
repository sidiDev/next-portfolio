import React from 'react';
import cover from '../../images/wave.svg';
import cover2 from '../../images/wave2.svg';
import headerIcon from '../../images/header-icon.png';

const Header = () => {
    return (
        <header className="m-0">
            <div className="w-full bg-white relative overflow-hidden header-container">
                <div className="block mx-8 sm:flex sm:justify-between sm:mx-12 h-full sm:items-center sm:absolute top-24">
                    <div className=" w-full mt-32 sm:pt-0 sm:mt-0">
                        <p className="text-xl sm:text-2xl">Front End Developer</p>
                        <div className="mt-3">
                            <p className="text-left text-gray-800">
                                welcome everybody in my portfolio and all information
                                    <br/>
                                about me and what is my job
                            </p>
                        </div>
                    </div>
                    <div className="w-full bg-center mt-12 sm:mt-0">
                        <img src={headerIcon} className="w-full ms:w-full"/>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <img src={cover2} className="absolute" style={{top: '2px'}}/>
                <img src={cover} className="absolute z-20"/>
            </div>
        </header>
    )
}

export default Header