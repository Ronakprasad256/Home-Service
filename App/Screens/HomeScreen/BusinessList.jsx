import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../../utils/GlobalAPI'

export default function BusinessList() {

    const [businessList, setBusinessList] = useState()
    useEffect(() => {
        getBusinessList()
    }, [])

    const getBusinessList = () => {
        GlobalAPI.getBusinessList().then(resp => {
            setBusinessList(resp?.businessLists)
            console.log("resp", resp)
        })
    }

    return (
        <View>
            <Text style={styles.heading}>BusinessList</Text>
            <FlatList
                data={businessList}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 15 }}>
                        <Image source={{ uri:item?.images?.url }}
                            style={styles.ImageSize} />
                        <Text>{item?.name}</Text>
                    </View>
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImageSize: {
        width: 250,
        height: 120,
        borderRadius: 20,
        objectFit: 'contain',
        borderColor: 'red',
        borderWidth: 4
    },
    heading: {
        fontSize: 18,
        fontFamily: 'Outfit-Medium',
        marginBottom: 10
    }
})