
import renderButton from '../form/button/button';
// import Button from '../form/button/button';
import renderRequestFields from './request-fields/request-fields';
import renderTabs from './tabs/tabs';
import renderUserFields from './users-fields/users-fields';

const EventEmitter = require('events');
const emitter = new EventEmitter();
let canOpen = false;
window.canOpen = canOpen;

const createForm = (data) => {

    let tabs = [
        {tabName: `1. Seu pedido`, tabContent: `requests`},
        {tabName: `2. Seus dados`, tabContent: `datas`, canOpen: false}
    ];

    emitter.on(`searchProfessional`, (fieldData) => {
        console.log(`CLICOU searchProfessional`, fieldData)
        canOpen = true;
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" block", " none")
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(fieldData.openFieldTab).className = document.getElementById(fieldData.openFieldTab).className.replace(" none", " block")
        document.getElementById(fieldData.openFieldContent).className += " active"
    })

    emitter.on(`finished`, (fieldData) => {
        console.log(`CLICOU finished`)
    })
    
    let form = (
        `
            <div id="request_fields" class="form__request block tabcontent">
                ${renderRequestFields(data._embedded.request_fields)}
                ${renderButton({
                    message: `BUSCAR PROFISSIONAIS`, emitter: emitter, emitterName: `searchProfessional`, openFieldTab: `users_fields`, openFieldContent: `datas`
                })}
            </div>
            <div id="users_fields" class="form__users none tabcontent">
                ${renderUserFields(data._embedded.user_fields)}
                ${canOpen ? renderButton({
                    message: `FINALIZAR`, emitter: emitter, emitterName: `finished`, openFieldTab: ``, openFieldContent: ``
                }) : null}
            </div>
            ${canOpen}
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