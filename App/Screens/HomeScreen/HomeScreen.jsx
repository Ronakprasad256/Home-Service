import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Categories'
import BusinessList from './BusinessList'

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
            <View style={{padding: 20}}>
                {/* category Screen */}
                <BusinessList />
            </View>

        </View>
    )
}