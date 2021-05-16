import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './Cart';
import Product from './ProductM';

const Communicat = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    /*
    jadi intinya nanti prodduct make onButtonPress karena yang butuh siapa gitu 
    kalo kita make state di cart nya bikin fungsi malah bingung 
    yaitu manggil komponen Cart kuantiti = dan Product onButtonPress =
    */
    return (
        <View style={styles.container}>
            <Text>Materi komunikasi antar komponent</Text>
            <Cart kuantiti = {totalProduct}/>
            <Product onButtonPress={()=> setTotalProduct(totalProduct + 1)}/>
        </View>
    )
}

export default Communicat;

const styles = StyleSheet.create({
    container:{padding:20},
    textTitle:{textAlign:'center'},
})
