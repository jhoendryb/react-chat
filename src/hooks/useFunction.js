import { useState } from "react";

export function useFunctions() {
    const [searchContact, setSearchContact] = useState('');
    const [clearSearch, setClearSearch] = useState(false);
    const [input, setInput] = useState(null);
    const [contentView, setContentView] = useState("active");
    const [infoContactos, setInfoContactos] = useState({});

    const showToggle = function (event) {
        if (event) setInput(event);

        const element = (input ?? event);

        if (element.target.textContent.trim() !== "") {
            setClearSearch(true);
        } else {
            setClearSearch(false);
        }

        setSearchContact(element.target.textContent.trim());
    };

    const handleClickClearSearch = function () {
        input.target.textContent = "";
        showToggle();
    };

    const handleClickViewToggle = function ({ infoContactos }) {
        if (typeof infoContactos !== "undefined") setInfoContactos(infoContactos);

        setContentView((prevState) => (prevState == "active" ? "" : "active"));
    };

    return {
        clearSearch,
        input,
        showToggle,
        handleClickClearSearch,
        handleClickViewToggle,
        searchContact,
        contentView,
        infoContactos
    };
}