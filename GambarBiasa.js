
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';

const Avatar = props =>{
    return(
        <View>
            <Image 
            source={{
                uri:props.gambar,
            }}
            style= {{width:100,height:100}}
                 resizeMode={'cover'}
            />
            <Text>{props.judul}</Text>
        </View>
    );
};

const Test = () => {
    return (
        <View>
           <Avatar 
           judul="marco reuss"
           gambar="https://reactnative.dev/img/tiny_logo.png"
           />
           <Avatar judul="sancho"
           gambar= "https://pict-a.sindonews.net/dyn/620/pena/news/2020/08/11/11/129252/kesabaran-habis-dortmund-padtikan-sancho-bertahan-jvd.jpg"/>
            <Avatar judul="apw"/>
            <View>
                <Dinamis/>
            </View>
        </View>
        
    )
}

const Dinamis = () =>{
    const [number,setNumber] = useState(0);
    return (
        <View>
            <Text> {number}</Text>
            <Button title="bertambah nihs" onPress= {()=> setNumber(number + 1)}/>
            
            <Button title="Reset" onPress={()=> setNumber(number*0)} />
        </View>
    )
}

export default Test;
