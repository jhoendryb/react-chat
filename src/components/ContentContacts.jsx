import { contacts } from "../mocks/contacts.json";
import { messages } from "../mocks/messages.json";
import { useMessage } from "../hooks/useMessage";
import { Contact } from "./Contact";

export function ContentContacts({ searchContact, handleClickViewToggle }) {

    const { lastMessage } = useMessage();
    
    return (
        <div className="ch-menu-contacts">
            <ul className="ch-menu-contact-items ui-scroll">
                {
                    contacts.slice(0, 4).map(contact => {
                        const searchIndex = contact.name.toLowerCase().indexOf(searchContact.toLowerCase());
                        if (searchIndex !== -1 && contact.id != 1) {
                            const msg = lastMessage({ messages, contact });
                            let newContact = { ...contact };

                            if (msg.length > 0) {
                                newContact.lastMessage = msg[(msg.length - 1)];
                            }

                            return (
                                <Contact
                                    key={contact.id}
                                    contact={newContact}
                                    handleClickViewToggle={handleClickViewToggle}
                                    infoUser={{ ...contacts[0] }}
                                />
                            )
                        }
                    })
                }
            </ul>
        </div>
    );
}