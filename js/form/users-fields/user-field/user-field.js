

export default function renderUserField(userField) {

    return (
        `
        <div class="form__group">
            <label for="${userField.name}">${userField.label}</label>
            <input type="text" id="${userField.name}" class="form__input" placeholder="${userField.placeholder}" required>
        </div>
        `
    )
}