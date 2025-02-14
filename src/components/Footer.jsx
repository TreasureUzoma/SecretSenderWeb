import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full mt-7 py-9 px-5 text-center font-bold text-lg bg-black">
            <div>
                <p className="text-2xl my-4 mb-6">SecretSender</p>
                <div className="grid place-items-center grid-cols-2 gap-4 my-8 md:grid-cols-4 md:gap-x-2">
                    <Link to="/about" className="underline">
                        About
                    </Link>
                    <a href="mailto: codebytehq@gmail.com" className="underline">
                        Contact
                    </a>
                    <a target="_blank" href="https://yosendfunds.vercel.app" className="underline">
                        Support
                    </a>
                    <a target="_blank" href="https://treasureuzoma.vercel.app" className="underline">
                        Developers
                    </a>
                </div>
                <a className="my-6 block" href="mailto: codebytehq@gmail.com">
                    codebytehq@gmail.com
                </a>
                <div className="grid place-items-center grid-cols-2 gap-4 my-8">
                    <Link to="/privacy" className="underline">
                        Privacy
                    </Link>
                    <Link to="/terms" className="underline">
                        Terms
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <p>Made with love in Lagos ❤️</p>
            </div>
        </footer>
    );
};
export default Footer;
