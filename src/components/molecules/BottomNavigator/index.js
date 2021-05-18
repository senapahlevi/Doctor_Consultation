/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import TabItem from '../../atoms/Tabitem';

/*
referensi dari TabBar dokumentasi 
label syntax adalah title yang muncul dibottom 
misal messages/hospitals/doctor
*/

const BottomNavigator = ({ state, descriptors, navigation}) => {
    return (
        <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        /*jadi isFocused ini buat mengetahui hasil apakah misal doctor gw klik 
        ini aktif/pasif? nanti ini paramater sebagai parameter pada
        active={} kemudian status nya isFocused sama == index 
        ini dia akan jalan jadi aktif/pasif?
        */
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        //ini make key karena proses pengulangan mapping karena 
        return (
            <TabItem
            key={index}
            title ={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}/>
        );
      })}
    </View>

    );
};

export default BottomNavigator;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:53,
        paddingVertical:12,
        backgroundColor:colors.secondary,
    },
});
