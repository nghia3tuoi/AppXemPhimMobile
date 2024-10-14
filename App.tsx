import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/features/LoginScreen";
import RegisterScreen from "./src/features/RegisterScreen";
import ForgetPassword from "./src/features/ForgetPasswordScreen";
import HomeScreen from "./src/features/HomeScreen";
import { NativeBaseProvider } from "native-base";
import MovieDetailScreen from "./src/features/MovieDetailScreen";
import ListMoviesScreen from "./src/features/ListMoviesScreen";

import "./src/config/firebaseConfig";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./src/core/store";
import ViewMovieScreen from "./src/features/ViewMovieScreen";
import FavoriteMoviesScreen from "./src/features/FavoriteMoviesScreen";
export type RootStackParamList = {
  HomeScreen: any;
  LoginScreen: any;
  RegisterScreen: any;
  ForgetPasswordScreen: any;
  ListMoviesScreen: any;
  MovieDetailScreen: any;
  ViewMovieScreen: any;
  FavoriteMoviesScreen:any;
};
const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
              name="ForgetPasswordScreen"
              component={ForgetPassword}
            />

            <Stack.Screen
              name="ListMoviesScreen"
              component={ListMoviesScreen}
            />
            <Stack.Screen
              name="MovieDetailScreen"
              component={MovieDetailScreen}
            />
            <Stack.Screen name="ViewMovieScreen" component={ViewMovieScreen} />
            <Stack.Screen
              name="FavoriteMoviesScreen"
              component={FavoriteMoviesScreen}
            />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
