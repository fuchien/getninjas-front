

export default function renderTab (message, index) {
    return (
        `
            <button id="${index}" class="form__tab tablinks">${message}</button>
        `
    )
}