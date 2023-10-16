export function MessageText({ newMssage }) {

    const { message, dataTime } = newMssage;

    return (
        <div className="ch-message ">
            <span>{message}</span>
            <p className="ch-message-time">
                {dataTime.time} <i className="fa fa-check-double"></i>
            </p>
        </div>
    )
}

export function MessageMedia({ newMssage }) {

    const { message, dataTime } = newMssage;

    return (
        <div className="ch-message">
            <span>
                <a
                    className="container-file"
                    href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/Lineamientos-Tecnicos-para-IPS.pdf"
                >
                    <ul className="file-list">
                        <li className="file-list-item">
                            <div className="file-details">
                                <img
                                    className="file-icon"
                                    src="https://unavatar.io/uwu"
                                    alt="Archivo 1"
                                />
                                <span className="file-name">archivo.pdf</span>
                                <span className="file-link-download">
                                    <i className="fa fa-download"></i>
                                </span>
                            </div>
                        </li>
                    </ul>
                </a>
            </span>
            <p className="ch-message-time">
                {dataTime.time} <i className="fa fa-check-double"></i>
            </p>
        </div>
    )
}