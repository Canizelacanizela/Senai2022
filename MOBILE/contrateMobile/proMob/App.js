import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Routes from './src/routes';
import LoginCli from './src/pages/LoginCli';
// import LoginProf from './src/pages/LoginProf';
import Home from './src/pages/Home';
import CadastroCli from './src/pages/CadastroCli';
import CadastroProf from './src/pages/CadastroProf';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen
        name="Routes"
        component={Routes}
        options={{ headerShown: false }}
      />
        {/* <Stack.Screen name="LoginProf" component={LoginProf}/> */}
        <Stack.Screen name="LoginCli" component={LoginCli}/>
        <Stack.Screen name="CadastroCli" component={CadastroCli}/>
        <Stack.Screen name="CadastroProf" component={CadastroProf}/>
      </Stack.Navigator>
  
    </NavigationContainer>
  );
}
