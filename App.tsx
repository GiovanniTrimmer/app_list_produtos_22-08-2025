import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



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

const [listProdutos, setListProdutos] = useState([])

  return (
    <View style={styles.container}>
    {listProdutos.map((prod)=>
    <View style={styles.listItem} key={prod.id}>
      <Text>{prod.title}</Text>
    <Text>{prod.price}</Text>
    </View>)}
      <StatusBar style="auto" />
    </View>
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
  }
});
