

export default function renderUserField(userField) {

    return (
        `
        <div class="form-group">
            <label for="${userField.name}">${userField.label}</label>
            <input type="text" id="${userField.name}" placeholder="${userField.placeholder}" required>
        </div>
        `
    )
}