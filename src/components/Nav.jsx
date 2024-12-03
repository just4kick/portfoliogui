import React from "react";
import Icon from "./Icon";
import Project from "./Project";
import "./Nav.css";
const Nav = () => {
    return (
        <>
            <div className="mockup-window border-base-300 border ">
                <div className="border-2 border-inherit maincon">
                    <div className="artboard artboard-horizontal paratest">
                        <div className="avatar navpad m-5">
                            <div className="w-16 rounded-full">
                                <img src="public/mydpp.png" />
                            </div>
                        </div>
                        <h1 className="navpad text-lg">Sumit Sharma</h1>
                        <div className="navpad">
                            <Icon></Icon>
                        </div>
                        <div role="tablist" className="tabs tabs-lifted navpad">
                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab"
                                aria-label="About"
                                defaultChecked
                            />
                            <div
                                role="tabpanel"
                                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                            >
                                <p className="navpad">
                                    I am Sumit Sharma, currently pursuing my
                                    Master's in Computer Applications at Meghnad
                                    Saha Institute of Technology, Kolkata. I
                                    have a strong background in backend
                                    development with expertise in Node.js, Java
                                    Servlets, and building secure authentication
                                    APIs. My projects, such as a
                                    blockchain-based electronic voting machine
                                    and a dynamic blogging platform, reflect my
                                    passion for creating impactful tech
                                    solutions.
                                </p>
                                <h1 className="navpad text-xl">Education</h1>
                                <div>
                                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                        <li>
                                            <div className="timeline-middle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="timeline-start mb-10 md:text-end">
                                                <time className="font-mono italic">
                                                    2023-25
                                                </time>
                                                <div className="text-lg font-black">
                                                    Master of Computer
                                                    Application.
                                                </div>
                                                Meghnad Saha Institute of
                                                Technology
                                            </div>
                                            <hr />
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-middle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="h-5 w-5"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="timeline-end mb-10">
                                                <time className="font-mono italic">
                                                    2020-23
                                                </time>
                                                <div className="text-lg font-black">
                                                    Bachelor of Computer
                                                    Applications
                                                </div>
                                                Meghnad Saha Institute of
                                                Technology
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab"
                                aria-label="Contact"
                            />
                            <div
                                role="tabpanel"
                                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                            >
                                <p>
                                    Let's work on something together, you can
                                    book a meeting below or drop a dm on
                                    <a
                                        className="link"
                                        href="https://x.com/Sumit99117018"
                                    >
                                        {" "}
                                        twitter.
                                    </a>
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="my_tabs_2"
                                role="tab"
                                className="tab"
                                aria-label="Project"
                            />
                            <div
                                role="tabpanel"
                                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                            >
                                <div>
                                    <Project></Project>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Nav;
