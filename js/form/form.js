import renderRequestFields from './request-fields/request-fields';
import renderButton from '../form/button/button';
import renderTabs from './tabs/tabs';

const EventEmitter = require('events');
const emitter = new EventEmitter();

const createForm = (data) => {

    emitter.on(`searchProfessional`, () => {
        console.log(`CLICOU searchProfessional`)
    })

    let tabs = [`1. Seu pedido`, `2. Seus dados`];
    
    let form = (
        `
            <div class="form__request">
                ${renderRequestFields(data._embedded.request_fields)}
                ${renderButton(`BUSCAR PROFISSIONAIS`, emitter, `searchProfessional`)}
                <div class="form__tabs">${renderTabs(emitter, tabs)}</div>
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