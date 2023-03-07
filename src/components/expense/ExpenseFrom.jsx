import { StyleSheet, Text, View } from "react-native"
import React, { useState, useEffect } from "react"
import { TextInput, Button } from "react-native-paper"
import uuid from "react-native-uuid"
import {Picker} from '@react-native-picker/picker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { dbEditExpense, dbInsertExpense } from "../../database/ExpenseTable"

const ExpenseFrom = props => {
  const { navigation } = props
  const action = props?.route?.params?.action
  const data = props?.route?.params?.data

  // hooks for expense title, amount, tag and date
  const [expenseTitle, setExpenseTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [tag, setTag] = useState("")
  const [date, setDate] = useState(new Date())
  // const [inputDate, setInputDate] = useState(new Date())

  // Dropdown options (income and expense)
  const [expenseSource, setSource] = useState("Income")


  useEffect(() => {
    if (action.toUpperCase() === "EDIT") {
      setExpenseTitle(data.expenseTitle)
      setAmount(data.expenseAmount)
      setTag(data.expenseTag)
      setDate(data.expenseDate)
      setSource(data.expenseSource)
    }
  }, [])

  // function to add expense
  const onClickAction = () => {
    if (action.toUpperCase() === "ADD") {
      dbInsertExpense(uuid.v4(), expenseTitle, amount, date, tag, expenseSource)
      navigation.navigate("Expenses")
    } else {
      dbEditExpense(data.id, expenseTitle, amount, date, tag, expenseSource)
      navigation.navigate("Expenses")
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
      <TextInput
        mode="outlined"
        label="Expense Title"
        placeholder="Enter you expense label"
        value={expenseTitle}
        onChangeText={title => setExpenseTitle(title)}
      />
      <TextInput mode="outlined" keyboardType = 'numeric' label="Amount" placeholder="$" value={amount} onChangeText={amount => setAmount(amount)} />
      
      
      {/* <TextInput mode="outlined" label="Enter the tag" placeholder=" " value={tag} onChangeText={tag => setTag(tag)} /> */}
      <Picker mode="dropdown" label="Tag" selectedValue={tag} onValueChange={(itemValue) => {setTag(itemValue)
        }}>
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Transport" value="Transport" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Entertainment" value="Entertainment" />
        <Picker.Item label="Others" value="Others" />
      </Picker>

      {/*  ------------- Dropdown for income and expense --------------- */}
      <Picker mode="dropdown" label="Source" selectedValue={expenseSource} onValueChange={(itemValue) => {setSource(itemValue)
        }}>
        <Picker.Item label="Income" value="Income" />
        <Picker.Item label="Expense" value="Expense" />
      </Picker>

      {/* ----------------- Date Picker -------------------- */}
      <TextInput mode="outlined" label="Date" placeholder="ddmmyyyy" value={date} onChangeText={date => setDate(date)} />
      <Calendar
        monthFormat={'yyyy MM'}
        onDayPress={day => {
          setDate(day.dateString)
        }}
      />



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
    flex: 1,
    marginTop: 50
    
  },
  btnArea: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row"
  }
})
