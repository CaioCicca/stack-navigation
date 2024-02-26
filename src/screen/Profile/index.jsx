import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import React from 'react'

const Perfil = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.text}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Perfil