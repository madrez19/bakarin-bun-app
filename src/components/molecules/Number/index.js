import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NumberFormatBase } from 'react-number-format';

const Number = ({ number, type, style }) => {
    if (type === 'decimal') {
        return (
            <NumberFormatBase
                value={number}
                displayType="text"
                renderText={(value) => <Text style={style}>{value}</Text>}
                decimalSeparator="."
                decimalScale={1}
                fixedDecimalScale

            />
        )

    }
    return (
        <NumberFormatBase
            value={number}
            thousandSeparator="."
            displayType="text"
            prefix="Rp "
            renderText={value => <Text style={style}>{value}</Text>}
            decimalSeparator=","
        />
    )
}

export default Number;

const styles = StyleSheet.create({});