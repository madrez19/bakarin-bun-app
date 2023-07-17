import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { ProfileTabSection } from '../../components';
import { getData, showMessage, storeData } from '../../utils';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { API_HOST } from '../../config';
import Axios from 'axios';

const Profile = ({ navigation }) => {
    const [userProfile, setUserProfile] = useState({});
    useEffect(() => {
        navigation.addListener('focus', () => {
            updateUserProfile();
        });
    }, [navigation]);

    const updateUserProfile = () => {
        getData('userProfile').then((res) => {
            setUserProfile(res);
        });
    };

    const updatePhoto = () => {
        const options = {

            mediaType: 'photo',
            quality: 0.7,
            maxWidth: 200,
            maxHeight: 200
        };

        launchImageLibrary(options, response => {
            console.log('Response = ', response);

            if (response.didCancel || response.errorCode) {
                showMessage('Anda tidak memilih foto');
            } else {
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                };

                const photoForUpload = new FormData();
                photoForUpload.append('file', dataImage);
                getData('token').then((resToken) => {
                    Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                        headers: {
                            Authorization: resToken.value,
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                        .then((res) => {
                            getData('userProfile').then((resUser) => {
                                showMessage('Update Photo Berhasil', 'success');
                                resUser.profile_photo_url = `${API_HOST.storage}/${res.data.data[0]}`;
                                storeData('userProfile', resUser).then(() => {
                                    updateUserProfile();
                                });
                            });
                        })
                        .catch((err) => {
                            showMessage(
                                `${err?.response?.data?.message} on Update Photo API` ||
                                'Terjadi kesalahan di API Update Photo',
                            );
                        });
                });
            }
        },
        );
    };

    return (
        <View style={styles.page}>
            <View style={styles.profileDetail}>
                <View style={styles.photo}>
                    <TouchableOpacity onPress={updatePhoto}>
                        <View style={styles.borderPhoto}>
                            <Image
                                source={{ uri: userProfile.profile_photo_url }}
                                style={styles.photoContainer}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>{userProfile.name}</Text>
                <Text style={styles.email}>{userProfile.email}</Text>
            </View>
            <View style={styles.content}>
                <ProfileTabSection />
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    page: { flex: 1 },
    content: { flex: 1, marginTop: 24 },
    profileDetail: {
        backgroundColor: 'white',
        paddingBottom: 26,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#306934',
        textAlign: 'center',
    },
    email: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center',
    },
    photo: { alignItems: 'center', marginTop: 20, marginBottom: 16, },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110, height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 24,
    },
});