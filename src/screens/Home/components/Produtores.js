import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
  const [titulo,lista] = useProdutores()

  const topoLista = () => {
    return (
      <>
        <Topo/>
        <Text style={styles.titulo}>{titulo}</Text>
        <TouchableOpacity onPress={() => lista.sort((produtor1,produtor2) => produtor1.distancia - produtor2.distancia)}><Text>Distancia</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => lista.sort((produtor1,produtor2) => produtor1.estrelas < produtor2.estrelas)}><Text>Estrelas</Text></TouchableOpacity>
      </>
    )
  }

  return (
    <View>
        <FlatList
          data={lista}
          renderItem={({item})=> <Produtor {...item}/>}
          keyExtractor={({nome}) => nome}
          ListHeaderComponent={topoLista}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal:16,
    marginTop:16,
    fontWeight:"bold",
    color: '#464646',
  }
})