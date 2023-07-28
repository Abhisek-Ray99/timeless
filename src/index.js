import { StyleSheet, View, VirtualizedList } from 'react-native'
import React, {useEffect, useState} from 'react'

import CoinItem from './components/index';
import cryptocurrencies from '../assets/data/cryptocurrencies.json';

const index = () => {
  const [data, setData] = useState([]);

  const getInformations = async () => {
    try {
      setData(cryptocurrencies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInformations();
  }, []);

  const getItemCount = () => data.length;

  const getItem = (data, index) => data[index];

  return (
    <View>
      <VirtualizedList
        initialNumToRender={5}
        data={data}
        getItemCount={getItemCount}
        getItem={getItem}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <CoinItem marketCoins={item} />
        )}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})