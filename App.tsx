import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';




export default function App() {

interface Produto{
  id: number;
  title: string;
  price: number;
  image: string;
}

useEffect(()=>{
  carregarProdutos();
},[]);

const carregarProdutos = async()=>{
  const response =
  await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  setListProdutos(data);   
}

const [listProdutos, setListProdutos] = useState<Produto[]>([])

  return (
    <ScrollView>
    <View style={styles.container}>
    {listProdutos.map((prod)=>
    <View style={styles.listItem} key={prod.id}>
      <Image source={{uri: prod.image}} style={styles.image} />
      <Text style={styles.titulo}>{prod.title}</Text>
    <Text style={styles.preco}>{prod.price.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}</Text>
    </View>)}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    backgroundColor: '#b9f4fcff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    flexWrap: 'wrap',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height:2  },
    shadowOpacity:0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  image:{
      width: '50%',
      height: 50,
  },
titulo:{
  width: '50%',
  fontSize: 16,
  fontWeight: 'bold',
  margin: 10
},
preco:{
  fontSize: 14,
  margin: 10
}
})
