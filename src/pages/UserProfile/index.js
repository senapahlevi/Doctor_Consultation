/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, List, Profile } from '../../components';
const UserProfile = () => {
    return (
        <View>
            <Header title="Profile" />
            <Profile />
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile"/>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile"/>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile"/>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile"/>

            <Text> ini Userprofile</Text>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({})
