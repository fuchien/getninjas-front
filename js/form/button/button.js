


export default function createButton(message, emitter, emitterName) {

    onclick = () => {
        emitter.emit(emitterName)
    }

    return (
        `
            <button onclick="${onclick()}">${message}</button>
        `
    )
}