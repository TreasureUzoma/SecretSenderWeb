import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import CustomAlert, { closeCustomAlert } from "../components/app/CustomAlert";
import useMessage from "../hooks/use-sendMessage";

const Message = () => {
    const pageUrl = window.location.href;
    let username = pageUrl.split("/").pop().toLowerCase();
    username = username.split("?")[0];

    const { state, handleMessageChange, handleSubmit } = useMessage(username);

    const {
        loading,
        userExists,
        error,
        messageTitle,
        picUrl,
        messageContent,
        submitting
    } = state;

    useLayoutEffect(() => {
        document.body.style.background =
            "linear-gradient(135deg, #DA0037, #f97316)";
        document.body.style.opacity = "0.85";
    }, []); // Empty dependency array ensures it runs once after initial render

    if (loading) {
        return (
            <div className="loading-div min-h-screen flex items-center text-center">
                <div>
                    <svg
                        id="loader-anim"
                        className="spinner"
                        viewBox="0 0 50 50"
                    >
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="5"
                        ></circle>
                    </svg>
                </div>
            </div>
        );
    }

    if (error) {
        return <NotFound />;
    }

    if (userExists) {
        return (
            <div
                id="message-container"
                className="mt-12 p-5 w-full flex justify-center text-center min-h-screen md:items-center"
            >
                <div>
                    <form onSubmit={handleSubmit}>
                        <div
                            className="rounded-[2rem] mt-[2rem] w-[310px] my-3"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.4)"
                            }}
                        >
                            <div className="flex items-center text-black bg-white rounded-t-[2rem] space-x-3 text-left p-4">
                                <span>
                                    <img
                                        src={picUrl}
                                        className="w-[2.5rem] h-[2.5rem] rounded-full object-cover"
                                    />
                                </span>

                                <span className="inline-flex flex-col space-y-1 text-[0.9rem] py-3">
                                    <span className="leading-none">
                                        @{username}
                                    </span>
                                    <span className="leading-none font-semibold">
                                        {messageTitle}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <textarea
                                    className="bg-transparent w-full min-h-[145px] text-black max-h-[185px] outline-none border-none text-xl font-semibold py-3 px-4 placeholder-red-700"
                                    placeholder="send me anonymous messages..."
                                    value={messageContent}
                                    onChange={handleMessageChange}
                                />
                            </div>
                        </div>
                        <p className="text-sm">🔒 ask anonymously </p>
                        <button
                            className="rounded-[2rem] bg-black text-white p-5 font-bold w-full max-w-[300px] my-3 mb-6"
                            disabled={submitting}
                        >
                            {submitting ? "Sending..." : "Send ✌️"}
                        </button>
                    </form>
                    <Link
                        to="/signup"
                        className="rounded-[2rem] bg-black text-white block p-5 font-bold w-full max-w-[300px] mt-[4.5rem] my-3 animate__animated animate__jello"
                    >
                        Get your own messages!
                    </Link>
                    <div className="justify-center mt-3 flex space-x-6">
                        <a
                            className="text-sm text-slate-300"
                            href="https://secretsenderweb.vercel.app/privacy"
                        >
                            Privacy
                        </a>
                        <a
                            className="text-sm text-slate-300"
                            href="https://secretsenderweb.vercel.app/terms"
                        >
                            Terms
                        </a>
                    </div>
                </div>
                <CustomAlert
                    title="Alert"
                    message=""
                    onClose={closeCustomAlert}
                />
            </div>
        );
    }

    return <NotFound />;
};

export default Message;
