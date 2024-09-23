import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HomeMain = () => {
    const [visibleIndex, setVisibleIndex] = useState(Array(6).fill(false)); // 6 items to track
    const sectionsRef = useRef([]);

    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the container
            threshold: 0.1, // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = entry.target.getAttribute("data-index");
                    setVisibleIndex((prev) => {
                        const newVisibleIndex = [...prev];
                        newVisibleIndex[index] = true;
                        return newVisibleIndex;
                    });
                    observer.unobserve(entry.target); // Stop observing after it has become visible
                }
            });
        }, options);

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main className="text-center font-bold p-5">
            <section>
                <h1 className="text-2xl mx-7 my-5 mb-6 md:mx-7 lg:text-3xl">
                    Experience the power of anonymous messages.
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-screen-xl mx-auto">
                    {[
                        {
                            title: "Honest answers, no judgment",
                            description: "Receive candid feedback from friends and family without any fear of judgment.",
                        },
                        {
                            title: "Complete Anonymity",
                            description: "Ask and answer questions anonymously, ensuring privacy and comfort.",
                        },
                        {
                            title: "Spark Meaningful Conversations",
                            description: "Foster deeper connections through engaging and thoughtful discussions.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            data-index={index}
                            ref={(el) => (sectionsRef.current[index] = el)}
                            className="w-full max-w-[18rem] h-[18rem] py-4 rounded-xl bg-[#111] flex text-left px-9 items-center justify-center mx-auto"
                            variants={boxVariants}
                            initial="hidden"
                            animate={visibleIndex[index] ? "visible" : "hidden"}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.1 }}
                        >
                            <div className="text-left">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="font-normal mt-2 text-slate-100">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="my-[6rem]">
                <div className="flex items-center justify-center my-10 md:my-12">
                    <div className="bg-[#990044] rounded-2xl w-[90%] sm:w-[85%] md:w-[95%] lg:w-[85%] p-5">
                        <h2 className="text-2xl mt-3">Easy, Secure, Anonymous</h2>
                        <p className="mb-4 mt-2">
                            SecretSender makes it simple to discover what your friends think of you in a fun and anonymous way.
                        </p>
                        <div className="px-5 mb-4">
                            <Link
                                className="bg-white text-black p-3 rounded-2xl block w-full text-center"
                                to="/about"
                            >
                                Learn more about us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-2xl mb-2">Join Our Community</h2>
                <p className="mx-4 mb-6 text-slate-300 font-semibold">
                    Become part of a vibrant community where you can share, learn, and connect with others who value open communication.
                </p>
                <div className="flex flex-col gap-6 w-full max-w-screen-xl mx-auto md:flex-row md:justify-center">
                    {[
                        {
                            title: "Engage with Others",
                            description: "Participate in discussions that matter to you and share your insights.",
                        },
                        {
                            title: "Safe Environment",
                            description: "We prioritize your safety and privacy in every interaction.",
                        },
                        {
                            title: "Events and Workshops",
                            description: "Join us for exclusive events that promote growth and understanding.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            data-index={index + 3} // Adjust index for the second set of items
                            ref={(el) => (sectionsRef.current[index + 3] = el)} // Adjust ref index
                            className="w-full max-w-[18rem] py-4 rounded-xl bg-[#111] flex text-left p-3 px-5 items-center justify-center mx-auto"
                            variants={boxVariants}
                            initial="hidden"
                            animate={visibleIndex[index + 3] ? "visible" : "hidden"}
                            transition={{ duration: 0.4, ease: "easeInOut", delay: (index + 3) * 0.1 }}
                        >
                            <div className="text-left px-4 py-11">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="font-normal mt-2 text-slate-100">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomeMain;
