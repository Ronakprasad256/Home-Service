import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../../utils/GlobalAPI'

export default function Categories() {

  const [categories, setCategories] = useState()
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    GlobalAPI.getCategory().then(resp => {
      setCategories(resp?.categories)
      console.log(resp)
    })
  }
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.texting}>
      <Text style={styles.heading}>Categories</Text>
      <Text>View All</Text>
      </View>
      
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) =>index<=3&& (
          <View style={styles.Container}>
            <View style={styles.iconContainer}>
              <Image source={{ uri: item?.icon?.url }}
                style={{ width: 31, height: 30 }} />
            </View>
            <Text style={{marginTop: 3, fontFamily: 'Outfit-Medium', fontSize: 14}}>{item?.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  texting: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Outfit-Medium',
    marginBottom: 10
},
  Container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: '#D3D3D3',
    padding: 17,
    borderRadius: 99
  },
})