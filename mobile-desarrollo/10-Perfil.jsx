import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // TODO: Usa fetch para obtener los datos de:
    // https://jsonplaceholder.typicode.com/users/1
    // Guarda el resultado en "usuario" con setUsuario
    // y cambia "cargando" a false cuando finalice
    async function obtenerUsuario() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Error al conectar con la API');
        }
        const data = await response.json();
        setUsuario(data);
        setCargando(false);
      } catch (e) {
        console.log(e.message);
      }
    }
    obtenerUsuario()
  },[])

  if (cargando) return <ActivityIndicator />;

  return (
    <View>
      <Text>{usuario?.name}</Text>
    </View>
  );
}