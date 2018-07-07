

const getFieldsData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(`Erro ao pegar os dados!`, err)
    }
}

getFieldsData(`http://localhost:3000/`);