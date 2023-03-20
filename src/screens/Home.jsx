import { useFocusEffect } from "@react-navigation/native"
import React, { useCallback, useEffect, useState } from "react"
import { Button, StyleSheet, Text, View, Dimensions } from "react-native"

import { dbGetTotalBalance, dbGetTotalExpense, dbGetTotalIncome, dropTableexpense } from "../database/ExpenseTable"
import { PieChart } from "react-native-chart-kit"

const MyPieChart = props => {
  const { totalIncome, totalExpense, totalBalance } = props

  console.log(props.totalIncome[0], props.totalExpense[0], props.totalBalance[0])
  return (
    <>
      <Text style={styles.header}>Summary</Text>
      <PieChart
        data={[
          {
            name: "Income",
            population: props.totalIncome[0] ?? 0,
            color: "#BFDB38",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Expense",
            population: props.totalExpense[0] ?? 0,
            color: "#FC7300",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Balance",
            population: props.totalBalance[0] ?? 0,
            color: "#0081B4",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          }
        ]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  )
}

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
        })
        .catch(err => {
          console.log("Error", err)
        })

      dbGetTotalExpense()
        .then(data => {
          setTotalExpense(data)
        })
        .catch(err => {
          console.log("Error", err)
        })

      dbGetTotalBalance()
        .then(data => {
          setTotalBalance(data)
        })
        .catch(err => {
          console.log("Error", err)
        })
      // dropTable()
      // dropTableexpense()
    }, [])
  )

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
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
      <View>
        <MyPieChart totalIncome={totalIncome} totalExpense={totalExpense} totalBalance={totalBalance} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
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
  }
})

export default Home
