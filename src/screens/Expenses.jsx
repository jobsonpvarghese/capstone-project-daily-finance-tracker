import React, { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FAB, Button } from "react-native-paper"
import form from "../styles/Form.js"

// database functions
import { dbInitExpense, dbGetExpenses } from "../database/sqlite"

const Expenses = props => {
  const { navigation } = props
  const [data, setData] = useState([])

  // Refresh data
  const refreshVal = () => {
    dbGetexpenses().then(data => {
      setData(data)
    })
  }

  // Init db
  useEffect(() => {
    dbInitExpense()
      .then(() => dbGetExpenses())
      .then(data => {
        setData(data)
        console.log("Data", data)
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
      <ScrollView style={form.view}>
        {data == "" ? (
          <Text style={form.noData}>No data available</Text>
        ) : (
          data?.map((expense, index) => (
            <View style={form.listitem} key={index}>
              <View style={form.list}>
                <View style={form.listLeft}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold"
                    }}
                  >
                    {expense?.expenseTitle}
                  </Text>
                  <Text>Amount = {expense?.expenseAmount}</Text>
                  <Text>Date = {expense?.expenseDate}</Text>
                  <Text>Category = {expense?.expenseTag}</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={form.deleteButton}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
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
