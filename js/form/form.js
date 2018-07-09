
import { renderButtonSearch, renderButtonFinished } from './button/button';
import renderRequestFields from './request-fields/request-fields';
import renderTabs from './tabs/tabs';
import renderUserFields from './users-fields/users-fields';

import { EventEmitter } from 'events';
const emitter = new EventEmitter();

const createForm = (data) => {

    let tabs = [
        {tabName: `1. Seu pedido`, tabContent: `requests`},
        {tabName: `2. Seus dados`, tabContent: `datas`}
    ];

    emitter.on(`searchProfessional`, (fieldData) => {
        let i, tabcontent, tablinks;

        let form = document.getElementById(`request_form`);
        let inputs = form.getElementsByTagName("select");

        let formData = {};
        for(let x=0; x< inputs.length; x++){
            if (inputs[x].hasAttribute('required') == true && !inputs[x].value) return alert('Por favor, preencha os campos obrigatórios!');
            formData[inputs[x].name] = inputs[x].value;
        }
        console.log(formData)
        alert('Buscando profissionais...');
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" block", " none");
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(fieldData.openFieldTab).className = document.getElementById(fieldData.openFieldTab).className.replace(" none", " block");
        document.getElementById(fieldData.openFieldContent).className += " active";
    })

    emitter.on(`finished`, (fieldData) => {
        let form = document.getElementById(`users_form`);
        let inputs = form.getElementsByTagName("input");

        let formData = {};
        for(let x=0; x< inputs.length; x++){
            if (inputs[x].hasAttribute('required') == true && !inputs[x].value) return alert('Por favor, preencha os campos obrigatórios!');
            formData[inputs[x].name] = inputs[x].value;
        }
        console.log(formData)
        alert('Finalizando...');
    })
    
    let form = (
        `
            <div id="request_fields" class="form__request block tabcontent">
                <form id="request_form">
                    ${renderRequestFields(data._embedded.request_fields)}
                    ${renderButtonSearch({
                        message: `BUSCAR PROFISSIONAIS`, emitter: emitter, emitterName: `searchProfessional`, openFieldTab: `users_fields`, openFieldContent: `datas`
                    })}
                </form>
            </div>
            <div id="users_fields" class="form__users none tabcontent">
                <form id="users_form">
                    ${renderUserFields(data._embedded.user_fields)}
                    ${renderButtonFinished({
                        message: `FINALIZAR`, emitter: emitter, emitterName: `finished`, openFieldTab: ``, openFieldContent: ``
                    })}
                </form>
            </div>
            <div class="form__tabs">${renderTabs(emitter, tabs)}</div>
        `
    )

    return form;
}

export default function renderForm(data, element) {
    console.log(data);
    const form = createForm(data);
    element.innerHTML = form;
}