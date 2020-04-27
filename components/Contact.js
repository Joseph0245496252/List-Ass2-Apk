import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'


function Contact({ name, phone }) {
    return (<View style={styles.container}>

        <View >
            <Image source={require('../assets/rep5.jpg')} style={styles.image} />

        </View>

        <View style={styles.infoContainer}>

            <View style={styles.textInputConetainer}>
                <Text style={[styles.name, styles.input]} numberOfLines={1}>{name}</Text>
                <Text>{phone}</Text>


                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="Image" />

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder="5 years old" />

                <View style={styles.iconInput}>
                    <SimpleLineIcons style={styles.icon} name="diamond" size={15} color="#aaaaaa" marginTop={10} />

                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Dr. Reppy" />
                </View>
            </View>



        </View>



        {/* <View style={styles.icon}>
            <MaterialCommunityIcons name="message-processing" size={25} color="#009cf5" />
        </View>

        <View style={styles.icon}>
            <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8"/>
        </View> */}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        paddingTop: 35,
        flexDirection: "row",
        marginHorizontal: 10,
        alignItems: "center",

    },

    image: {
        width: 150,
        height: 160,
        borderRadius: 5,
    },

    infoContainer: {
        justifyContent: "center",
        flex: 4,
        marginRight: 20,


    },

    textInputConetainer: {
        backgroundColor: "white",
        borderRadius: 10,


    },

    input: {
        marginLeft: 15,

    },

    icon: {
        marginTop: 8,

    },

    name: {
        fontWeight: "bold",
        fontSize: 17,
        color: "blue",
        marginBottom: -10,


    },


    iconInput: {
        flexDirection: "row",
        marginLeft: 10,
        marginBottom: 10,

    }
})

export default Contact;
