

export default function renderButton(message, emitter, emitterName, field, fieldNumber) {

    const buttonCliked = () => {
        emitter.emit(emitterName, field, fieldNumber)
    }
    
    window.buttonCliked = buttonCliked

    return (
        `
            <button onClick="buttonCliked()">${message}</button>
        `
    )
}