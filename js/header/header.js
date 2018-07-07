
const createHeader = () => {
    return (
        `
            <h1>Explique o que você precisa</h1>
            <h4>Peça orçamento grátis, online!</h4>
        `
    );
}

export default function renderHeader(element) {
    const header = createHeader();
    element.innerHTML = header;
}