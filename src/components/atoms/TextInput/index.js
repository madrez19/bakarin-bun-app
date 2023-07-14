import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = ({ label, placeholder, ...restProps }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder} {...restProps} />
        </View>
    );
};

export default TextInput

const styles = StyleSheet.create({
    label: { fontSize: 14, fontFamily: 'Poppins-Regular', color: '#306934' },
    input: { borderWidth: 1, borderColor: '#020202', borderRadius: 100, padding: 10 },
});