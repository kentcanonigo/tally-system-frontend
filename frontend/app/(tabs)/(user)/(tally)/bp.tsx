import React, { useState } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback, TouchableOpacity, FlatList } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';




export default function TallyBP() {

  const Tallier = () => {

    const initialData = [
      { id: 1, Allocated: 0, class: 'LV', Bags: 0, Kgs: 0 },
      { id: 2, Allocated: 0, class: 'GZ', Bags: 0, Kgs: 0 },
      { id: 3, Allocated: 0, class: 'SI', Bags: 0, Kgs: 0 },
      { id: 4, Allocated: 0, class: 'FT', Bags: 0, Kgs: 0 },
      { id: 5, Allocated: 0, class: 'PV', Bags: 0, Kgs: 0 },
      { id: 6, Allocated: 0, class: 'HD', Bags: 0, Kgs: 0 },
      { id: 7, Allocated: 0, class: 'BLD', Bags: 0, Kgs: 0 },
      { id: 8, Allocated: 0, class: 'Total', Bags: 0, Kgs: 0 },
    ];

    const [data, setData] = useState(initialData);
    const [heads, setHeads] = useState('15');
    const [kgs, setKgs] = useState('0');
    const [activeInput, setActiveInput] = useState<'heads' | 'kgs'>('kgs');

    const [open, setOpen] = useState(false);
    const firstClass = data.filter(item => item.class !== 'Total')[0].class;
    const [bpclass, setBpClass] = useState<string>(firstClass);

    const handleKeyPress = (key: string) => {
      const currentValue = activeInput === 'heads' ? heads : kgs;
      const setter = activeInput === 'heads' ? setHeads : setKgs;
    
      let newValue = currentValue;
    
      if (key === '<-') {
        // Handle backspace for both inputs
        newValue = currentValue.slice(0, -1);
        if (newValue === '') {
          newValue = activeInput === 'heads' ? '15' : '0';
        }
      } else if (activeInput === 'heads') {
        
        newValue = currentValue === '15' ? key : currentValue + key;
      } else {

        if (key === '.') {
          if (!currentValue.includes('.')) {
            newValue = currentValue === '0' ? '0.' : currentValue + '.';
          }
        } else {
          if (currentValue === '0') {
            newValue = key;
          } else {
            const parts = currentValue.split('.');
            if (parts.length < 2 || parts[1].length < 2) {
              newValue = currentValue + key;
            }
          }
        }
      }
    
      setter(newValue);
    };
    
    const handleClear = () => {
      activeInput === 'heads' ? setHeads('15') : setKgs('0');
    };

    const handleEnter = () => {

      if (!bpclass || 
        !heads.trim() || 
        !kgs.trim() || 
        parseInt(heads) <= 0 || 
        parseFloat(kgs) <= 0
    ) {
      return; 
    }

      const headsValue = parseInt(heads, 10) || 0;
      const kgsValue = parseFloat(kgs).toFixed(2);
      

      setData(prevData => {
        const newData = prevData.map(item => ({ ...item }));
        
        // Update selected row
        const selectedRow = newData.find(item => item.class === bpclass);
        if (selectedRow) {
          selectedRow.Bags += 1;
          selectedRow.Kgs += parseFloat(kgsValue);
        }

        const totalRow = newData.find(item => item.class === 'Total');
        if (totalRow) {
          totalRow.Bags = newData
            .filter(item => item.class !== 'Total')
            .reduce((sum, item) => sum + item.Bags, 0);
            
          totalRow.Kgs = newData
            .filter(item => item.class !== 'Total')
            .reduce((sum, item) => sum + item.Kgs, 0);
        }

        return newData;
      });
       setHeads('15');
       setKgs('0');
    };
  
  return (
    <View style={styles.BP_container}>
      <View style={styles.Display_container}>
        <View style={styles.CustomerInputContainer}>
          <Text style={[styles.CurrentCustomerText]}>Current Customer</Text>
          <View style={styles.Name_RefreshContainer}>
            <TextInput style={styles.Customer_TextInput}></TextInput>
            <View style={styles.Refresh}>
              <Text>Refresh</Text>
            </View>
          </View>
        </View>


        <View style={styles.TableContainer}>

  {/* Header Section */}
  <View style={styles.Header}>
    <Text style={[styles.Heading1, styles.HeadingText]}>ALLOCATED BAGS</Text>
    <Text style={[styles.Heading, styles.HeadingText1]}>CLASS</Text>
    <Text style={[styles.Heading, styles.HeadingText1]}>BAGS</Text>
    <Text style={[styles.Heading2, styles.HeadingText1]}>KGS</Text>
  </View>

   {/* Table Rows Section */}
   <FlatList
     data={data}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({ item, index }) => {
       const isLastRow = index === data.length - 1;
       return (
         <View style={styles.CustomerTable}>
           <Text style={[styles.cellYellow, styles.cellText, isLastRow && styles.cellGreen]}>
              {item.Allocated}
            </Text>
           <Text style={[styles.cellPink, styles.cellText, isLastRow && styles.cellGreen]}>
              {item.class}
           </Text>
           <Text style={[styles.cellPink, styles.cellText, isLastRow && styles.cellGreen]}>
             {item.Bags}
           </Text>
           <Text style={[styles.cellPink1, styles.cellText, isLastRow && styles.cellGreen1]}>
             {item.Kgs.toFixed(2)}
           </Text>
         </View>
       );
      }}
    />
  </View>

        <View style={styles.RecapTransferContainer}>
          <TouchableNativeFeedback style={styles.Recap}>
            <View style={styles.Recap}>
              <Text style={styles.RecapTransferButtonText}>RECAP</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View style={styles.Transfer}>
              <Text style={styles.RecapTransferButtonText}>TRANSFER</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>

      {/***/}
      <View style={styles.Tallier_container}>
        <Text style={styles.TallierText}>TALLIER</Text>

        <View style={styles.TallierInputContainer}>
            <View style={styles.Tallier_TextInput}>
              <DropDownPicker
                open={open}
                value={bpclass}
                items={data
                  .filter((item) => item.class !== 'Total') // Remove "Total"
                  .map((item) => ({
                   label: item.class,
                    value: item.class,
                  }))
                }
                setOpen={setOpen}
                setValue={setBpClass}
                style={styles.DDStyle}
                textStyle={styles.DDText}
                listItemLabelStyle={styles.DDItemLabel}
                dropDownContainerStyle={styles.DDContainer}
                
             />
           </View>
        <TextInput 
            style={styles.Tallier_TextInput} 
            value={heads}
            onPressIn={() => setActiveInput('heads')}
            showSoftInputOnFocus={false}
          />
          <TextInput 
            style={styles.Tallier_TextInput} 
            value={kgs}
            onPressIn={() => setActiveInput('kgs')}
            showSoftInputOnFocus={false}
          />
        </View>

        <TouchableNativeFeedback onPress={handleClear}>
          <View style={styles.TallierClear}>
            <Text style={styles.TallierButtonText}>CLEAR</Text>
          </View>
        </TouchableNativeFeedback>

        <View style={styles.keypad}>
          {[
            ['7', '8', '9'],
            ['4', '5', '6'],
            ['1', '2', '3'],
            ['0', '.', '<-'],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.button}
                  onPress={() =>  handleKeyPress(key === '<-' ? '<-' : key)}
                >
                  <Text style={styles.buttonText}>{key}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <TouchableNativeFeedback onPress={handleEnter}>
          <View style={styles.TallierEnter}>
            <Text style={styles.TallierButtonText}>ENTER</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
return <Tallier />;
}

const baseStyles = StyleSheet.create({

    baseText: {
      fontFamily: 'Inter',
      fontWeight: '700',
    },

  buttonBase: {
    borderRadius: 10,
    margin: 5,
    padding:10,
  },

  inputBase: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


const styles = StyleSheet.create({

  BP_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 15,
  },

  /* Tally Table Display*/
  Display_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 10,
  },

  CustomerInputContainer: {
    width: '90%',
    flexDirection: 'column',
    marginBottom:5,
  },

  Name_RefreshContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 5,
  },

  CurrentCustomerText: {
    paddingBottom: 5,
    ...baseStyles.baseText
  },

  Refresh: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'grey',
    marginLeft: 10,
  },

  Customer_TextInput: {
    width: '95%',
    fontSize: 15,  
    ...baseStyles.inputBase,
    ...baseStyles.baseText,
  },

  TableContainer: {
    width: '97%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,  
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  
  Header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 5,  
  },
  
  Heading: {
    width: '15%',
  },
  
  Heading2: {
    width: '20%',
  },
  
  Heading1: {
    width: '15%',
    color: '#D32976',
  },
  
  HeadingText: {
    fontSize: RFValue(8),  
    textAlign: 'center',
    marginVertical:10,
    ...baseStyles.baseText,
  },

  HeadingText1: {
    fontSize: RFValue(12),  
    textAlign: 'center',
    marginVertical:10,
    marginTop: 10,
    ...baseStyles.baseText,
  },
  
  CustomerTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,  
    width: '100%',
    textAlign: 'center',
  },
  
  cellYellow: {
    width: '15%',
    backgroundColor: '#FBF77F',
  },
  
  cellPink: {
    width: '15%',
    backgroundColor: '#F6CEE4',
  },
  
  cellPink1: {
    width: '20%',
    backgroundColor: '#F6CEE4',
  },
  
  cellGreen: {
    width: '15%',
    backgroundColor: '#AFFB7F',
  },
  
  cellGreen1: {
    width: '20%',
    backgroundColor: '#AFFB7F',
  },
  
  cellText: {
    textAlign: 'center',
    fontSize: RFValue(17), 
    ...baseStyles.baseText,
    borderRadius: 5,
  },

  RecapTransferContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 5,
  },

  Recap: {
    backgroundColor: '#2951D3',
    ...baseStyles.buttonBase,
    paddingHorizontal: 15,
    
  },

  Transfer: {
    backgroundColor: '#D3292C',
    ...baseStyles.buttonBase,
    paddingHorizontal: 25,
  },

  RecapTransferButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: RFValue(9),
    ...baseStyles.baseText
  },

  /* Tallier Encoder Part(Calculator like)*/
  Tallier_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },

  TallierText: {
    height: '10%',
    width: '100%',
    alignSelf: 'flex-start',
    fontSize: RFValue(20),
    fontStyle: 'italic',
    ...baseStyles.baseText,
  },

  TallierInputContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: '#F6CEE4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
  },

  Tallier_TextInput: {
    width: '25%',
    fontSize: RFValue(25),
    fontStyle: 'italic',
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    ...baseStyles.baseText
  },

  TallierClear: {
    width: '95%',
    backgroundColor: '#D3292C',
    ...baseStyles.buttonBase,
  },

  TallierEnter: {
    width: '95%',
    backgroundColor: '#45D329',
    ...baseStyles.buttonBase,
  },

  TallierButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: RFValue(10),
    padding: 5,
    ...baseStyles.baseText
  },

  keypad: {
    width: '95%',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  button: {
    width: '30%',
    margin: 5,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonText: {
    fontSize: RFValue(30),
    color: 'black',
    ...baseStyles.baseText
  },

  /*For DropDown */

  DDStyle:{
    borderWidth: 0,
   backgroundColor: 'transparent',
  },

  DDText:{
   fontSize: RFValue(25),        
   fontStyle: 'italic',
   textAlign: 'center',
  fontWeight: '700',
  padding:5,
  },
 DDItemLabel:{
  fontSize: RFValue(13),      
  fontWeight: '700',  
  },
  DDContainer:{
    borderColor: '#000',
    borderWidth: 1,
  },

});