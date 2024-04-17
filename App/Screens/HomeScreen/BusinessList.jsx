import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../../utils/GlobalAPI'

export default function BusinessList() {

    const [businessList, setBusinessList] = useState([]);
    useEffect(() => {
        getBusinessLists();
    }, [])

    const getBusinessLists = () => {
        GlobalAPI.getBusinessList().then(resp => {
            console.log("resp", resp.businessLists)
            setBusinessList(resp?.businessLists)
        })
    }

    return (
        <View>
            <Text style={styles.heading}>Latest Business</Text>
            <FlatList
                data={businessList}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.container}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 15 }}>
                        <Image source={{ uri:item?.images[0]?.url }}
                            style={styles.ImageSize} />
                        <Text>{item?.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    ImageSize: {
        width: 250,
        height: 130,
        borderRadius: 20,
        objectFit: 'contain',
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Outfit-Medium',
        marginBottom: 10
    }
})