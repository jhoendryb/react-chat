import { messages } from "../mocks/messages.json";
import { useMessage } from "../hooks/useMessage";
import { CardMessageEmisor, CardMessageReceptor } from "./CardMessage";
import { MessageText, MessageMedia } from "./TypeMessage";
export function ContentMessage({ infoContactos }) {

    let contentMessages = {};
    const { lastMessage } = useMessage();

    if (Object.keys(infoContactos).length > 0) {
        contentMessages = lastMessage({ messages, contact: infoContactos.receptor });
    }

    const typeMessage = ({ msg }) => {
        const { type, ...newMssage } = msg;
        if (type == "text") {
            return (
                <MessageText newMssage={newMssage} />
            )
        }
        if (type == "media") {
            return (
                <MessageMedia newMssage={newMssage} />
            )
        }
    }

    return (
        <section className="ch-body-content-message">
            <ul className="ch-list-content-message ui-scroll">
                {
                    Object.keys(contentMessages).length > 0 && contentMessages.map(msg => {
                        if (infoContactos.emisor.id == msg.emisor) {
                            return (
                                <CardMessageEmisor key={msg.id} >
                                    {typeMessage({ msg })}
                                </CardMessageEmisor>
                            )
                        } else if (infoContactos.receptor.id == msg.emisor) {
                            return (
                                <CardMessageReceptor key={msg.id} >
                                    {typeMessage({ msg })}
                                </CardMessageReceptor>
                            )
                        }
                    })
                }
            </ul>
        </section>
    )
}