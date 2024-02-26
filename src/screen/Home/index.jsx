import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import React from 'react'



const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Contato')}
            >
                <Text style={styles.text}>Go to Contato</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Perfil')}
            >
                <Text style={styles.text}>Go to Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home