import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

// import Ionicons from "@expo/vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";

const PaginationNextComponent = (props) => {
  return (
    <View style={styles.pagination}>
      {/* <TouchableOpacity onPress={props.onPress}>
        <Ionicons name="md-arrow-back" size={32} color="black" />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={props.onPress}>
        <Ionicons name="md-arrow-forward" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
  },
});

export default PaginationNextComponent;
