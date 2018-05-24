import React from 'react'
import { View, Text } from 'react-native-web'

export default () => (
    <View style={{ flex: 1, flexDirection: 'column', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <Text>ccc</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#aaa' }}>
            <Text>aaa</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
            <Text>ddd</Text>
        </View>
    </View>
)
