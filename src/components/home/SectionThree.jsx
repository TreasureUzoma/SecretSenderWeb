// SectionThree.js
import { motion } from "framer-motion";

const SectionThree = ({ visibleIndex, setVisibleIndex, sectionsRef }) => {
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section>
            <h2 className="text-2xl mb-2">Join Our Community</h2>
            <p className="mx-4 mb-6 text-slate-300 font-semibold">
                Become part of a vibrant community where you can share, learn, and
                connect with others who value open communication.
            </p>
            <div className="flex flex-col gap-6 w-full max-w-screen-xl mx-auto md:flex-row md:justify-center">
                {[
                    {
                        title: "Engage with Others",
                        description:
                            "Participate in discussions that matter to you and share your insights."
                    },
                    {
                        title: "Safe Environment",
                        description:
                            "We prioritize your safety and privacy in every interaction."
                    },
                    {
                        title: "Events and Workshops",
                        description:
                            "Join us for exclusive events that promote growth and understanding."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        data-index={index + 3} // Adjust index for the second set of items
                        ref={el => (sectionsRef.current[index + 3] = el)} // Adjust ref index
                        className="w-full max-w-[18rem] py-4 rounded-xl bg-[#111] flex text-left p-3 px-5 items-center justify-center mx-auto"
                        variants={boxVariants}
                        initial="hidden"
                        animate={visibleIndex[index + 3] ? "visible" : "hidden"}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: (index + 3) * 0.1
                        }}
                    >
                        <div className="text-left px-4 py-11">
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

export default SectionThree;
