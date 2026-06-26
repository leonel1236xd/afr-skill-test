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
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al extraer información de la API');
        }
        return response.json();
      })
      .then(data => {
        setUsuario(data);
        setCargando(false);
      })
      .catch(error => {
        console.error(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <ActivityIndicator />;

  return (
    <View>
      <Text>{usuario?.name}</Text>
    </View>
  );
}