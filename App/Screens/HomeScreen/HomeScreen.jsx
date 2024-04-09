import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Categories'

export default function HomeScreen() {
    return (
        <View>
            {/* Header Screen */}
            <Header />

            <View style={{padding: 20}}>
                {/* Slider Screen */}
                <Slider />
            </View>
            <View>
                {/* category Screen */}
                <Category />
            </View>

        </View>
    )
}