import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { Ionicons } from "react-native-vector-icons"

// Screen Import
import Home from "../screens/Home"
import Account from "../screens/Account"
import Settings from "../screens/Settings"
import Add from "../screens/Add"

// Tab Navigator
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={styles.home} />
      <Tab.Screen name="Expenses" component={Account} options={styles.account} />
      <Tab.Screen name="Add" component={Add} options={styles.Add} />
      <Tab.Screen name="Settings" component={Settings} options={styles.setting} />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  home: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "home" : "home-outline"
      return <MaterialCommunityIcons name={iconName} color={color} size={size} />
    }
  },
  account: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "card-account-details" : "card-account-details-outline"
      return <MaterialCommunityIcons name={iconName} color={color} size={size} />
    }
  },

  Add: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "add" : "add-outline"
      return <Ionicons name={iconName} color={color} size={size} />
    }
  },
  setting: {
    tabBarActiveTintColor: "#1D1CE5",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: props => {
      const { focused, color, size } = props
      const iconName = focused ? "settings" : "settings-outline"
      return <Ionicons name={iconName} color={color} size={size} />
    }
  }
})
