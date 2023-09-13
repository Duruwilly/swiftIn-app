import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

interface routeInterface {
  name: string;
  component: React.FC;
  options?: {
    title?: string;
    headerShown?: boolean;
    headerShadowVisible?: boolean;
    headerStyle?: { backgroundColor: string };
  };
}

export const routes: Array<routeInterface> = [
  {
    name: "Login",
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Register",
    component: RegisterScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Home",
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
];
