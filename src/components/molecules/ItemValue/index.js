import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Number from '../Number';

const ItemValue = ({ label, value, valueColor = '#020202', type, price }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'currency' ? (
                <Text style={styles.value(valueColor)}>Rp {value}</Text>
                // <Number number={value} style={styles.value(valueColor)} />
            ) : (
                <Text style={styles.value(valueColor)}>{value}</Text>
            )}

        </View>
    );
};

export default ItemValue;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#8D92A3',
    },
    value: (color) => ({
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: color
    }),
});