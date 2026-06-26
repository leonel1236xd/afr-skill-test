// API pública: https://jsonplaceholder.typicode.com/users/1
// Responde con un objeto que incluye, entre otros campos: { id: 1, name: "Leanne Graham", ... }

async function obtenerUsuario() {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if(!response.ok){
      throw new Error('error al extraer información de la API');
    }
    const data = await response.json();
    console.log(`Usuario: ${data.name}`);
  }catch(e){
    console.error(e.message);
  }
}

obtenerUsuario();