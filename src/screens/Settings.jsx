import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Settings = () => {
  return (
    <View style={styles.container}>
      // Make a date picker where it can select the date and time 
      // Make a button that can change the background of the app
      
      // Make a button that can change the theme of the app

      // Make a button that can change the language of the app
      // Make a button that can change the currency of the app
      
      // Make a button that can change the font of the app
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bold: {
    fontWeight: "bold"
  }
})

export default Settings
