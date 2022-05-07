import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import PaginationNextComponent from "../../components/Pagination/PaginationNext";
import PaginationBackComponent from "../../components/Pagination/PaginationBack";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchBar from "./../../components/Input/SearchBar.component";

import { useSelector, useDispatch } from "react-redux";
import { setData, setFavoriteList } from "../../redux/actions";

const HomeScreen = ({ navigation }) => {
  const { favoriteList, data } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const APIurl = "https://api.coinpaprika.com/v1/coins";

  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [paginationNum, setPaginationNum] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    fetch(APIurl)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setData(data));
        console.log(data);
      })
      .catch((error) => alert(error))
      .finally(setIsLoading(false));
  }, []);

  const paginationNextHandler = () => {
    setIndex((index) => index + 1);
    setPaginationNum((paginationNum) => paginationNum + 1);
  };

  const paginationBackHandler = () => {
    setIndex((index) => index - 1);
    setPaginationNum((paginationNum) => paginationNum - 1);
  };

  const addToFavorites = (cryptoId) => {
    dispatch(setFavoriteList([...favoriteList, cryptoId]));
  };

  const removeFromFavorites = (cryptoId) => {
    const filteredList = favoriteList.filter((item) => item.id !== cryptoId.id);
    dispatch(setFavoriteList(filteredList));
    console.log(filteredList);
  };

  const ifExists = (cryptoId) => {
    if (favoriteList.filter((item) => item.id === cryptoId.id).length > 0) {
      return true;
    }
    return false;
  };

  const search = (text) => {
    if (text === "") {
      return data.slice(index, index + 10);
    }
    return data
      .filter((item) => item.symbol.includes(text.toUpperCase()))
      .slice(index, index + 10);
  };

  const goToFavorites = () => {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("Favorite", { favoriteList })}
      >
        <Text style={styles.text}>Go to favorites</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={search(searchPhrase)}
            ListHeaderComponent={goToFavorites}
            keyExtractor={({ id }, index) => id}
            numColumns={1}
            renderItem={(item) => (
              <View style={styles.listComponent}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CryptoItem", {
                      symbol: item.item.symbol,
                      name: item.item.name,
                      rank: item.item.rank,
                    })
                  }
                >
                  <View style={styles.listView}>
                    <Text style={styles.listItems} key={item.item.id}>
                      {item.item.symbol}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() =>
                    ifExists(item.item)
                      ? removeFromFavorites(item.item)
                      : addToFavorites(item.item)
                  }
                >
                  <Ionicons
                    name={
                      ifExists(item.item) ? "md-star-sharp" : "md-star-outline"
                    }
                    size={32}
                    color="yellow"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
      <View style={styles.pagination}>
        {paginationNum > 1 && (
          <PaginationBackComponent onPress={paginationBackHandler} />
        )}
        <Text style={styles.paginationSpan}>{paginationNum}</Text>
        <PaginationNextComponent onPress={paginationNextHandler} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9b9ea3",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  listItems: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 20,
    justifyContent: "center",
  },
  listView: {
    flex: 2,
    borderWidth: 2,
    margin: 5,
    height: 50,
    width: 250,
    textAlign: "center",
    backgroundColor: "violet",
    justifyContent: "center",
    borderRadius: 5,
  },
  listComponent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationSpan: {
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  header: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
    width: 120,  
    // alignContent: 'center'
    left: 80,
    paddingVertical: 5,
marginBottom: 20  }
});

export default HomeScreen;
