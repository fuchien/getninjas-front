

export default function renderButton(message, emitter, emitterName) {

    const buttonCliked = () => {
        emitter.emit(emitterName)
    }
    
    window.buttonCliked = buttonCliked

    return (
        `
            <button onClick="buttonCliked()">${message}</button>
        `
    )
}