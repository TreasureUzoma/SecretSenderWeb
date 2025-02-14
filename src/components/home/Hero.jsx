import { motion } from 'framer-motion';

const Hero = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <header className="h-[90vh] mt-[5.1rem] flex justify-center items-center text-center px-10 md:h-[790px] relative overflow-hidden bg-black md:mt-0">
            <div className="my_fixed_width_2">
                <motion.h1 
                    className="text-4xl md:text-5xl font-[800] my-2"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    Ask me anything (
                    <span className="text-[#DA0037]">literally</span>)
                </motion.h1>
                
                <motion.p 
                    className="text-[1.08rem] my-2 text-neutral-400"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.3 }} // delay for the paragraph
                >
                    Ask anonymously, get weirdly honest answers, and uncover
                    unexpected truths.
                </motion.p>
                
                <motion.a 
                    href="https://secretsenderapp.vercel.app"
                    target="_blank"
                    className="inline-flex items-center justify-between bg-[#DA0037] px-5 py-3 rounded-3xl text-[0.85rem] font-bold w-[8rem] text-white my-7 transition-transform duration-300 hover:scale-105"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5, delay: 0.6 }} // delay for the button
                >
                    <span>Start Now</span>
                    <span className="material-icons text-[1rem]" alt="">
                        arrow_forward
                    </span>
                </motion.a>
            </div>
            <div className="absolute top-0 left-0 h-full w-full md:bg-gradient-to-l from-[#DA0037] to-black opacity-30 pointer-events-none animate-gradient" />
        </header>
    );
};

export default Hero;
