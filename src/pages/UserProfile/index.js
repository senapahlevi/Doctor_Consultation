/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Profile } from '../../components';
const UserProfile = () => {
    return (
        <View>
            <Header title="Profile" />

            <Profile />
            <Text> ini Userprofile</Text>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({})
