/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { DoctorCategory, Gap, HomeProfile, NewsItem } from '../../components';
import RatedDoctor from '../../components/molecules/RatedDoctor';
import { colors, fonts } from '../../utils';
/*
            
<DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
*/
const Doctor = () => {
    return (
<View style={styles.page}>
    <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={30}/>
            <HomeProfile />
            <Text style={styles.welcome}>
                Mau Konsultasi dengan
                siapa hari ini ?
            </Text>
           
            <View style={styles.wrapperScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.category}>
                        <Gap width={10} />
                        <DoctorCategory />
                        <DoctorCategory />
                        <DoctorCategory />
                        <DoctorCategory />
                        <Gap width={5} />
                    </View>
                </ScrollView>
            </View>
        
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            
            <Text style={styles.sectionLabel}> Goof news</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem /> 
            <Gap height={30}/>
        </ScrollView>
          
    </View>
           
</View>
    );
};

export default Doctor;
     /*
            wrapper scroll untuk mengurangi padding
             kanan kiri/bezel kanan kiri menghalangi jadi 
             gak smooth 
            */
const styles = StyleSheet.create({
    page: {
        backgroundColor:colors.secondary,
        flex:1,
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        paddingVertical:10,
        paddingHorizontal:16,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    welcome:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginBottom:16,
        maxWidth:200,
    },
    category:{
        flexDirection:'row',
    },
    wrapperScroll:{
        marginHorizontal:-16,
    },
    sectionLabel:{
        fontSize:16,
        fontFamily:fonts.primary[300],
        color:colors.text.primary,
        marginTop:10,
        marginBottom:16,
    },

}); 
