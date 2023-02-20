import { StyleSheet, Text, View } from "react-native"
import uuid from "react-native-uuid"
import { useNavigation } from "@react-navigation/native"

import dashBoard from "../../styles/Dashboard"

const CategoryAdd = props => {
  const navigation = useNavigation()
  const [task, setTask] = useState("")

  // Add gamelist
  const onSubmit = () => {
    if (task === "") {
      Alert.alert("Invalid", "Please enter a game", [{ text: "OK" }])
    } else {
      dbInsert(uuid.v4(), task)
      setTask("")
      navigation.navigate("Category")
      // refreshVal()
    }
  }

  return (
    <View style={dashBoard.container}>
      <View style={dashBoard.header}>
        <Text style={dashBoard.title}>Tag</Text>
      </View>
      <View style={dashBoard.body}>
        <Text>Add a new tag</Text>
        <TextInput mode="outlined" label="Enter a tag" value={task} onChangeText={text => setTask(text)} />
        <View>
          <Button style={styles.btnArea} mode="contained" onPress={onSubmit}>
            Add
          </Button>
        </View>
      </View>
    </View>
  )
}

export default CategoryAdd

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10
  },
  btnArea: {
    marginTop: 20,
    backgroundColor: "#F94A29"
  }
})
