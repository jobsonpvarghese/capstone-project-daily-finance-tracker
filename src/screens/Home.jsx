import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
// import apex chart
import Chart from "react-apexcharts"


const Home = props => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <Text>
        Content for the <Text style={styles.bold}>home</Text> component goes here.
      </Text>
      <Button title="Show Details" onPress={() => navigation.navigate("Details")} />
      <Chart
      type="pie"
      width="100%"
      height="100%"
      options={{
        labels: ["Income", "Expense"],
        dataLabels: {
          enabled: true
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }}
      series={[44, 55]}
      // series={[44, 55, 41, 17, 15]}
      // series={[44, 55, 41, 17, 15]}
      // series={[44, 55, 41, 17, 15]}
      >

      </Chart>

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
  }
})

export default Home
