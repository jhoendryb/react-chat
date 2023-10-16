export function ContentSendMessage() {
    return (
        <footer className="ch-footer-content-send">
            <ul className="ch-msag-send-items">
                <li className="ch-msag-send-item ch-msag-message">
                    <div className="whatsapp-input-container">
                        <i className="fa fa-smile ch-msag-icon ch-msag-icon-emoji"></i>
                        <div
                            className="whatsapp-input ui-scroll"
                            contentEditable="true"
                            placeholder="Escribe tu mensaje..."
                        ></div>
                        <i className="fa fa-paperclip ch-msag-icon ch-msag-icon-document"></i>
                    </div>
                </li>
                <li className="ch-msag-send-item ch-msag-send">
                    <i className="fa fa-paper-plane"></i>
                </li>
            </ul>
        </footer>
    )
}

// export function ContentSendMessage() {
//     return (
//         <footer className="ch-footer-content-send">
//             <ul className="ch-msag-send-items">
//                 <li className="ch-msag-send-item ch-msag-emoticons">
//                     <i className="fa fa-smile"></i>
//                 </li>
//                 <li className="ch-msag-send-item ch-msag-sub-menu">
//                     <i className="fa fa-plus"></i>
//                 </li>
//                 <li className="ch-msag-send-item ch-msag-message">
//                     <div className="whatsapp-input-container">
//                         <div
//                             className="whatsapp-input ui-scroll"
//                             contentEditable="true"
//                             placeholder="Escribe tu mensaje..."
//                         ></div>
//                     </div>
//                 </li>
//                 <li className="ch-msag-send-item ch-msag-send">
//                     <i className="fa fa-paper-plane"></i>
//                 </li>
//             </ul>
//         </footer>
//     )
// }