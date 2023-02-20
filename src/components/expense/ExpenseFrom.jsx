import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { TextInput, Button } from "react-native-paper"
import uuid from "react-native-uuid"

import { dbInsertExpense } from "../../database/sqlite"

const ExpenseFrom = props => {
  const { navigation } = props

  // hooks for expense title, amount, tag and date
  const [expenseTitle, setExpenseTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [tag, setTag] = useState("")
  const [date, setDate] = useState("")

  // function to add expense
  const addExpense = () => {
    dbInsertExpense(uuid.v4(), expenseTitle, amount, tag, date)
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: "#F94A29",
          textAlign: "center"
        }}
      >
        Add Expense
      </Text>
      <TextInput mode="outlined" label="Expense Title" placeholder="Enter you expense label" onChangeText={title => setExpenseTitle(title)} />
      <TextInput mode="outlined" label="Amount" placeholder="$" onChangeText={amount => setAmount(amount)} />
      <TextInput mode="outlined" label="Enter the tag" placeholder=" " onChangeText={tag => setTag(tag)} />
      <TextInput mode="outlined" label="Date" placeholder="ddmmyyyy" onChangeText={date => setDate(date)} />
      <View style={styles.btnArea}>
        <Button style={{ borderColor: "#F94A29" }} icon="close" textColor="#F94A29" mode="outlined" onPress={() => navigation.navigate("Expenses")}>
          Cancel
        </Button>
        <Button
          style={{
            marginLeft: 10,
            backgroundColor: "#F94A29"
          }}
          icon="file"
          mode="contained"
          onPress={() => {
            addExpense()
            navigation.navigate("Expenses")
          }}
        >
          Add
        </Button>
      </View>
    </View>
  )
}

export default ExpenseFrom

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 150
  },
  btnArea: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row"
  }
})
