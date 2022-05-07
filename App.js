import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/home/homeScreen";
import FavoriteScreen from "./screens/favorites/favoritesScreen";
import CryptoItem from "./screens/cryptoItem/cryptoItemScreen";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home Page",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={{
              title: "Favorites",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="CryptoItem"
            component={CryptoItem}
            options={{
              title: "Details",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
