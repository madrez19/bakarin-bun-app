import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';

const Select = ({ label, value, onSelectChange }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) =>
                        onSelectChange(itemValue)
                    }
                >
                    <Picker.Item label="Bogor" value="Bogor" />
                    <Picker.Item label="Jakarta" value="Jakarta" />
                    <Picker.Item label="Tangerang" value="Tangerang" />
                    <Picker.Item label="Depok" value="Depok" />
                    <Picker.Item label="Bekasi" value="Bekasi" />
                    <Picker.Item label="Bandung" value="Bandung" />
                    <Picker.Item label="Surabaya" value="Surabaya" />
                    <Picker.Item label="Jogja" value="Jogja" />
                    <Picker.Item label="Bali" value="Bali" />
                </Picker>
            </View>
        </View>
    );
};

export default Select

const styles = StyleSheet.create({
    label: { fontSize: 14, fontFamily: 'Poppins-Regular', color: '#306934' },
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 100,
        paddingHorizontal: 2,
        paddingVertical: 0,
    },
});