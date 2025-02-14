const Cta = () => {
    return (
        <section className="my-[7rem]">
            <div className="px-6 my-12 mx-auto text-center">
                <h2 className="font-bold text-2xl">
                    Join the party!
                </h2>
                <a
                    href="https://secretsenderapp.vercel.app"
                    target="_blank"
                    className="inline-flex items-center justify-between bg-[#DA0037] px-5 py-3 rounded-3xl text-[0.85rem] font-bold w-[9rem] text-white my-7 transition-transform duration-300 hover:scale-105"
                >
                    <span>Sign Up Now</span>
                    <span className="material-icons text-[1rem]" alt="">
                        arrow_forward
                    </span>
                </a>
            </div>
        </section>
    );
};
export default Cta;
