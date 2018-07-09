import renderTab from './tab/tab';


export default function renderTabs(tabs) {
    
    return tabs.map((tab, index) => 
        `
            ${renderTab({tab, index})}
        `
    ).join('');

}