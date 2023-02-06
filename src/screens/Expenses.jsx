import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FAB, Button } from "react-native-paper"

import { dbInit, dbGetExpenses, dbInsertExpense } from "../database/sqlite"

const Expenses = props => {
  const { navigation } = props

  // Refresh data
  const refreshVal = () => {
    dbInsertExpense().then(data => {
      setFormData(data)
    })
  }

  // Init db
  useEffect(() => {
    dbInit()
      .then(() => dbGetExpenses())
      .then(data => {
        setFormData(data)
      })
      .catch(err => {
        console.log("Databae error", err)
      })
      .finally(() => {
        console.log("Database initialized")
      })
    console.log("Effect")
  }, [])

  return (
    <View style={styles.container}>
      <Text>
        Content for the <Text style={styles.bold}>Expenses</Text> component goes here.
      </Text>
      <Button icon="plus" style={styles.fab} textColor="#FFF" onPress={() => navigation.navigate("ExpenseForm")}>
        Add Expense
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

export default Expenses
