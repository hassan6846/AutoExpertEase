import { View, StyleSheet } from 'react-native'
import React from 'react'
import { getHeight } from '../../utils/GetDimension'
import { Input } from "@rneui/themed"
const InputComponent = (props:any) => {
    return (
        <View style={Style.InputContainer}>
            <Input  
            
            value={props.value}  
                disabled={props.disabled} 
                onFocus={props.onFocus} 
                onChangeText={props.onChangeText} // Added onChangeText prop
                labelStyle={Style.labelStyle} 
                inputContainerStyle={Style.InputVoid} 
                label={props.label} 
                keyboardType={props.keyboardType} 
                inputStyle={Style.InputMain} 
                containerStyle={Style.InputCont} 
                placeholder={props.placeholder} 
            />
            {/* Dropdown */}

        </View>
    )
}
const Style = StyleSheet.create({
    InputContainer: {
    marginBottom:-14,
        justifyContent: "center",
       
    },
    InputVoid:
    {
        backgroundColor: "#e5e5e5",
        borderBottomWidth: 0,
        borderRadius: 5,
        fontSize: 12,
    },
    InputMain: {
        paddingLeft: 10,
        fontSize: 14,
    },
    InputCont: {
        width: "100%",
    },
    labelStyle:{
        fontWeight:"300",
        
        fontSize:12,
        marginBottom:5,
    }
})
export default InputComponent