import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Components/Details/Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './Components/Home/Home';

const Stack = createStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen 
            component={Home} name='home'
            options={{ title: 'Star Wars Shop' }}
          />
          <Stack.Screen 
            component={Details} name='details'
            options={{ title: 'Detalle' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
