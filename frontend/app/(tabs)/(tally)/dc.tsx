import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback , TouchableOpacity, FlatList} from 'react-native';

const data = [
  { "id": 1,"Allocated":0,"class": "OS","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 2,"Allocated":0,"class": "P4","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 3,"Allocated":0,"class": "P3","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 4,"Allocated":0,"class": "P2","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 5,"Allocated":0,"class": "P1","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 6,"Allocated":0,"class": "US","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 7,"Allocated":0,"class": "SQ","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 8,"Allocated":0,"class": "CB","Bags": 0, "Heads": 0, "Kgs": 0},
  { "id": 9,"Allocated":0,"class": "Total","Bags": 0, "Heads": 0, "Kgs": 0}
]


export default function TallyDC() {


  return (
    <View style={ styles.DC_container  }
    >
      <View style={ styles.Display_container  }>
        
        <View style = {styles.CustomerInputContainer}>
          <Text style= {styles.CurrentCustomerText}>Current Customer</Text>
          <View style = {styles.Name_RefreshContainer}>
            <TextInput   style = {styles.Customer_TextInput}></TextInput>
            <View style={styles.Refresh}>
              <Text>Refresh</Text>
            </View>
          </View>
        </View>

        <View style = {styles.TableContainer}>
          <View style = {styles.Header}>
              <Text style ={styles.Heading1}>ALLOCATED BAGS</Text>
              <Text style ={styles.Heading}>CLASS</Text>
              <Text style ={styles.Heading}>BAGS</Text>
              <Text style ={styles.Heading2}>HEADS</Text>
              <Text style ={styles.Heading2}>KGS</Text>
          </View>

          <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => {
                const isLastRow = index === data.length - 1;
                return (
                  <View style={styles.CustomerTable}>
                    <Text style={[styles.cellYellow, isLastRow && styles.cellGreen]}>{item.Allocated}</Text>
                    <Text style={[styles.cellPink, isLastRow && styles.cellGreen]}>{item.class}</Text>
                    <Text style={[styles.cellPink, isLastRow && styles.cellGreen]}>{item.Bags}</Text>
                    <Text style={[styles.cellPink1, isLastRow && styles.cellGreen1]}>{item.Heads}</Text>
                    <Text style={[styles.cellPink1, isLastRow && styles.cellGreen1]}>{item.Kgs}</Text>
                  </View>
                );
              }}
            />
        
        </View>

        <View style ={styles.RecapTransferContainer}>
          <TouchableNativeFeedback style={styles.Recap}>
           <View style={styles.Recap}>
              <Text style = {styles.RecapTransferButtonText}>RECAP</Text>
          </View>
          </TouchableNativeFeedback>

         <TouchableNativeFeedback>
            <View style={styles.Transfer}>
              <Text style = {styles.RecapTransferButtonText}>TRANSFER</Text>
            </View>
        </TouchableNativeFeedback>
        </View>

      </View>

      {/***/}
      <View style={ styles.Tallier_container}>
        
          <Text style = {styles.TallierText}>TALLIER</Text>

          <View style = {styles.TallierInputContainer}>
           <TextInput   style = {styles.Tallier_TextInput}>OS</TextInput>
            <TextInput style = {styles.Tallier_TextInput}>15</TextInput>
           <TextInput style = {styles.Tallier_TextInput}>0</TextInput>
          </View>

          <TouchableNativeFeedback onPress={() => console.log("Clear")} >
            <View style={styles.TallierClear}>
              <Text style = {styles.TallierButtonText}>CLEAR</Text>
            </View>
          </TouchableNativeFeedback>

        <View style={styles.keypad}>
          {[
            ["7", "8", "9"],
            ["4", "5", "6"],
            ["1", "2", "3"],
            ["0", ".", "<-"],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.button}
                  onPress={() => console.log(key === "<-" ? "back" : key)}
                >
                  <Text style={styles.buttonText}>{key}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          </View>

         <TouchableNativeFeedback onPress={() => console.log("Enter")} >
            <View style={styles.TallierEnter}>
              <Text style = {styles.TallierButtonText}>ENTER</Text>
            </View>
          </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DC_container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding:15,
  },

  /* Tally Table Display*/
  Display_container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 10,
  },

  CustomerInputContainer:{
    width:"90%",
    flexDirection:'column',
  },

  Name_RefreshContainer:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom:5,
  },

  CurrentCustomerText:{
    fontSize:15,
    fontFamily: "Inter",
    fontWeight:700,
    paddingBottom:5,
  },

  Refresh:{
    height:"100%",
    width:"10%",
    flexDirection:'column',
    backgroundColor:"grey",
    marginLeft: 10,
  },

  Customer_TextInput:{
    width: "95%",
    fontSize:15,
    fontFamily: "Inter",
    backgroundColor: "white",
    borderRadius:5,
    borderColor:"#000",
    borderWidth:1,
  },

  TableContainer:{
    height:"76%",
    width:"97%",
    borderColor: "black",
    borderWidth:1,
    borderRadius:10,
    padding:5,
  },

  Header:{
    height:"10%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    
  },

  Heading:{
    width:"15%",
    textAlign:"center",
    fontWeight:700,
    
  },

  Heading2:{
    width:"20%",
    textAlign:"center",
    fontWeight:700,
  },

  Heading1:{
    width:"15%",
    fontSize:12,
    textAlign:"center",
    color:"#D32976",
    fontWeight:700,
    
  },

  CustomerTable: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:5,
    height:24
    
  },
  
  cellYellow:{
    width: "15%",
    textAlign: "center",
    backgroundColor:"#FBF77F",
    borderRadius:5,
    fontSize:15,
    fontWeight:700,
  },

  cellPink:{
    width: "15%",
    textAlign: "center",
    backgroundColor:"#F6CEE4",
    borderRadius:5,
    fontSize:15,
    fontWeight:700,
  },

  cellPink1:{
    width: "20%",
    textAlign: "center",
    backgroundColor:"#F6CEE4",
    borderRadius:5,
    fontSize:15,
    fontWeight:700,
  },

  cellGreen:{
    width: "15%",
    textAlign: "center",
    backgroundColor:"#AFFB7F",
    borderRadius:5,
    fontSize:15,
    fontWeight:700,
  },


  cellGreen1:{
    width: "20%",
    textAlign: "center",
    backgroundColor:"#AFFB7F",
    borderRadius:5,
    fontSize:15,
    fontWeight:700,
  },



  RecapTransferContainer:{
    flexDirection:'row',
    alignSelf:"flex-start",
    padding:5,
  },

  Recap:{
    backgroundColor:"#2951D3",
    borderRadius:10,
    padding:10,
    paddingHorizontal:15,
    margin:5,
  },

  Transfer:{
    backgroundColor:"#D3292C",
    borderRadius:10,
    padding:10,
    paddingHorizontal:25,
    margin:5,
  },

  RecapTransferButtonText:{
    color:"#fff",
    textAlign:"center",
    fontSize:12,
    fontFamily: "Inter",
    fontWeight:700,
  },


  /* Tallier Encoder Part(Calculator like)*/
  Tallier_container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },

  TallierText: {
    height: "10%",
    width: "100%",
    alignSelf:"flex-start",
    fontSize:27,
    fontFamily: "Inter",
    fontWeight:700,
    fontStyle: "italic",
  },

  TallierInputContainer: {
    height: "20%",
    width:"100%",
    backgroundColor: "#F6CEE4",
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom:5,
  },

  Tallier_TextInput:{
    width: "25%",
    fontSize:32,
    fontFamily: "Inter",
    fontWeight:700,
    fontStyle: "italic",
    backgroundColor: "white",
    textAlign:"center",
    borderRadius:5,
    borderColor:"#000",
    borderWidth:2,
  },

  TallierClear:{
    width: "95%",
    backgroundColor:"#D3292C",
    borderRadius:10,
    margin:5,
  },

  TallierEnter:{
    width: "95%",
    backgroundColor:"#45D329",
    borderRadius:10,
    margin:5,
  },

  TallierButtonText:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,
    fontFamily: "Inter",
    fontWeight:500,
    padding:5,
  },

  keypad: {
    width:"95%",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap:5,
  },
  button: {
    width:"30%",
    margin: 5,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  
  buttonText: {
    fontSize: 40,
    color: "black",
    fontWeight:"bold",
    fontFamily:"Inter",
  },

  
})
