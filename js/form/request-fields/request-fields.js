
export default function renderRequestFields(requestFields) {
    let fields = requestFields.map(requestField => {
        return `<div>
            <h4>${requestField.name}</h4>
        </div>`
    }).join('');

    return fields
}