import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../../utils/GlobalAPI'

export default function Slider() {

    const [slider, setSlider] = useState([]);
    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => {
        GlobalAPI.getSlider().then(resp => {
            console.log("resp", resp.sliders)
            setSlider(resp?.sliders)
        })
    }
    
    return (
        <View>
            <Text style={styles.heading}>Offers For You</Text>
            <FlatList
                horizontal={true}
                data={slider}
                scrollIndicatorInsets={false}
                
                renderItem={({ item, index }) => (
                    <View style={{marginRight: 15}}>
                        <Image source={{ uri: item?.image?.url }}
                            style={styles.sliderImage} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontFamily: 'Outfit-Medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 250,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain',
    }
})
