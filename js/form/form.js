import renderRequestFields from './request-fields/request-fields';
import createButton from '../form/button/button';

const EventEmitter = require('events');
const emitter = new EventEmitter();

const createForm = (data) => {

    emitter.on(`searchProfessional`, () => {
        console.log(`CLICOU searchProfessional`)
    })
    
    let form = (
        `
            <div class="form__request">
                ${renderRequestFields(data._embedded.request_fields)}
                ${createButton(`BUSCAR PROFISSIONAIS`, emitter, `searchProfessional`)}
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