
import renderButton from '../form/button/button';
import renderRequestFields from './request-fields/request-fields';
import renderTabs from './tabs/tabs';
import renderUserFields from './users-fields/users-fields';

const EventEmitter = require('events');
const emitter = new EventEmitter();

const createForm = (data) => {

    let tabs = [`1. Seu pedido`, `2. Seus dados`];

    emitter.on(`searchProfessional`, (field, fieldNumber) => {
        console.log(`CLICOU searchProfessional`)
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" block", " none")
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(field).className = document.getElementById(field).className.replace(" none", " block")
        document.getElementById(fieldNumber).className += " active"
    })
    
    let form = (
        `
            <div id="request_fields" class="form__request block tabcontent">
                ${renderRequestFields(data._embedded.request_fields)}
                ${renderButton(`BUSCAR PROFISSIONAIS`, emitter, `searchProfessional`, `users_fields`, 1)}
            </div>
            <div id="users_fields" class="form__users none tabcontent">
                ${renderUserFields(data._embedded.user_fields)}
            </div>
            <div class="form__tabs">${renderTabs(emitter, tabs)}</div>
        `
    )

    return form
}

export default function renderForm(data, element) {
    console.log(data);
    const form = createForm(data);
    element.innerHTML = form;
}