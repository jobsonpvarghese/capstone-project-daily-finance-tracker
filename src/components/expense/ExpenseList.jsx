import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "react-native-vector-icons"
// 
// import { Button, Searchbar, TextInput } from "react-native-paper"
// 

const ExpenseList = props => {
  const { data, tagData, deleteExpense, navigation, dateSearch } = props

  // 
  // const [searchText, onChangeSearch] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  
  // useEffect(() => {
  //   const filtered = data.filter(item =>
  //     item.expenseDate.includes(searchText),
  //   );
  //   if (searchText === '') {
  //     return setFilteredData(data);
  //   }

  //   setFilteredData(filtered);
  // }, [searchText]);

  // const Item = ({expenseDate}) => (
  //   <View style={styles.item}>
  //     <Text style={styles.expenseDate}>{expenseDate}</Text>
  //   </View>
  // );

  // const renderItem = ({item}) => <Item title={item.title} />;
  // 

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
      }}
    >
        {/*  */}
          {/* <View>
          <TextInput style = {styles.bar}
              placeholderTextColor='#808080'
              placeholder={'YYYY-MM-DD'}
              value = {dateSearch} 
              onChangeText = {newText => onChangeSearch(newText)}      
              keyboardType={'numeric'}
            />
            
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.key}
              />
          </View> */}

        {/*  */}

      {data == "" ? (
        <Text style={styles.noData}>No data available</Text>
      ) : (
        data?.map((expense, index) => (
          <View style={styles.listitem} key={index}>
            <View style={styles.listHeader}>
              <View style={styles.listLeft}>
                <View style={styles.expenseIconBg}>
                  <Image style={styles.expenseIcon} source={require("../../assets/icons/expenses.png")} />
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold"
                    }}
                  >
                    {expense?.expenseTitle}
                  </Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>$ {expense?.expenseAmount}</Text>
                  <Text style={{ fontSize: 12, color: "gray" }}>Note- {expense?.expenseNote}</Text>
                </View>
              </View>
              <View style={styles.buttonArea}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ExpenseForm", {
                      action: "Edit",
                      data: expense
                    })
                  }
                >
                  <MaterialCommunityIcons name={"pencil-outline"} color={"gray"} size={26} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteExpense(expense.id)}>
                  <MaterialCommunityIcons name={"delete-outline"} color={"#EB455F"} size={26} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 10
              }}
            >
              <Text style={{ fontSize: 12, color: "gray" }}>{expense?.expenseDate}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: `${tagData.find(tag => tag.tag == expense.expenseTag).color}`,
                  padding: 5,
                  borderRadius: 5
                }}
              >
                <Text style={{ fontSize: 12 }}>{expense?.expenseTag}</Text>
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

    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#FCE22A",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  listLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "78%"
  },
  expenseIcon: {
    width: 30,
    height: 30
  },
  expenseIconBg: {
    backgroundColor: "#FCE22A",
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  // 
//   bar: {
//     position: "relative",
//     borderWidth: 0.5,
//     borderRadius: 15,
//     marginHorizontal: 15,
//     marginBottom: 10,
//     marginTop: 60
    
// }
// 
})
