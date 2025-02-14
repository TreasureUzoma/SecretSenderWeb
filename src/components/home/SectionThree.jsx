import { motion } from "framer-motion";

const SectionThree = ({ visibleIndex, setVisibleIndex, sectionsRef }) => {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section>
            <h2 className="text-2xl mb-2">Join Our Community</h2>
            <p className="mx-4 mb-6 text-neutral-300 font-medium">
                Become part of a vibrant community where you can share, learn,
                and connect with others who value open communication.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-auto w-full">
                {[
                    {
                        title: "Engage with Others",
                        description:
                            "Participate in discussions that matter to you and share your insights.",
                        icon: "chat"
                    },
                    {
                        title: "Safe Environment",
                        description:
                            "We prioritize your safety and privacy in every interaction.",
                        icon: "shield"
                    },
                    {
                        title: "Events and Workshops",
                        description:
                            "Join us for exclusive events that promote growth and understanding.",
                        icon: "event"
                    },
                    {
                        title: "Learning Resources",
                        description:
                            "Access exclusive learning materials to expand your knowledge.",
                        icon: "book"
                    },
                    {
                        title: "Networking Opportunities",
                        description:
                            "Build connections and grow your professional network.",
                        icon: "people"
                    },
                    {
                        title: "24/7 Support",
                        description:
                            "Our support team is here for you at any time.",
                        icon: "support_agent"
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        data-index={index + 3} // Adjust index for the second set of items
                        ref={el => (sectionsRef.current[index + 3] = el)} // Adjust ref index
                        className="w-full py-8 rounded-xl bg-neutral-900 bg-opacity-70 flex text-left px-9 items-center justify-center border border-neutral-800"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.05 }}
                        variants={boxVariants}
                        initial="hidden"
                        animate={visibleIndex[index + 3] ? "visible" : "hidden"}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: (index + 3) * 0.1
                        }}
                    >
                        <div>
                            <span className="material-icons text-2xl bg-[#DA0037] rounded-2xl px-3 py-2 bg-opacity-10 text-[#DA0037] mb-3">
                                {item.icon}
                            </span>
                            <h3 className="font-bold text-xl mt-3">
                                {item.title}
                            </h3>
                            <p className="font-normal mt-3 text-neutral-400 text-base">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SectionThree;
