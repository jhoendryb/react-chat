
import { useFunctions } from "./../hooks/UseFunction";
import { Search } from "./Search";
import { ContentContacts } from "./ContentContacts";
import { InfoContact } from "./InfoContact";
import { ContentMessage } from "./ContentMessage";
import { ContentSendMessage } from "./ContentSendMessage";
import { MenuUser } from "./MenuUser";

export function Chat() {

    const {
        clearSearch,
        showToggle,
        handleClickClearSearch,
        handleClickViewToggle,
        searchContact,
        contentView,
        infoContactos
    } = useFunctions();

    return (
        <main className="ch-container">
            <section className={`ch-container-menu ${contentView}`}>
                <MenuUser />
                <Search clearSearch={clearSearch} showToggle={showToggle} handleClickClearSearch={handleClickClearSearch} />
                <ContentContacts searchContact={searchContact} handleClickViewToggle={handleClickViewToggle} />
            </section>
            <section className="ch-container-message">
                {Object.keys(infoContactos).length > 0 ?
                    <>
                        <InfoContact handleClickViewToggle={handleClickViewToggle} infoContactos={infoContactos} />
                        <ContentMessage infoContactos={infoContactos} />
                        <ContentSendMessage />
                    </>
                    : ''}
            </section>
        </main>
    )
}