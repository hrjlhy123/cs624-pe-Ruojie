import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ type, setType }) => {
    return (
        <View style = {styles.container}>
            {['All', 'Active', 'Complete'].map(tab => (
                <TouchableOpacity key = {tab} onPress = {() => setType(tab)}>
                    <Text style = {[styles.tab, type == tab && styles.activeTab]}>
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginVertical: 15,
        backgroundColor: '#eee',
        // shadowOpacity: 0.2,
        // shadowRadius: 1,
        // shadowOffset: {width:1, height: 1},
    },
    tab: {
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        color: "#888",
        fontSize: 16,
        borderWidth: .5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    activeTab: {
        fontWeight: 'bold',
        backgroundColor: '#fff',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {width:1, height: 1},
    },
})

export default TabBar