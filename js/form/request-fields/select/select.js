export default function createSelects(selects) {
    console.log(selects)
    return selects.map(select =>
        `<option value="${select}">${select}</option>`
    ).join('');
}