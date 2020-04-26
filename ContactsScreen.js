import React from 'react';
import {View, FlatList, Text} from 'react-native'
import Contact from './components/Contact'

function ContactsScreen() {
    const contacts = [
        {name: "Reppy Purpse", number: "024-549-6252"},
        {name: "Christ Matic", number: "054-474-4464"},
        {name: "Ambi Rep", number: "024-569-6997"},
        // {name: "Was Born", number: "054-750-0366"},
        // {name: "Atom Skobi", number: "054-444-4444"},
        // {name: "Cash Money", number: "054-798-5590"},
        // {name: "Reppy", number: "024-549-6252"},
        // {name: "Christ", number: "054-474-4461"},
        // {name: "Ambi", number: "024-569-6992"},
        // {name: "WasBorn", number: "054-750-0363"},
        // {name: "AtomScobi", number: "054-444-4445"},
        // {name: "CashMoney", number: "054-798-5596"},

    ]
    return (
        <View>
            <FlatList 
                data={contacts}
                renderItem={({item})=>{
                    return (
                        <Contact name={item.name} phone={item.number}/>
                    )
                     
                    
                }}
                keyExtractor={(item)=>item.number}
            />
        </View>
    )
}

export default ContactsScreen;
