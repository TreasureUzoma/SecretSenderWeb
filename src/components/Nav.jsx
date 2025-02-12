import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/privacy", label: "Privacy" },
        { to: "/terms", label: "Terms" }
    ];

    const mobileNavLinks = [
        {
            to: "https://secretsenderapp.vercel.app",
            label: "Sign Up",
            additionalClasses: "bg-[#DA0037] border-[#DA0037]"
        },
        ...navLinks
    ];

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
                <div className="flex justify-center w-full">
                    <div className="w-full flex items-center justify-between my_fixed_width">
                        <Link to="/">
                            <b className="text-lg font-bold ml-5">
                                SecretSender
                            </b>
                        </Link>

                        {/* Mobile menu buttons */}
                        <button
                            className="bg-transparent rounded-md p-2 md:hidden"
                            onClick={toggleMobileNav}
                        >
                            <i
                                className={`fa ${
                                    mobileNavOpen ? "fa-times fa-2x" : "fa-bars"
                                } text-lg`}
                            ></i>
                        </button>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-6">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.to}
                                    className="rounded-3xl text-center bg-transparent text-sm font-bold py-2 px-6 text-white my-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <a
                            href="https://secretsenderapp.vercel.app"
                            className="rounded-3xl border border-[2px] border-black text-center bg-[#DA0037] text-sm font-bold py-2 px-6 text-white my-2 hidden md:flex"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile navigation */}
            {mobileNavOpen && (
                <div
                    id="mobile-nav"
                    className="bottom-0 fixed left-0 right-0 top-[5.2rem] z-50 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md px-8"
                >
                    <div className="bg-[#fefefe] rounded-3xl py-8 w-full px-6 grid grid-cols-2 gap-2">
                        {mobileNavLinks.map((link, index) =>
                            link.to.startsWith("http") ? (
                                <a
                                    key={index}
                                    href={link.to}
                                    className={`block rounded-3xl border border-[2px] text-center text-sm font-bold py-2 px-6 text-white my-2 ${link.additionalClasses}`}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    onClick={toggleMobileNav}
                                    key={index}
                                    to={link.to}
                                    className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
