import renderUserField from './user-field/user-field';

export default function renderUserFields(userFields) {
    let fields = userFields.map((userField, index) => {

        return (
            `
                ${renderUserField({userField, index})}
            `
        )
    }).join('');

    return fields;
}