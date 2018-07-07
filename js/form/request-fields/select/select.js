export default function createSelects(selects) {
    
    let options = selects.map(select =>
        `
            <option value="${select}">${select}</option>
        `
    ).join('');
    return (
        `
            <select>
                ${options}
            </select>
        `
    )
}