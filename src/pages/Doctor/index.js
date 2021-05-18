/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, HomeProfile } from '../../components';
import RatedDoctor from '../../components/molecules/RatedDoctor';
/*
            
<DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
*/
const Doctor = () => {
    return (
        <View>
            <HomeProfile />
            <Text>
                Mau Konsultasi dengan
                siapa hari ini ?
            </Text>
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <Text>
                Top Rated Doctor
            </Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text> Goof news </Text>
        </View>
    );
};

export default Doctor;

const styles = StyleSheet.create({

});
