import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CryptoItem = ({ route }) => {
  const { name, symbol, rank } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text>Name: {name}</Text>
        </View>
        <View style={styles.details}>
          <Text>Symbol: {symbol}</Text>
        </View>
        <View style={styles.details}>
          <Text>Rank: {rank}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b9ea3",
    paddingTop: 40,
    // fontSize: 50,

  },
  detailsContainer: {
    backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 500,
    height: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderBottomWidth: 2,
  },
  details: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 50,
    // color: 'white',
  },
});

export default CryptoItem;
