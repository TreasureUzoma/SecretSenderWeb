// /api/sendMessage.js
import { db, firestore, ref, get, addDoc, serverTimestamp, collection, doc } from "../../utility/firebaseConfig";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, messageContent } = req.body;

        if (!username || !messageContent) {
            return res.status(400).json({ error: "Username and message content are required" });
        }

        try {
            // Check if the user exists
            const usernameRef = ref(db, `usernames/${username}`);
            const usernameSnapshot = await get(usernameRef);

            if (usernameSnapshot.exists()) {
                const userId = usernameSnapshot.val().userId;
                
                // Save message to Firestore
                const messageData = {
                    title: "Default Title",  // You can customize this part
                    date: serverTimestamp(),
                    seen: false,
                    opened: false,
                    message: messageContent,
                };
                
                const docRef = doc(firestore, "AllMessages", userId);
                const subcollectionRef = collection(docRef, "theMessages");
                
                await addDoc(subcollectionRef, messageData);

                return res.status(200).json({ success: true, message: "Message sent successfully!" });
            } else {
                return res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            return res.status(500).json({ error: `Server error: ${error.message}` });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
