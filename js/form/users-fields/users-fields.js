import renderUserField from './user-field/user-field';

export default function renderUserFields(userFields) {
    let fields = userFields.map(userField => {

        return (
            `
                ${renderUserField(userField)}
            `
        )
    }).join('');

    return fields;
}