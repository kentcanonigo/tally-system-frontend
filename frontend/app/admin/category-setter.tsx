import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import ApiTester from "./apitester";

export default function categorySetter() {
  return (
    
    <View style = {styles.categorysettercontainer}>

       <View style = {styles.Container}>
         <Text>Create a New Category</Text>

         <Text>Current Product</Text>

         <Text>Category Name</Text>

       </View>

       <View style = {styles.Container}>
          <Text>You are in the Category Setter page</Text>
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

  Container:{
    flex:1,
    height:'100%',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F6CEE4",
    borderRadius:10,
  },


})
