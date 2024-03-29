import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ text, color = '#306934', textColor = 'white', onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text(textColor)}>{text}</Text>
            </View>
        </TouchableOpacity>

    );
};

export default Button;

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        padding: 12,
        borderRadius: 100
    }),
    text: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: color,
        textAlign: 'center',
    }),
});