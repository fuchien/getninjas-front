

export function addCefMask(document) {
    let valor = document.replace(/\D/g, '');
    if (valor.length == 0) {
        valor = '';
    } else if (valor.length <= 5) {
        valor = valor.replace(/^(\d{0,5})/, '$1');
    } else if (valor.length <= 6) {
        valor = valor.replace(/^(\d{0,5})(\d{0,1})/, '$1-$2');
    } else {
        valor = valor.substr(0, 8).replace(/^(\d{0,5})(\d{0,3})/, '$1-$2');
    }
    console.log(valor)
    return valor
}

export function addCelMask(document) {
    let valor = document.replace(/\D/g, '');
    if (valor.length == 0) {
        valor = '';
    } else if (valor.length <= 2) {
        valor = valor.replace(/^(\d{0,2})/, '($1');
    } else if (valor.length <= 6) {
        valor = valor.replace(/^(\d{0,2})(\d{0,4})/, '($1) $2');
    } else if (valor.length <= 10) {
        valor = valor.replace(/^(\d{0,2})(\d{0,4})(.*)/, '($1) $2-$3');
    } else {
        valor = valor.substr(0, 11).replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    }
    return valor
}