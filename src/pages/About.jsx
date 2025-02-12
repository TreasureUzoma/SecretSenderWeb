const About = () => {
    return (
        <>
            <main className="text-left mt-[5.4rem]">
                <header className="flex justify-center">
                    <div className="my_fixed_width p-2 pb-5 border-b border-slate-800">
                        <h1 className="text-3xl font-bold">About Us</h1>
                        <p className="my-4 font-bold">
                            Effective Date: September 25, 2024
                        </p>
                    </div>
                </header>
                <section className="text-left mt-[3rem] mb-4">
                    <div className="flex justify-center p-3">
                        <div className="my_fixed_width pb-5">
                            <h1 className="text-[1.3rem] font-bold">
                                Welcome to SecretSender
                            </h1>
                            <p className="my-2">
                                At SecretSender, we believe in the power of
                                anonymous communication. Our platform provides a
                                safe space for users to share their thoughts and
                                feelings without fear of judgment. We are
                                committed to creating an engaging and respectful
                                environment.
                            </p>
                            <h1 className="text-[1.3rem] font-bold mt-10">
                                Our Mission:
                            </h1>
                            <p className="my-2">
                                Our mission is to empower individuals by
                                facilitating honest and open conversations. We
                                strive to enhance user experience through
                                innovative features while ensuring privacy and
                                security.
                            </p>
                            <h1 className="text-[1.3rem] font-bold mt-10">
                                What We Offer:
                            </h1>
                            <p className="my-2">
                                SecretSender provides:
                                <ul className="list-disc ml-5">
                                    <li>
                                        A user-friendly platform for anonymous
                                        messaging
                                    </li>
                                    <li>
                                        Tools to express your thoughts freely
                                    </li>
                                    <li>
                                        A commitment to user privacy and
                                        security
                                    </li>
                                </ul>
                            </p>
                            <h1 className="text-[1.3rem] font-bold mt-10">
                                Our Values:
                            </h1>
                            <p className="my-2">
                                We value integrity, respect, and community. Our
                                team is dedicated to maintaining a platform that
                                promotes positive interactions and protects user
                                anonymity.
                            </p>
                            <h1 className="text-[1.3rem] font-bold mt-10">
                                Join Us:
                            </h1>
                            <p className="my-2">
                                We invite you to explore SecretSender and be
                                part of our growing community. Your feedback is
                                essential as we continue to improve and evolve
                                our platform.
                            </p>
                            <h1 className="text-[1.3rem] font-bold mt-10">
                                Contact Us:
                            </h1>
                            <p className="my-2">
                                If you have any questions or suggestions, feel
                                free to reach out to us at{" "}
                                <a
                                    className="font-bold underline"
                                    href="mailto: codebytehq@gmail.com"
                                >
                                    codebytehq@gmail.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;
