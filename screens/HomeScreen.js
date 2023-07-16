import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import AppHeader from '../components/AppHeader'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>HomeScreen</Text>

            <Button
                icon="camera"
                mode="contained"
                style={{
                    width: '50%',
                    alignSelf: 'center'
                }}
                onPress={() => navigation.navigate('Settings')
                }>
                Go to Settings
            </Button>

            <Text style={styles.textStyle}>HomeScreen</Text>

            <AppHeader />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24
    }
})