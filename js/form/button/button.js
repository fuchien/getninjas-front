


export default function createButton(message, emitter, emitterName) {

    document.addEventListener('click', function () {
        emitter.emit(emitterName)
    });

    return (
        `
            <button>${message}</button>
        `
    )
}