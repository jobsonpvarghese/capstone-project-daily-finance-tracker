import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"


const Home = props => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <Text>
        Content for the <Text style={styles.bold}>home</Text> component goes here.
      </Text>
      <Button title="Show Details" onPress={() => navigation.navigate("Details")} />
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

export default Home
