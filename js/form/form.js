import renderRequestFields from './request-fields/request-fields';
import createButton from '../form/button/button';

const createForm = (data) => {
    let form = (
        `
            <div class="form__request">
                ${renderRequestFields(data._embedded.request_fields)}
                ${createButton(`BUSCAR PROFISSIONAIS`)}
            </div>
        `
    )

    return form
}

export default function renderForm(data, element) {
    console.log(data);
    const form = createForm(data);
    element.innerHTML = form;
}