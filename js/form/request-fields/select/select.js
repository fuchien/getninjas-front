import renderRequireField from '../../required-field/required-field';

export default function createSelects(data) {
    
    let options = data.selects.map(select =>
        `
            <option value="${select}">${select}</option>
        `
    ).join('');
    return (
        `
            <select class="form__select" required="${data.required}">
                <option value="" disabled selected>Selecione uma opção!</option>
                ${options}
            </select>
            ${data.required ? renderRequireField() : ''}
        `
    )
}