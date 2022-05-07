import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useSelector, useDispatch } from "react-redux";
import { setFavoriteList } from "../../redux/actions";

const Favorites = ({ route, navigation }) => {
  const { favoriteList } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const removeFromFavorites = (cryptoId) => {
    const filteredList = favoriteList.filter(
      (item) => item.symbol !== cryptoId
    );
    dispatch(setFavoriteList(filteredList));
  };

  return (
    <FlatList
    style={styles.maincontainer}
      data={favoriteList}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.listContainer}>
              <View style={styles.row}>
                <Text
                  style={styles.text}
                  allowFontScaling={true}
                  numberOfLines={1}
                >
                  {item.symbol.toUpperCase()}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeFromFavorites(item.symbol)}>
              <Ionicons name={"close-outline"} size={32} color="yellow" />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#9b9ea3",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9b9ea3",
    paddingVertical: 10,
  },
  row: {
    flex: 2,
    borderWidth: 2,
    margin: 5,
    height: 30,
    width: 250,
    textAlign: "center",
    backgroundColor: "violet",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    justifyContent: "center",
  },
});

export default Favorites;
