import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { TextInput, Button } from "react-native-paper"
import uuid from "react-native-uuid"

import { dbEditExpense, dbInsertExpense } from "../../database/ExpenseTable"

const ExpenseFrom = props => {
  const { navigation, id } = props
  const action = props?.route?.params?.action

  // hooks for expense title, amount, tag and date
  const [expenseTitle, setExpenseTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [tag, setTag] = useState("")
  const [date, setDate] = useState("")
  const [expenseSource, setSource] = useState("")

  // function to add expense
  const onClickAction = id => {
    if (action.toUpperCase() === "ADD") {
      dbInsertExpense(uuid.v4(), expenseTitle, amount, date, tag, expenseSource)
      navigation.navigate("Expenses")
    } else {
      dbEditExpense(id, expenseTitle, amount, date, tag, expenseSource)
    }
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
        {action.toUpperCase() === "ADD" ? "Add Expense" : "Edit Expense"}
      </Text>
      <TextInput mode="outlined" label="Expense Title" placeholder="Enter you expense label" onChangeText={title => setExpenseTitle(title)} />
      <TextInput mode="outlined" label="Amount" placeholder="$" onChangeText={amount => setAmount(amount)} />
      <TextInput mode="outlined" label="Enter the tag" placeholder=" " onChangeText={tag => setTag(tag)} />
      <TextInput mode="outlined" label="Date" placeholder="ddmmyyyy" onChangeText={date => setDate(date)} />
      <TextInput mode="outlined" label="Source" placeholder="Income/Expense " onChangeText={expenseSource => setSource(expenseSource)} />
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
            onClickAction()
          }}
        >
          {action.toUpperCase() === "ADD" ? "Add" : "Save"}
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
