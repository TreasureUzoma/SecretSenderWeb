import { motion } from "framer-motion";

const SectionOne = ({ visibleIndex, setVisibleIndex, sectionsRef }) => {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section>
            <h1 className="text-2xl mx-7 my-5 mb-6 md:mx-7 lg:text-3xl">
                What SecretSender offers!
            </h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-auto w-full">
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
                        className="w-full py-8 rounded-xl bg-neutral-900 bg-opacity-70 flex text-left px-9 items-center justify-center border border-neutral-800"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.05 }}
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
                            <h3 className="font-bold text-xl">{item.title}</h3>
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

export default SectionOne;
