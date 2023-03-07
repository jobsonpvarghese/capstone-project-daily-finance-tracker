import { useFocusEffect } from "@react-navigation/native"
import React, { useCallback, useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

import { dbGetTotalBalance, dbGetTotalExpense, dbGetTotalIncome } from "../database/ExpenseTable"

const Home = props => {
  const { navigation } = props

  const [totalIncome, setTotalIncome] = useState("")
  const [totalExpense, setTotalExpense] = useState("")
  const [totalBalance, setTotalBalance] = useState("")

  useFocusEffect(
    useCallback(() => {
      dbGetTotalIncome()
      .then(data => {
        setTotalIncome(data)
        console.log("Data", data)
      })
      .catch(err => {
        console.log("Error", err)
      })

      dbGetTotalExpense()
      .then(data => {
        setTotalExpense(data)
        console.log("Data", data)
      })
      .catch(err => {
        console.log("Error", err)
      })

      dbGetTotalBalance()
      .then(data => {
        setTotalBalance(data)
        console.log("Data", data)
      })
      .catch(err => {
        console.log("Error", err)
      })
    }, [])
  )

  console.log("Total Income", totalIncome)

  return (
    <View style={styles.container}>
      {/* Add 3 rectangular containers to hold the income, expense and the total balance */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
      <View style={styles.incomeContainer}>
        <Text style={styles.incomeText}>Income</Text>
        <Text style={styles.incomeText}>$ {totalIncome} </Text>
      </View>

      <View style={styles.outcomeContainer}>
        <Text style={styles.outcomeText}>Expense</Text>
        <Text style={styles.outcomeText}>$ {totalExpense} </Text>
      </View>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceText}>$ {totalBalance} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  incomeText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  outcomeText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  balanceText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  bold: {
    fontWeight: "bold"
  },
  incomeContainer: {
    margin: 10,
    backgroundColor: "#BFDB38",
    width: "45%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5



  },
  outcomeContainer: {
    margin: 10,
    backgroundColor: "#FC7300",
    width: "45%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  balanceContainer: {
    margin: 10,
    backgroundColor: "#0081B4",
    
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

})

export default Home
