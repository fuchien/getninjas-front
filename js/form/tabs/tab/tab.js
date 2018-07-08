

export default function renderTab (message, index) {

    let active = index === 0 ? 'active' : '';

    return (
        `
            <button id="${index}" class="form__tab tablinks ${active}">${message}</button>
        `
    )
}