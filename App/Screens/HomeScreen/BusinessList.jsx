import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../../utils/GlobalAPI'

export default function BusinessList() {

    const [businessList, setBusinessList] = useState()
    useEffect(() => {
       getBusinessList() 
    },[])

    const getBusinessList = () => {
        GlobalAPI.getBusinessList().then(resp => {
            setBusinessList(resp?.businessLists)
            console.log(resp)
    })
}

  return (
    <View>
          <Text>BusinessList</Text>
          <FlatList
              data={businessList}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item, index }) => (
                  <View>
                      <Image
                          source={{ uri:item?.images?.url }}
                          style={styles.ImageSize}
                      />
                      <Text>{item?.name}</Text>
                      <Text>{item?.contactPerson}</Text>
                  </View>
              )}
                 
          />
    </View>
  )
}

const styles = StyleSheet.create = {
    ImageSize: {
        width: 250,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain',
        
    }
}