import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Screen Import
import Detail from "../screens/Detail"

// Nested Stack Navigator (Tab)
import Tabs from "./Tabs"

// Stack Navigator
const Stack = createNativeStackNavigator()

export default function Route() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Navigation"
            component={Tabs}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
