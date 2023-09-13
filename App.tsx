import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './constant/colors';
import { routes } from './navigations/route';
import useHeaderState from './helpers/statusBarState';

const Stack = createNativeStackNavigator();

export default function App() {
  const { isDark } = useHeaderState();

  return (
    <>
      <StatusBar style={isDark ? "dark" : "light"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: {
            //   backgroundColor: Colors.primary
            // },
            contentStyle: {
              backgroundColor: "white"
            },
            headerShadowVisible: false
          }}
        >
          {
            routes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={route.options}
              />
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
