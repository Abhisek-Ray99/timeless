import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
    },
    text: {
      color: '#f1f1f1',
      marginRight: 5,
    },
    coinContainer: {
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'grey',
      padding: 15,
      justifyContent: 'space-between'
    },
    rank: {
      fontWeight: 'bold',
      color: '#fff',
    },
    rankContainer: {
      backgroundColor: '#585858',
      paddingHorizontal: 5,
      borderRadius: 5,
      marginRight: 5,
    }
  });