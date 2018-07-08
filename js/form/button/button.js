


export default function renderButton(message, emitter, emitterName) {

    const buttonClicked = () => {
        emitter.emit(emitterName)
    }

    return (
        `
            <button onclick="${() => buttonClicked()}">${message}</button>
        `
    )
}