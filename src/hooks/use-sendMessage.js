import { useState, useEffect } from 'react';
import { db, ref, get, firestore, collection, addDoc, serverTimestamp, doc } from '../utility/firebaseConfig';
import { showCustomAlert } from '../components/app/CustomAlert';

const useMessage = (username) => {
    const [state, setState] = useState({
        loading: true,
        userExists: false,
        userUID: null,
        messageTitle: '',
        messageContent: '',
        picUrl: '',
        error: false,
        submitting: false,
    });

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const messageRegex = /\S/; // At least one non-whitespace character

    useEffect(() => {
        if (usernameRegex.test(username)) {
            handleUsernameCheck();
        } else {
            setState(prevState => ({ ...prevState, loading: false, userExists: false }));
        }
    }, [username]);

    const handleUsernameCheck = async () => {
        try {
            const usernameRef = ref(db, `usernames/${username}`);
            const usernameSnapshot = await get(usernameRef);

            if (usernameSnapshot.exists()) {
                const userId = usernameSnapshot.val().userId;
                setState(prevState => ({ ...prevState, userUID: userId }));
                const userRef = ref(db, `users/${userId}`);
                const userSnapshot = await get(userRef);
                if (userSnapshot.exists()) {
                    const userData = userSnapshot.val();
                    setState(prevState => ({
                        ...prevState,
                        userExists: true,
                        messageTitle: userData.defaultMsgTitle,
                        picUrl: userData.profilePicUrl || 'https://secretsenderapp.vercel.app/images/Portrait_Placeholder.png',
                    }));
                }
            } else {
                setState(prevState => ({ ...prevState, error: true }));
            }
        } catch (error) {
            setState(prevState => ({ ...prevState, error: true }));
        } finally {
            setState(prevState => ({ ...prevState, loading: false }));
        }
    };

    const handleMessageChange = (e) => {
        setState(prevState => ({ ...prevState, messageContent: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { messageContent, userUID, messageTitle } = state;

        if (messageRegex.test(messageContent)) {
            setState(prevState => ({ ...prevState, submitting: true }));
            try {
                const messageData = {
                    title: messageTitle,
                    date: serverTimestamp(),
                    seen: false,
                    opened: false,
                    message: messageContent,
                };
                const docRef = doc(firestore, 'AllMessages', userUID);
                const subcollectionRef = collection(docRef, 'theMessages');
                await addDoc(subcollectionRef, messageData);
                setState(prevState => ({ ...prevState, messageContent: '' }));
                showCustomAlert('Success', 'Message sent successfully 🔥');
            } catch (error) {
                showCustomAlert('Error', `Something went wrong! ${error} 😞`);
            } finally {
                setState(prevState => ({ ...prevState, submitting: false }));
            }
        } else {
            showCustomAlert('Empty Message', 'Can’t send empty message 😑');
        }
    };

    return {
        state,
        handleMessageChange,
        handleSubmit,
    };
};

export default useMessage;
