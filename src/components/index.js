import { Text, View, Image } from 'react-native';

import {styles} from './styles';

import { AntDesign } from '@expo/vector-icons';

export default function CoinItem({marketCoins}) {
  const { 
    name, symbol, 
    current_price, 
    market_cap_rank, 
    price_change_percentage_24h, 
    market_cap,
    image} = marketCoins;


  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(3)} T`;
    }
    if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(3)} B`;
    }
    if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(3)} M`;
    }
    if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(3)} K`;
    }
    return marketCap;
  };

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
  const percentageName = price_change_percentage_24h < 0 ? 'caretdown' : 'caretup';

  return (
      <View style={styles.coinContainer}>
        <Image 
          source={{ uri: image}}
          style={{height: 30, width: 30, marginRight: 10, alignSelf: 'center'}}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{ flexDirection: 'row'}}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{market_cap_rank}</Text>
            </View>
            <Text style={styles.text}>{symbol.toUpperCase()}</Text>
            <AntDesign 
              name={percentageName} 
              size={16} 
              color={percentageColor} 
              style={{alignSelf: 'center', marginRight: 5}}
            />
            <Text style={{ color: percentageColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
          <Text style={styles.title}>{current_price}</Text>
          <Text style={styles.text}>MCap {normalizeMarketCap(market_cap)}</Text>
        </View>
    </View>
  );
}


