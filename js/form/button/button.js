

const buttonCliked = (msg) => {
    alert(msg)
}

window.buttonCliked = buttonCliked

export default function renderButton(message, emitter, emitterName) {

    return (
        `
            <button onClick="buttonCliked('haha')">${message}</button>
        `
    )
}