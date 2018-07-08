import renderTab from './tab/tab';


export default function renderTabs(emitter, tabs) {
    
    return tabs.map(tab => 
        `
            ${renderTab(tab)}
        `
    ).join('')

}