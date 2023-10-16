import { useState } from "react";

export function useMessage() {
    const [messages, setMessages] = useState({});
    const [receptor, setReceptor] = useState(0);

    const lastMessage = ({ messages, contact }) => {
        const message = messages.map((msg) => {
            if (msg.emisor == 1 && msg.receptor == contact.id) {
                return msg;
            }
            if (msg.receptor == 1 && msg.emisor == contact.id) {
                return msg;
            }
        });
        return message.filter((msg) => msg !== undefined);
    }

    return {
        lastMessage,
        messages,
        setMessages,
        receptor,
        setReceptor
    }
}