// API pública: https://jsonplaceholder.typicode.com/users/1
// Responde con un objeto que incluye, entre otros campos: { id: 1, name: "Leanne Graham", ... }

async function obtenerUsuario() {
  // TODO: Usa fetch para obtener los datos del usuario con id 1
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    if(!response.ok){
      throw new Error("Error al conectar con la API")
    }
    const data = await response.json()
    console.log(`Usuario: ${data.name}`)
  }catch(e){
    console.log(e.message)
  }
}

obtenerUsuario();