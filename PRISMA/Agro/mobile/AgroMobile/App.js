import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/pages/Login';
import Operacoes from './src/pages/Operacoes';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={Login}/> 
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Operacoes" component={Operacoes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
