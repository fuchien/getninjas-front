import renderRequestFields from './request-fields/request-fields';

const createForm = (data) => {
    let form = (
        `
            <div>${renderRequestFields(data._embedded.request_fields)}</div>
        `
    )
}

export default function renderForm(data, element) {
    createForm(data)
    console.log(data);
}