export function Search({ showToggle, handleClickClearSearch, clearSearch }) {
    return (
        <div className="ch-menu-search">
            <div className="ch-menu-search-content">
                <div className="ch-menu-search-container">
                    <div className="ch-menu-search-icon">
                        <i className="fa fa-search"></i>
                    </div>
                    <div
                        onInput={showToggle}
                        className="ch-menu-search-input"
                        contentEditable="true"
                    ></div>
                    <div
                        onClick={handleClickClearSearch}
                        className="ch-menu-search-clear-icon"
                        style={
                            { display: (clearSearch ? 'block' : 'none') }
                        }
                    >
                        &#10006;
                    </div>
                </div>
            </div>
            <div className="ch-menu-filter-contact">
                <i className="fa fa-filter"></i>
            </div>
        </div>
    )
}