import renderRequiredField from '../../required-field/required-field';
import { addCefMask, addCelMask } from '../../form-mask/form-mask';

export default function renderUserField(user) {

    let inputType = user.userField.type.toLowerCase() === 'email' ? 'email' :
                    user.userField.type.toLowerCase() === 'cep' ? 'text' :
                    user.userField.type.toLowerCase() === 'phone' ? 'text' :
                    'text';

    const changeValue = (value, id) => {
        let valueMasked;
        if (id.toLowerCase() === 'cep') {
            valueMasked = addCefMask(value);
            document.getElementById(id).value = valueMasked;
        }

        if (id.toLowerCase() === 'phone') {
            valueMasked = addCelMask(value);
            document.getElementById(id).value = valueMasked;
        }

    }
    
    window.changeValue = changeValue;

    return (
        `
        <div class="form__group">
            <label for="${user.userField.name}">${user.userField.label}</label>
            <input type="${inputType}" onkeyup="changeValue(this.value, this.id)" name="${user.userField.name}" id="${user.userField.name}"style="width: ${user.index === 0 || user.index === 3 ? '40%' : '100%'}"
                class="form__input" placeholder="${user.userField.placeholder}" ${user.userField.required ? 'required' : ''}>
            ${user.userField.required ? renderRequiredField() : ''}
        </div>
        `
    )
}