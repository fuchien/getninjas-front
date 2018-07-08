import createSelects from './select/select';
import createTextArea from './text-area/text-area';

export default function renderRequestFields(requestFields) {
    let fields = requestFields.map(requestField => {
        let selects = [];
        for (let key in requestField.values) {
            if (Object.getOwnPropertyNames(key)) selects.push(requestField.values[key]);
        }

        return `<div>
            <h4>${requestField.name}</h4>
            ${selects.length ? createSelects({selects, required: requestField.required}) : createTextArea(requestField.placeholder)}

        </div>`
    }).join('');

    return fields;
}