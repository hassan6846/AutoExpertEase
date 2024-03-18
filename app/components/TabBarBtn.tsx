import { Text, Icon } from "@rneui/themed"
import React from 'react'
import ThemeProviderColors from "../provider/ThemeProvider"

const TabBarBtn = ({ focused, title, name }: { focused: any; title: any; name: any }) => {
    return (
        <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name={name} type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>{title}</Text>
        </>
    )
}

export default TabBarBtn;
