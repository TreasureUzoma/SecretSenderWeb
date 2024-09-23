import { Link } from "react-router-dom";

const HomeMain = () => {
    return (
        <main className="text-center font-bold p-5">
            <section>
                <h1 className="text-2xl mx-4 my-3 mb-6 md:mx-7">
                    Experience the power of anonymous messages.
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                        <div key={index} className="w-full max-w-[18.5rem] h-[18rem] py-4 rounded-xl bg-[#2c2c2c] flex text-left px-7 items-center justify-center mx-auto">
                            <div className="text-left">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="font-normal mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="flex items-center justify-center my-10 md:my-12">
                    <div className="bg-red-700 rounded-2xl w-full p-5">
                        <h2 className="text-lg">Easy, Secure, Anonymous</h2>
                        <p className="my-4">
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
            <section className="my-8">
                <h2 className="text-xl mb-4">Join Our Community</h2>
                <p className="mx-4 mb-6 text-slate-300 font-semibold">
                    Become part of a vibrant community where you can share, learn, and connect with others who value open communication.
                </p>
                <div className="flex flex-col gap-6 md:flex-row md:justify-center">
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
                        <div key={index} className="w-full max-w-[18rem] py-4 rounded-xl bg-[#2c2c2c] flex text-left p-3 px-5 items-center justify-center mx-auto">
                            <div className="text-left px-4 py-6">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="font-normal mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomeMain;
