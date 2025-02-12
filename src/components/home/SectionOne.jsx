import { motion } from "framer-motion";

const SectionOne = ({ visibleIndex, setVisibleIndex, sectionsRef }) => {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section>
            <h1 className="text-2xl mx-7 my-5 mb-6 md:mx-7 lg:text-3xl">
                Experience the power of anonymous messages.
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-screen-xl mx-auto">
                {[
                    {
                        title: "Honest answers, no judgment",
                        description:
                            "Receive candid feedback from friends and family without any fear of judgment."
                    },
                    {
                        title: "Complete Anonymity",
                        description:
                            "Ask and answer questions anonymously, ensuring privacy and comfort."
                    },
                    {
                        title: "Spark Meaningful Conversations",
                        description:
                            "Foster deeper connections through engaging and thoughtful discussions."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        data-index={index}
                        ref={el => (sectionsRef.current[index] = el)}
                        className="w-full max-w-[18.1rem] h-[18rem] py-6 rounded-xl bg-[#111] flex text-left px-9 items-center justify-center mx-auto"
                        variants={boxVariants}
                        initial="hidden"
                        animate={visibleIndex[index] ? "visible" : "hidden"}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: index * 0.1
                        }}
                    >
                        <div className="text-left">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="font-normal mt-2 text-slate-100 text-[0.95rem]">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SectionOne;
