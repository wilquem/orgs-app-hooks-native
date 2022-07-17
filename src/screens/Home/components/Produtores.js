import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { carregaProdutores } from '../../../services/carregaDados'
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo,setTitulo] = useState('');
  const [lista,setLista] = useState([]);


  useEffect(()=> {
    const retorno = carregaProdutores()
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  },[])

  const topoLista = () => {
    return (
      <>
        <Topo/>
        <Text style={styles.titulo}>{titulo}</Text>
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