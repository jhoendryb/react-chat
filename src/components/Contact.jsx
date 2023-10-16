export function Contact({ contact, handleClickViewToggle, infoUser }) {

    const { lastMessage, ...newContact } = contact;

    const infoContactos = {
        emisor: { ...infoUser },
        receptor: { ...newContact }
    };

    return (
        <li
            className="ch-menu-contact-item ch-toggle-view"
            onClick={(event) => handleClickViewToggle({ event, infoContactos })}
        >
            <span className="ch-menu-contact-avatar">
                <img src={newContact.image.avatar} alt={newContact.name} />
            </span>
            <ul className="ch-menu-contact-info">
                <li className="ch-contact-title-date">
                    <div className="ch-contact-card-title">
                        <span>{newContact.name}</span>
                    </div>
                    <div className="ch-contact-card-date">
                        <span>{(lastMessage?.dataTime.time ?? '')}</span>
                    </div>
                </li>
                <li className="ch-contact-preview-notification">
                    <div className="ch-contact-card-preview">
                        <span>
                            <i className="fa fa-check text-default"></i>
                            {(lastMessage?.emisor == infoUser.id ? `Tu: ${lastMessage?.message}` : (lastMessage?.message ?? 'Sin mensajes'))}
                        </span>
                    </div>
                    <ul className="ch-contact-card-notification">
                        <li className="ch-contact-card-notification-item">
                            <i className="fa fa-circle text-success"></i>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    )
}