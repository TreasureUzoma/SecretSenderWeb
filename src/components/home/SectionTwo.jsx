// SectionTwo.js
import { Link } from "react-router-dom";

const SectionTwo = () => {
    return (
        <section className="my-[6rem]">
            <div className="flex items-center justify-center my-10 md:my-12">
                <div className="bg-[#990044] rounded-2xl w-[90%] sm:w-[85%] md:w-[95%] lg:w-[85%] p-5">
                    <h2 className="text-2xl mt-3">Easy, Secure, Anonymous</h2>
                    <p className="mb-4 mt-3 text-base font-medium text-neutral-300">
                        SecretSender makes it simple to discover what your
                        friends think of you in a fun and anonymous way.
                    </p>
                    <div className="px-5 mb-4">
                        <Link
                            className="bg-white text-black px-3 py-2 rounded-2xl block w-full text-center"
                            to="/about"
                        >
                            Learn more about us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
