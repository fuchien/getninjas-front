

export default function renderUserField(user) {

    let inputType = user.userField.type.toLowerCase() === 'email' ? 'email' :
                    user.userField.type.toLowerCase() === 'cep' ? 'number' :
                    user.userField.type.toLowerCase() === 'phone' ? 'number' :
                    'text';

    return (
        `
        <div class="form__group">
            <label for="${user.userField.name}">${user.userField.label}</label>
            <input type="${inputType}" id="${user.userField.name}"style="width: ${user.index === 0 || user.index === 3 ? '40%' : '100%'}"
                class="form__input" placeholder="${user.userField.placeholder}" required>
        </div>
        `
    )
}