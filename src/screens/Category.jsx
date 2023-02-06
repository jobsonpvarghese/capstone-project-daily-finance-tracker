import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Dialog, Portal } from "react-native-paper"

const Category = () => {
  const [visible, setVisible] = React.useState(false)
  const hideDialog = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Text>
        Content for the <Text style={styles.bold}>Category</Text> component goes here.
      </Text>
      <Button icon="plus" style={styles.fab} mode="contained" onPress={() => console.log("Pressed")}>
        Add Category
      </Button>
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
  },
  fab: {
    backgroundColor: "#F94A29",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
})

export default Category
