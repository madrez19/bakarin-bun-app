import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcBack } from '../../../assets';

const Header = ({ title, subTitle, onBack }) => {
    return (
        <View style={styles.container}>{
            onBack && (
                <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
                    <View style={styles.back}>
                        <IcBack />
                    </View>
                </TouchableOpacity>
            )}

            <View>
                <Text style={styles.title}>{title}</Text>
                {subTitle &&
                    <Text style={styles.subTitle}>{subTitle}</Text>
                }
            </View>
        </View >
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: { fontSize: 22, fontFamily: 'Poppins-Medium', color: '#306934' },
    subTitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' },
    back: {
        padding: 13,
        marginRight: 13,
        marginLeft: -15,
    },
});