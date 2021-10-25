import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRocket, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div>
            <section className="pb-20  bg-gray-300 ">
                <div className="container mx-auto px-4">
                    <div className="text-center pb-4 pt-10">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                            About Us
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center -mt-10">
                    <div className="w-full md:w-5/12 px-4  mr-auto ml-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                        <i className="text-xl"><FontAwesomeIcon icon={faUserFriends}/></i>
                    </div>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                        Why Learn Web Development Online
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                        As a web developer, your credibility is more about the strength of your portfolio than it is about your credentials. Your employment opportunities will often come from concrete skills and samples of your work rather than a degree from a university. It’s not that a proper college education isn’t important or valuable as a web developer.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                        The kit comes with three pre-built pages to help you get
                        started faster. You can change the text and images and
                        you're good to go. Just make sure you enable them first via
                        JavaScript.
                    </p>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mt-28 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                        <img
                        alt="..."
                        src="https://i.ibb.co/f9dZc6W/about-1.jpg"
                        className="w-full align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block"
                            style={{
                            height: "95px",
                            top: "-94px"
                            }}>
                            <polygon
                            points="-30,95 583,95 583,65"
                            className="text-pink-600 fill-current"
                            ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                            Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            The Arctic Ocean freezes every winter and much of the
                            sea-ice then thaws every summer, and that process will
                            continue whatever happens.
                        </p>
                        </blockquote>
                    </div>
                    </div>

                </div>
                </div>
            </section>
            <section className="relative py-20">
                    <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: "80px" }}
                    >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                    </div>

                    <div className="container mx-auto px-4">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src="https://i.ibb.co/zfQdKxQ/about-2.jpg"
                        />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                            <i className="text-xl"><FontAwesomeIcon icon={faRocket}/></i>
                            </div>
                            <h3 className="text-3xl font-semibold">
                            What will you achieve?
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            The extension comes with three pre-built pages to help you
                            get started faster. You can change the text and images and
                            you're good to go.
                            </p>
                            <ul className="list-none mt-6">
                            <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="fas fa-fingerprint"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">
                                    Carefully crafted components
                                    </h4>
                                </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="fab fa-html5"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Amazing page examples</h4>
                                </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="far fa-paper-plane"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Model web pages using the box model</h4>
                                </div>
                                </div>
                            </li>

                            <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="far fa-paper-plane"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Produce an interactive website using JavaScript</h4>
                                </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="far fa-paper-plane"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Produce a HTML web page using suitable tags and attributes</h4>
                                </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="far fa-paper-plane"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Apply classes and ids to style a website</h4>
                                </div>
                                </div>
                                </li>
                                <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                    <i className="far fa-paper-plane"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Model web pages using the box model</h4>
                                </div>
                                </div>
                            </li>

                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
    )
}

export default About
