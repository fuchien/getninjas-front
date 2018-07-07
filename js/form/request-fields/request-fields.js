import createSelects from './select/select';

export default function renderRequestFields(requestFields) {
    let fields = requestFields.map(requestField => {
        let selects = [];
        for (let key in requestField.values) {
            if (Object.getOwnPropertyNames(key)) selects.push(requestField.values[key]);
        }

        return `<div>
            <h4>${requestField.name}</h4>
            <select>${createSelects(selects)}</select>
        </div>`
    }).join('');

    return fields;
}