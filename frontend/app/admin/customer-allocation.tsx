import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback, TouchableOpacity, FlatList } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';
import { Link } from 'expo-router';
import ApiTester from './apitester';

export default function adminCXAllocation() {

  const dressedChickenData = [
    { id: 1, class: 'OS', Bags: '12' },
    { id: 2, class: 'P4', Bags: '8' },
    { id: 3, class: 'P3', Bags: '10' },
    { id: 4, class: 'P2', Bags: '6' },
    { id: 5, class: 'P1', Bags: '7' },
    { id: 6, class: 'US', Bags: '9' },
    { id: 7, class: 'SQ', Bags: '5' },
    { id: 8, class: 'CB', Bags: '11' },
    { id: 9, class: 'Total', Bags: '68' },
  ];
  
  const byProductsData = [
    { id: 1, class: 'LV', Bags: '15' },
    { id: 2, class: 'GZ', Bags: '15' },
    { id: 3, class: 'SI', Bags: '15' },
    { id: 4, class: 'FT', Bags: '15' },
    { id: 5, class: 'PV', Bags: '15' },
    { id: 6, class: 'HD', Bags: '15' },
    { id: 7, class: 'BLD', Bags: '15' },
    { id: 8, class: 'Total', Bags: '105' },
  ];  

  return (
    
    <View style={styles.adminCXAllocation_container}>
      <View style={styles.Display_container}>
        <View style={styles.CustomerInputContainer}>
          <Text style={[styles.CustomerNameText]}>Customer Name: </Text>
          <TextInput style={styles.CustomerName}></TextInput>
          <View style={styles.Status_AllocateContainer}>
          <Text style={[styles.StatusText]}>Status: </Text>
            <TextInput style={styles.Status}></TextInput>
            <TouchableNativeFeedback style={styles.Allocate}>
            <View style={styles.Allocate}>
              <Text style={styles.AllocateTransferButtonText}>ALLOCATE</Text>
            </View>
            </TouchableNativeFeedback>             
          </View>
        </View>

        <View style={styles.CustomerListTable}>
        </View>
      </View>
  
    
      <View style={styles.Table1_container}>
        <Text style={[styles.HeadingTop1]}> DRESSED CHICKEN </Text>

        {/* DC TABLE */}
        <View style={styles.DCTableContainer}>
        {/* Header Section */}
        <View style={styles.Header}>
          <Text style={[styles.Heading, styles.HeadingText1]}>CLASS</Text>
          <Text style={[styles.Heading, styles.HeadingText2]}>BAGS</Text>
        </View>
        {/* Table Rows Section */}
        <FlatList
          data={dressedChickenData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const isLastRow = index === dressedChickenData.length - 1;
            return (
              <View style={styles.CustomerTable}>
                <Text style={[styles.cellPink, styles.cellText, isLastRow && styles.cellGreen]}>
                  {item.class}
                </Text>
                <Text style={[styles.cellYellow, styles.cellText, isLastRow && styles.cellGreen1]}>
                  {item.Bags}
                </Text>
              </View>
            );
          }}
        />
        </View>
      </View>

      <View style={styles.Table1_container}>
        <Text style={[styles.HeadingTop2]}> BY-PRODUCTS </Text>

        {/* BP TABLE */}
        <View style={styles.BPTableContainer}>
        {/* Header Section */}
        <View style={styles.Header}>
          <Text style={[styles.Heading, styles.HeadingText1]}>CLASS</Text>
          <Text style={[styles.Heading, styles.HeadingText2]}>BAGS</Text>
        </View>
        {/* Table Rows Section */}
        <FlatList
          data={byProductsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const isLastRow = index === byProductsData.length - 1;
            return (
              <View style={styles.CustomerTable}>
                <Text style={[styles.cellPink, styles.cellText, isLastRow && styles.cellGreen]}>
                  {item.class}
                </Text>
                <Text style={[styles.cellYellow, styles.cellText, isLastRow && styles.cellGreen1]}>
                  {item.Bags}
                </Text>
              </View>
            );
          }}
        />
        </View>
      </View>
    </View>
    );
  };
  
  const baseStyles = StyleSheet.create({
  
    baseText: {
      fontFamily: 'Inter',
      fontWeight: '700'
    },
  
    baseText1: {
      fontFamily: 'Inter',
      fontWeight: '600'
    },

    buttonBase: {
      borderRadius: 10,
      marginLeft: 10,
      padding:10
    },
  
    inputBase: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#000',
      borderWidth: 1
    },
  
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
  });
  
  
  const styles = StyleSheet.create({
  
    adminCXAllocation_container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 15,
      backgroundColor: 'rgba(246, 206, 228, 0.5)', 
      margin: 20,
      borderRadius: 30
    },
  
    /* CX Allocation Page Display*/
    Display_container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      margin: 20,
      marginLeft: 30,
      marginRight: 150
    },
  
    CustomerInputContainer: {
      width: '100%',
      flexDirection: 'column',
      marginBottom:20,
    },
  
    Status_AllocateContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 20,
      marginBottom: 5,
    },
  
    CustomerNameText: {
      paddingBottom: 5,
      fontSize: 15,
      ...baseStyles.baseText1
    },
  
    CustomerName: {
      width: '130%',
      fontSize: 17,  
      ...baseStyles.inputBase,
      ...baseStyles.baseText1,
    },

    StatusText: {
      marginTop: 7,
      fontSize: 17,
      marginRight: 5,
      ...baseStyles.baseText1
    },

    Status: {
      width: '70%',
      height: '90%',
      fontSize: 15,  
      ...baseStyles.inputBase,
      ...baseStyles.baseText1,
    },

    Allocate: {
      backgroundColor: '#45D329',
      ...baseStyles.buttonBase,
      marginLeft: 20
    },
  
    AllocateTransferButtonText: {
      color: 'black',
      textAlign: 'center',
      fontSize: RFValue(9),
      ...baseStyles.baseText
    },
  
    CustomerListTable: {
      height: '73%',
      width: '130%',
      backgroundColor: '#D32976',
      borderRadius: 10
    },


    /* 2 Table Part */
    Table_container: {
      width: '80%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },

    Table1_container: {
      width: '80%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginLeft: 40,
    },

    HeadingTop1: {
      height: '8%',
      width: '100%',
      alignSelf: 'flex-start',
      fontSize: RFValue(16),
      ...baseStyles.baseText,
    },

    HeadingTop2: {
      height: '8%',
      width: '100%',
      alignSelf: 'flex-start',
      fontSize: RFValue(16),
      marginLeft: 30,
      ...baseStyles.baseText,
    },

    DCTableContainer: {
      height: '85%',
      width: '90%',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,  
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    
    BPTableContainer: {
      height: '85%',
      width: '90%',
      borderColor: 'black',
      borderWidth: 2,
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
      width: '50%',
    },

    HeadingText1: {
      fontSize: RFValue(12),  
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 10,
      ...baseStyles.baseText,
    },
    
    HeadingText2: {
      fontSize: RFValue(12),  
      textAlign: 'left',
      marginLeft: 25,
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
      width: '50%',
      backgroundColor: '#FBF77F',
      marginRight: 5
    },
    
    cellPink: {
      width: '30%',
      backgroundColor: '#F6CEE4',
      marginLeft: 5
    },
    
    cellGreen: {
      width: '30%',
      backgroundColor: '#AFFB7F',
      marginLeft: 5
    },
    
    cellGreen1: {
      width: '50%',
      backgroundColor: '#AFFB7F',
      marginRight: 5
    },
    
    cellText: {
      textAlign: 'center',
      fontSize: RFValue(17), 
      ...baseStyles.baseText,
      borderRadius: 5,
    },

  });