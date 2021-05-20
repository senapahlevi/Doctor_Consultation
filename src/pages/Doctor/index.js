/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { DoctorCategory, Gap, HomeProfile, NewsItem } from '../../components';
import RatedDoctor from '../../components/molecules/RatedDoctor';
import { colors, fonts } from '../../utils';
import {JSONCategoryDoctor} from '../../assets';

/*
            
<DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
*/
const Doctor = ({navigation}) => {
    /*
    ini adalah inline state dinamis/biasa make props 
    jadi disini rubah nama category pada doctorCategory
    sehingga disini kita tinggal edit edit lebih rapi 

    nah ada juga make json
                        <DoctorCategory category="umum" />
                        <DoctorCategory category="psikiater" />
                        <DoctorCategory category="obat" />
                        <DoctorCategory category="umum" />
                        <DoctorCategory category="anak" />

    */
    return (
<View style={styles.page}>
    <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapSection}>
                <Gap height = {30} />
                <HomeProfile />
                <Text style={styles.welcome}>
                    Mau Konsultasi dengan siapa hari ini ?
                </Text>
            </View>
                 
            <View style={styles.wrapperScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.category}>
                        <Gap width={30} />
                        {JSONCategoryDoctor.data.map(item => {
                                return <DoctorCategory key={item.id}category={item.category} onPress={()=> navigation.navigate("ChooseDoctor")} />;
                            })
                        }
                        <Gap width={25} />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.wrapSection}>
                <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                <RatedDoctor />
                <RatedDoctor />
                <RatedDoctor />
                
                <Text style={styles.sectionLabel}> Goof news</Text>
            </View>

           
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
    wrapSection:{
        paddingHorizontal:16,
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
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
