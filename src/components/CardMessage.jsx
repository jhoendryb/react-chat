export function CardMessageEmisor({ children }) {
    return (
        <li className="ch-message-emisor">
            {children}
        </li>
    )
}

export function CardMessageReceptor({ children }) {
    return (
        <li className="ch-message-receptor">
            {children}
        </li>
    )
}