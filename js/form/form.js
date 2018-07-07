import renderRequestFields from './request-fields/request-fields';

const createForm = (data) => {
    let form = (
        `
            <div class="form__request">
                ${renderRequestFields(data._embedded.request_fields)}
            </div>
        `
    )
}

export default function renderForm(data, element) {
    console.log(data);
    const form = createForm(data);
    element.innerHTML = form;
}