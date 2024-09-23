import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="absolute left-0 right-0 p-5 text-center font-bold text-lg bg-black">
            <div>
                <p className="text-2xl my-4 mb-6">SecretSender</p>
                <div className="grid place-items-center grid-cols-2 gap-4 my-8 md:grid-cols-4 md:gap-x-2">
                    <Link to="/about" className="underline">
                        About
                    </Link>
                    <Link to="/contact" className="underline">
                        Contact
                    </Link>
                    <Link to="/support" className="underline">
                        Support
                    </Link>
                    <Link to="/developers" className="underline">
                        Developers
                    </Link>
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
