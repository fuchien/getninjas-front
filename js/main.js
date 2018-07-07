

const getFieldsData = async (endpoint) => {
    const response = await fetch(endpoint);
    const data = response.json()
    console.log(data)
}

getFieldsData(`http://localhost:3000/`);