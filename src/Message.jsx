import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import {
    db,
    ref,
    get,
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    doc,
    analytics
} from "./utility/firebaseConfig";
import CustomAlert, {
    showCustomAlert,
    closeCustomAlert
} from "./components/app/CustomAlert";

const Message = () => {
    const [loading, setLoading] = useState(true);
    const [userExists, setUserExists] = useState(false);
    const [userUID, setUserUID] = useState(false);
    const [messageTitle, setMessageTitle] = useState(false);
    const [messageContent, setMessageContent] = useState("");
    const [picUrl, setPicUrl] = useState("");
    const [error, setError] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const pageUrl = window.location.href;
    const pathSegments = pageUrl.split("/");
    let username = pathSegments[pathSegments.length - 1].toLowerCase();
    username = username.split("?")[0];

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const messageRegex = /\S/; // At least one non-whitespace character

    useEffect(() => {
        if (usernameRegex.test(username)) {
            handleUsernameCheck();
        } else {
            setLoading(false);
            setUserExists(false);
        }
    }, [username]);

    const handleUsernameCheck = async () => {
        try {
            const usernameRef = ref(db, `usernames/${username}`);
            const usernameSnapshot = await get(usernameRef);

            if (usernameSnapshot.exists()) {
                const userId = usernameSnapshot.val().userId;
                setUserUID(userId);
                const userRef = ref(db, `users/${userId}`);
                get(userRef).then(snapshot => {
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        setMessageTitle(userData.defaultMsgTitle);
                        setPicUrl((userData.profilePicUrl) || 'https://secretsenderapp.vercel.app/images/Portrait_Placeholder.png');
                    }
                });
                setUserExists(true);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleMessageChange = e => {
        setMessageContent(e.target.value);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        if (messageRegex.test(messageContent)) {
            setSubmitting(true);
            try {
                const messageData = {
                    title: messageTitle,
                    date: serverTimestamp(),
                    seen: false,
                    opened: false,
                    message: messageContent
                };
                const docRef = doc(firestore, "AllMessages", userUID);
                const subcollectionRef = collection(docRef, "theMessages");
                await addDoc(subcollectionRef, messageData);
                setMessageContent("");
                showCustomAlert("Success", "Message sent successfully 🔥");
            } catch (error) {
                showCustomAlert("Error", `Something went wrong! ${error} 😞`);
            } finally {
                setSubmitting(false);
            }
        } else {
            showCustomAlert("Empty Message", "Can’t send empty message 😑");
        }
    };

    if (loading) {
        return (
            <div className="loading-div min-h-screen bg-gradient-to-135 opacity-85 flex items-center text-center">
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
            <div className="p-5 bg-gradient-to-135 opacity-85 w-full flex justify-center text-center min-h-screen md:items-center">
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
                                        className="w-[2.5rem] rounded-full"
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
