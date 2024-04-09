import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../../utils/GlobalAPI'
import Header from './Header'

export default function Categories() {

  const [categories, setCategories] = useState()
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    GlobalAPI.getCategory().then(resp => {
      setCategories(resp?.categories)

    })
  }
  return (
    <View style={{ padding: 20 }}>
      
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) => (
          <View style={styles.Contaiiner}>
            <View style={styles.iconContainer}>
              <Image source={{ uri: item?.icon?.url }}
                style={{ width: 31, height: 30 }} />
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Contaiiner: {
    flex: 1,
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: '#D3D3D3',
    padding: 17,
    borderRadius: 99
  },
})