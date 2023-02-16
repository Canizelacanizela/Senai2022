import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Options from './src/pages/options';
import Descricao from './src/pages/Description';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Options} />
        <Stack.Screen name="Descricao" component={Descricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}