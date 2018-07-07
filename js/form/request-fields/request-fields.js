
export default function renderRequestFields(requestFields) {
    console.log(requestFields)
    return requestFields.map(requestField => 
        `<div>
            <h4>${requestField.name}</h4>
        </div>`
    ).join('');
}