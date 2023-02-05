import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { FAB } from "react-native-paper"

const Expenses = props => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <Text>
        Content for the <Text style={styles.bold}>Expenses</Text> component goes here.
      </Text>
      <FAB icon="plus" style={styles.fab} color="#FCE22A" size={"small"} onPress={() => navigation.navigate("ExpenseForm")} />
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

export default Expenses
