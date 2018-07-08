

export default function renderUserField(userField) {

    let inputType = userField.type.toLowerCase() === 'email' ? 'email' :
                    userField.type.toLowerCase() === 'cep' ? 'number' :
                    userField.type.toLowerCase() === 'phone' ? 'number' :
                    'text'

    return (
        `
        <div class="form__group">
            <label for="${userField.name}">${userField.label}</label>
            <input type="${inputType}" id="${userField.name}" class="form__input" placeholder="${userField.placeholder}" required>
        </div>
        `
    )
}