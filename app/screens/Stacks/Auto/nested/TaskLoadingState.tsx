import { View, StyleSheet } from 'react-native'
import LottieView from "lottie-react-native"
import React from 'react'

const TaskLoadingState = () => {
    return (
        <View style={Styles.MainViewer}>

        </View>
    )
}
//style
const Styles=StyleSheet.create({
    MainViewer:{
        flex:1,
    
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    }
})
export default TaskLoadingState