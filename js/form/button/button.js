

export default function renderButton(options) {

    console.log(options)
    const buttonCliked = () => {
        options.emitter.emit(options.emitterName, {openFieldTab: options.openFieldTab, openFieldContent: options.openFieldContent})
    }
    
    window.buttonCliked = buttonCliked

    return (
        `
            <button onClick="buttonCliked()">${options.message}</button>
        `
    )
}

// export default class Button {

//      canOpen = false;

//     renderButton(options) {

//         console.log(options)
//         const buttonCliked = () => {
//             options.emitter.emit(options.emitterName, {openFieldTab: options.openFieldTab, openFieldContent: options.openFieldContent})
//         }
        
//         window.buttonCliked = buttonCliked
    
//         return (
//             `
//                 <button onClick="buttonCliked()">${options.message}</button>
//             `
//         )
//     }

// }
