import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Rating from '../Rating';


const FoodCard = ({ image, name, rating, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} />
                <View style={styles.content}>
                    <Text style={styles.text}>{name}</Text>
                    <Rating number={rating} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FoodCard;

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 24
    },
    content: { padding: 12 },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Redular',
        color: '#306934',
    },
});