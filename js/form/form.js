import renderRequestFields from './request-fields/request-fields';
import renderButton, { buttonCliked } from '../form/button/button';
import renderTabs from './tabs/tabs';

const EventEmitter = require('events');
const emitter = new EventEmitter();

const createForm = (data) => {

    emitter.on(`searchProfessional`, () => {
        console.log(`CLICOU searchProfessional`)
        let i, tabcontent, tablinks;
        // tabcontent = document.getElementsByClassName("tabcontent");
        // for (i = 0; i < tabcontent.length; i++) {
        //     tabcontent[i].style.display = "none";
        // }
        // tablinks = document.getElementsByClassName("tablinks");
        // for (i = 0; i < tablinks.length; i++) {
        //     tablinks[i].className = tablinks[i].className.replace(" active", "");
        // }
        // document.getElementById('users_fields').style.display = "block";
        // document.getElementById('1').className += " active"
    })

    let tabs = [`1. Seu pedido`, `2. Seus dados`];
    
    let form = (
        `
            <div id="request_fields" class="form__request tabcontent">
                ${renderRequestFields(data._embedded.request_fields)}
                ${renderButton(`BUSCAR PROFISSIONAIS`, emitter, `searchProfessional`)}
            </div>
            <div id="users_fields" class="form__users tabcontent">
                <p>TESTE</p>
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