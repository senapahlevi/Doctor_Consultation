import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Cartpict from './src/assets/Cartpict.jpg';
const Cart = (props) => {
    return (
        <View style = {styles.wrapper}>
            <Text>Materi posisi/cart</Text>
            <View style={styles.cartWrapper}>
                <Image source={Cartpict} style = {styles.iconCart}/>
                <Text style ={styles.notif}>{props.kuantiti}</Text>
            </View>
            <Text style = {styles.text}>keranjang belanja anda</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems:'center'},
    cartWrapper: {
        borderWidth:1,
        borderColor:'green',
        width:93,
        height:93,
        borderRadius:93/2
    },
    text:{
        fontSize:12,color:'grey',fontWeight:'700',marginTop:20
    },
    iconCart:{
        width:50, height:50
    },
    notif:{
        fontSize:12,
        color:'white',
        backgroundColor:'green',
        padding:4,
        borderRadius:25,
        width:24,
        height:24,
        position:'absolute',
        top:0,
        right:0
    },
    
});
