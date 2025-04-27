// app/auth/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {RelativePathString, useRouter} from 'expo-router';

export default function AuthScreen() {
    const router = useRouter();

    const handleSelect = (type: 'admin' | 'user') => {
        // Remove SecureStore temporarily
        console.log(`Navigating to /${type}`);
        router.replace(`/${type}` as RelativePathString);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select User Type</Text>
            <View style={styles.buttonContainer}>
                <Button title="Admin" onPress={() => handleSelect('admin')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="User" onPress={() => handleSelect('user')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        marginBottom: 32,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '100%',
        marginVertical: 8,
    },
});
