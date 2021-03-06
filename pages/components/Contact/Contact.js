import React from 'react';

const Contact = () => {
    return (
        <section className="bg-white py-8 mt-8 border-t-2 border-teal-600" id="contact">
            <div className="mx-8 sm:mx-12">
                <div className="pb-3">
                <p className="pb-3 border-b-4 border-teal-600 inline-block text-xl sm:text-2xl">
                    contact
                </p>
                <p className="mt-3 text-gray-800 leading-6 sm:w-1/3">
                    If you have any questions or want to <b> create a site for you or your company </b> you can contact me
                </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <a href="https://twitter.com/sidi_jeddou_dev" className="no-underline ml-4 mt-4 rounded-full">                        
                        <div className="flex justify-center items-center w-12 h-12 rounded-full border-2 borde-gray-500">
                            <img src="/images/twitter.webp" />
                        </div>
                    </a>
                    <a href="mailto:sididev3@gmail.com" className="no-underline ml-4 mt-4 rounded-full">
                        <div className="flex justify-center items-center w-12 h-12 rounded-full border-2 borde-gray-500">
                            <img src="/images/email.webp" className="w-8 h-8" />
                        </div>
                    </a>
                    <a href="https://github.com/sidiDev" className="no-underline ml-4 mt-4 rounded-full">
                        
                        <div className="flex justify-center items-center w-12 h-12 rounded-full border-2 borde-gray-500">
                            <img src="/images/github.svg" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact