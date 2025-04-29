import { Text, View, StyleSheet, Pressable, TextInput,TouchableNativeFeedback } from "react-native";
import { Link } from "expo-router";
import ApiTester from "./apitester";
import { SearchBar } from "react-native-screens";

export default function AdminDashboard() {
  return (
   
       <View style = {styles.categorysettercontainer}>
   
          <View style = {styles.InputContainer}>

            <Text style = {[styles.textLabel, styles.createLabel]}>Create Account</Text>

            <View>
              <Text style = {styles.textLabel}>Name</Text>
              <TextInput style ={styles.textInput}></TextInput>
    
              <Text style = {styles.textLabel}>Role</Text>
              <TextInput style ={styles.textInput}></TextInput>
    
              <Text style = {styles.textLabel}>Password</Text>
              <TextInput style ={styles.textInput}></TextInput>
            </View>

            <View style = {styles.buttonContainer}>
            <TouchableNativeFeedback>
              <View  style = {styles.buttons}>
                <Text style = {styles.buttonText}>ADD/UPDATE</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View  style = {styles.buttons1}>
                <Text style = {styles.buttonText}>DELETE</Text>
              </View>
            </TouchableNativeFeedback>
            </View>

          </View>

          {/**For Table part */}
          <View style = {styles.TableContainer}>
            <View style = {styles.searchBar}>
              <TextInput style = {styles.searchBarInput}></TextInput>
              <Text>🔍</Text>
            </View>

            <View style = {styles.TableValContainer}>
                <View style={styles.tableHeader}>
                   <Text style={styles.tableHeaderCell}>Name</Text>
                   <Text style={styles.tableHeaderCell}>Password</Text>
                   <Text style={styles.tableHeaderCell}>Roles</Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Kenneth John</Text>
                  <Text style={styles.tableCell}>********</Text>
                  <Text style={styles.tableCell}>Admin</Text>
                </View>

            </View>
          </View>
   
       </View>
  );
}

const styles = StyleSheet.create({
  categorysettercontainer:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:'center',
      padding: 20,
  },

  InputContainer:{
    flex:1,
    height:'100%',
    justifyContent:"flex-start",
    backgroundColor:"#F6CEE4",
    borderRadius:10,
    padding:20,
  },

  textInput:{
    backgroundColor:"white",
    width:"90%",
    marginVertical:10
  },

  textLabel:{
    fontFamily:"Inter",
    fontSize:20,
    marginTop:20,
  },

  createLabel:{
    fontSize:30,
    fontWeight:"bold",
    
  },

  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    padding:30,
    borderRadius:20,
  },

  buttons:{
    padding: 20,
    borderRadius:5,
    backgroundColor:"green"
  },

  buttons1:{
    padding: 20,
    borderRadius:5,
    backgroundColor:"red"
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
  },

  TableContainer:{
    flex:2,
    height:'100%',
    alignItems:"center",
    justifyContent:"flex-start",
    borderRadius:15,
    borderWidth:1,
    margin:10
  },

  searchBar:{
    width:"98%",
    backgroundColor:"#D9D9D9",
    margin:20,
    padding:5,
    borderRadius:10,
    flexDirection:"row",
  },

  searchBarInput:{
    flex:2,
  },

  TableValContainer:{
    flex:1,
    backgroundColor:"#d9d9d9",
    width:'98%',
    marginBottom:10,
    borderRadius:15,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },



})
