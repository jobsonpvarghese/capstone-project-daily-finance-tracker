import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"


const ExpenseList = props => {
  const { data, deleteExpense } = props
  return (
    <View>
      {data == "" ? (
        <Text style={styles.noData}>No data available</Text>
      ) : (
        data?.map((expense, index) => (
          <View style={styles.listitem} key={index}>
            <View style={styles.list}>
              <View style={styles.listLeft}>
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
                <TouchableOpacity onPress={() => deleteExpense(expense.id)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      )}
    </View>
  )
}

export default ExpenseList

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: "#FFF7E9",
    borderRadius: 10,
    padding: 20,
    marginTop: 10
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listLeft: {
    width: "78%"
  },

  deleteButton: {
    backgroundColor: "#FF731D",
    color: "#fff",
    borderRadius: 5,
    padding: 10
  }
})
