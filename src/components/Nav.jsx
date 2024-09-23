import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
                <div className="flex justify-center w-full">
                    <div className="w-full flex items-center justify-between my_fixed_width">
                        <b className="text-lg font-bold ml-5">SecretSender</b>

                        {/* Mobile menu buttons */}
                        {!mobileNavOpen ? (
                            <button
                                className="bg-transparent rounded-md p-2 md:hidden"
                                onClick={toggleMobileNav}
                            >
                                <i className="fa fa-bars text-lg"></i>
                            </button>
                        ) : (
                            <button
                                className="bg-transparent rounded-md p-2 md:hidden"
                                onClick={toggleMobileNav}
                            >
                                <i class="fa fa-times text-lg fa-2x"></i>
                            </button>
                        )}

                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-6">
                            <Link
                                to="/"
                                className="rounded-3xl text-center bg-transparent text-sm font-bold py-2 px-6 text-white my-2"
                            >
                                Home
                            </Link>
                            <Link
                                to="/privacy"
                                className="rounded-3xl  text-center bg-transparent text-sm font-bold py-2 px-6 text-white my-2"
                            >
                                Privacy
                            </Link>
                            <Link
                                to="/terms"
                                className="rounded-3xl text-center bg-transparent text-sm font-bold py-2 px-6 text-white my-2"
                            >
                                Terms
                            </Link>
                        </div>
                        <a
                            href="#"
                            className="rounded-3xl border border-[2px] border-black text-center bg-[#DA0037] text-sm text-sm font-bold py-2 px-6 text-white my-2 hidden md:flex"
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
                    <div className="float-right bg-[#fefefe] rounded-3xl py-3 px-6">
                        <a
                            href="#"
                            className="block rounded-3xl border border-[2px] border-[#DA0037] text-center bg-[#DA0037] text-sm font-bold py-2 px-6 text-white my-2"
                        >
                            Get Started
                        </a>
                        <Link
                            to="/"
                            className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                        >
                            Home
                        </Link>
                        <Link
                            className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                            to="/privacy"
                        >
                            Privacy
                        </Link>
                        <Link
                            className="block rounded-3xl border border-[2px] border-black text-center text-sm font-bold py-2 bg-black px-6 text-white my-2"
                            to="/terms"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
