/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gap, Header, List, Profile } from '../../components';
import { colors } from '../../utils';
const UserProfile = () => {
    return (
        <View style={styles.page}>
            <Header title="Profile" />
            <Gap height={10}/>
            <Profile />
            <Gap height={14}/>
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile"/>
            <List name="Edit Language" desc="Last Update Yesterday" type="next" icon="language"/>
            <List name="Rate Us" desc="Last Update Yesterday" type="next" icon="rate"/>
            <List name="Help Center" desc="Last Update Yesterday" type="next" icon="help"/>

        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
    },
});
