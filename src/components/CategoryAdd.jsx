import { useEffect, useState } from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"
import FormBody from "../components/FormBody"
import dashBoard from "../styles/Dashboard"

// db functions
import { dbGetGames, dbInit, dropTable } from "../database/sqlite"

const CategoryAdd = () => {

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
    <View style={dashBoard.container}>
      <View style={dashBoard.header}>
       
        <Text style={dashBoard.title}>Tag</Text>
      </View>
      <View style={dashBoard.body}>
        <FormBody data={formData} refreshVal={refreshVal} />
      </View>
    </View>
  )
}


export default CategoryAdd
