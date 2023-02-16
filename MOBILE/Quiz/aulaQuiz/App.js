import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Quiz01 from './src/pages/quiz01';
import Quiz02 from './src/pages/quiz02';
import Quiz03 from './src/pages/quiz03';
import Quiz04 from './src/pages/quiz04';
import Quiz05 from './src/pages/quiz05';
import Pontuacao from './src/pages/Pontos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pergunta 1" component={Quiz01} />
        <Stack.Screen name="Pergunta 2" component={Quiz02} />
        <Stack.Screen name="Pergunta 3" component={Quiz03} />
        <Stack.Screen name="Pergunta 4" component={Quiz04} />
        <Stack.Screen name="Pergunta 5" component={Quiz05} />
        <Stack.Screen name="Pontuação" component={Pontuacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}