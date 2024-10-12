import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/features/LoginScreen";
import RegisterScreen from "./src/features/RegisterScreen";
import ForgetPassword from "./src/features/ForgetPasswordScreen";
import HomeScreen from "./src/features/HomeScreen";
import { NativeBaseProvider } from "native-base";
import MovieDetailScreen from "./src/features/MovieDetailScreen";
import ListMoviesScreen from "./src/features/ListMoviesScreen";
import ViewMovieSreen from "./src/features/ViewMovieScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ForgetPasswordScreen"
            component={ForgetPassword}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ListMoviesScreen" component={ListMoviesScreen} />
          <Stack.Screen
            name="MovieDetailScreen"
            component={MovieDetailScreen}
          />

          <Stack.Screen name="ViewMovieSreen" component={ViewMovieSreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
