

export function renderButtonFinished(options) {

    const buttonFinished = () => {
        options.emitter.emit(options.emitterName, {openFieldTab: options.openFieldTab, openFieldContent: options.openFieldContent});
    }
    
    window.buttonFinished = buttonFinished;

    return (
        `
            <button onClick="buttonFinished()">${options.message}</button>
        `
    )
}


export function renderButtonSearch(options) {

    const buttonSearch = (event) => {
        event.preventDefault();
        options.emitter.emit(options.emitterName, {openFieldTab: options.openFieldTab, openFieldContent: options.openFieldContent});
    }
    
    window.buttonSearch = buttonSearch;

    return (
        `
            <button onClick="buttonSearch(event)">${options.message}</button>
        `
    )
}

