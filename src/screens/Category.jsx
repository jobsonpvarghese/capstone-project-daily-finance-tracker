import React,{ useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Dialog, Portal } from "react-native-paper"
import FormBody from "../components/CategoryList"
import dashBoard from "../styles/Dashboard"

// db functions
import { dbGetGames, dbInit, dropTable } from "../database/sqlite"

const Category = props => {
  const { navigation } = props
  const [visible, setVisible] = React.useState(false)
  const hideDialog = () => setVisible(false)
  const [formData, setFormData] = useState([])

  // Refresh data
  const refreshVal = () => {
    dbGetGames().then(data => {
      setFormData(data)
    })
  }

  // Init db
  useEffect(() => {
    dbInit()
      .then(() => dbGetGames())
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
      <View style={dashBoard.body}>
        <FormBody data={formData} refreshVal={refreshVal} />
      </View>
      <Button icon="plus" style={styles.fab} mode="contained" onPress={() => navigation.navigate("CategoryAdd")}>
        Add Category
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export default Category
