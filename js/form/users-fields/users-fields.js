

export default function renderUserFields(userFields) {
    let fields = userFields.map(userField => {

        return (
            `
                <p>${userField.name}</p>
            `
        )
    }).join('');

    return fields;
}