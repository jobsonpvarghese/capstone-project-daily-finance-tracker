import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { TextInput, Button } from "react-native-paper"

const ExpenseFrom = props => {
  const { navigation } = props

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
      <TextInput mode="outlined" label="Expense Title" placeholder="Enter you expense label" value="" />
      <TextInput mode="outlined" label="Amount" placeholder="$" />
      <TextInput mode="outlined" label="Enter the tag" placeholder=" " />
      <TextInput mode="outlined" label="Date" placeholder="ddmmyyyy" />
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
          onPress={() => console.log("Pressed")}
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
