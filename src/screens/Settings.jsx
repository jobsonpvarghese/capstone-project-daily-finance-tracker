import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>
        Content for the <Text style={styles.bold}>settings</Text> component goes here.
      </Text>
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
