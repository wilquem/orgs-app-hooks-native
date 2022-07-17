import React, { useState } from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)
  const styles = stylesFuncao(grande);

  const getImage = (index) => {
    if(index < quantidade) {
        return estrela
    }

    return estrelaCinza
  }

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity onPress={()=> setQuantidade(i + 1)} disabled={!editavel} key={i}>
            <Image style={styles.estrela} source={getImage(i)} />
        </TouchableOpacity>
      );
    }

    return listaEstrelas;
  };
  return (
    <View style={styles.estrelas}>
        <RenderEstrelas/>
    </View>
  );
}

const stylesFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
    estrelas: {
      flexDirection: 'row',
      marginRight: 2,
    },
  });
