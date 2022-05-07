
import { View, TextInput, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({searchPhrase, setSearchPhrase}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search Cryptocurrencies..."
        onChangeText={setSearchPhrase}
        value={searchPhrase}
      />
      {console.log(searchPhrase)}
      <View style={styles.icon}>
        <Ionicons name="md-search" size={32} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderColor: "black",
    borderWidth: 2,
    padding: 3,
  },
  inputContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    margin: 20,
  },
  icon: {
    paddingLeft: 5,
  },
});

export default SearchBar;