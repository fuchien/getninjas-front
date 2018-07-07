import renderForm from './form/form';

const formElement = document.getElementById('form');

const getFieldsData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        renderForm(data, formElement);
    } catch (err) {
        console.log(`Erro ao pegar os dados!`, err)
    }
}

getFieldsData(`http://localhost:3000/`);