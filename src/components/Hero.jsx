const Hero = () => {
    return (
        <header className="h-[65vh] mt-[5.4rem] flex justify-center items-center text-center px-10 md:h-[750px] relative overflow-hidden bg-black">
            <div className="my_fixed_width_2">
                <h1 className="text-4xl font-[800] my-2">
                    Ask me anything (
                    <span className="text-[#DA0037] animate-pulse">
                        literally
                    </span>
                    )
                </h1>
                <p className="text-base my-2">
                    Ask anonymously, get weirdly honest answers, and uncover unexpected truths.
                </p>
                <a
                    href="#" target="_blank"
                    className="inline-flex items-center justify-between bg-[#DA0037] px-5 py-3 rounded-3xl text-[0.78rem] font-bold w-[8rem] text-black my-7 transition-transform duration-300 hover:scale-105"
                >
                    <span>Start Now</span>
                    <span className="material-icons text-[1rem]" alt="">
                        open_in_new
                    </span>
                </a>
            </div>
            <div className="absolute top-0 left-0 h-full w-full md:bg-gradient-to-l from-[#DA0037] to-black opacity-30 pointer-events-none animate-gradient" />
        </header>
    );
};

export default Hero;
