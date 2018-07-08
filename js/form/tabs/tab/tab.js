

export default function renderTab (formTab) {

    let active = formTab.index === 0 ? 'active' : '';

    return (
        `
            <button id="${formTab.tab.tabContent}" class="form__tab tablinks ${active}" disabled>${formTab.tab.tabName}</button>
        `
    )
}