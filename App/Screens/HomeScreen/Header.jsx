import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo'
import color from '../../../utils/color';
import { FontAwesome } from '@expo/vector-icons';
    
export default function Header() {
    const { user, isLoading } = useUser();
    return user && (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={{ color: 'white', fontFamily: 'Outfit'}}>Welcome,</Text>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Outfit-Bold' }}>{user?.fullName}</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={28} color="white" />
            </View>
            <View style={styles.searchBar}>
                <TextInput placeholder='Search'
                    style={styles.textInput} />
                <View >
                    <FontAwesome style={{backgroundColor: 'white', padding: 8, borderRadius: 8}} name="search" size={27} color={color.violet} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 20,
        backgroundColor: color.violet,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 20,
        padding: 8,
        width: '85%',
        fontSize: 16
    },
    searchBar: {
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    }
})