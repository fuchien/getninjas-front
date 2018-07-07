

const createRequestFieldsForm = (data) => {
    let requestFields = `

    `

    return requestFields
}

export default function renderRequestFields(data, element) {
    const requestFields = createRequestFieldsForm(data);
    element.innerHTML = requestFields;
}