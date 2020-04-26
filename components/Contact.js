import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native'
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons'

function Contact({name, phone}) {
    return ( <View style={styles.container}>

        <View >
            <Image source={require('../assets/rep2.jpg')} style={styles.image}/>
        </View>

        <View style={styles.infoContainer}>

        <View style={styles.textInputConetainer}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <Text>{phone}</Text>

            
            <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Picture" />

            <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="5 years old" />

            <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Dr. Reppy" />
            </View>
          
        </View>

        {/* <View style={styles.icon}>
            <MaterialIcons name="local-phone" size={25} color="#009cf5"/>
        </View>
        
        <View style={styles.icon}>
            <MaterialCommunityIcons name="message-processing" size={25} color="#009cf5" />
        </View>

        <View style={styles.icon}>
            <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8"/>
        </View> */}
</View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ddd",
        paddingTop: 35,
        flexDirection: "row",
        marginHorizontal: 10,
        alignItems: "center",
        
    },

    image:{
        width:150, 
        height:150,
        borderRadius: 5,
       
        
    },

    infoContainer: {
        justifyContent: "center",
        marginHorizontal: 1,
        flex: 4,   
        marginRight: 20,
        
    },

    textInputConetainer:{
        backgroundColor: "white",
        borderRadius: 10,

    },

    name: {
        fontWeight: "bold",
        fontSize: 17,

    },
    icon: {
        flex: 1
        
    }
})

export default Contact;
