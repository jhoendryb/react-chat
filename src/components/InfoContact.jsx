export function InfoContact({ handleClickViewToggle, infoContactos }) {
    // console.log(infoContactos);
    return (
        <header className="ch-card-info-contact">
            <ul className="ch-body-info">
                <li
                    className="ch-body-item-icon ch-toggle-view"
                    onClick={handleClickViewToggle}
                >
                    <i className="fa fa-arrow-left"></i>
                </li>
                <li className="ch-body-item-img">
                    <img src={infoContactos.receptor?.image.perfil} alt={infoContactos.receptor?.name} />
                </li>
                <li className="ch-body-item-title">
                    <span>{infoContactos.receptor?.name}</span>
                    {/* <span>Jhoendry, Jose, Saul, Iran, Ricardo</span> */}
                    <span>En Linea</span>
                </li>
                <li className="ch-body-item-icon">
                    <i className="fa fa-circle"></i>
                </li>
                <li className="ch-body-item-icon">
                    <i className="fa fa-circle"></i>
                </li>
            </ul>
        </header>
    )
}