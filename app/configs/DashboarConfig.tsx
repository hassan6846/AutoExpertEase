import { Icon, Text } from "@rneui/themed"
import ThemeProviderColors from "../provider/ThemeProvider"

const DashConfig = {
Dashboard:{
    Icon: ({ focused }: { focused: any }) => (
        <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="storefront" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Dashboard</Text>

        </>
    )
},
Products:{
    Icon: ({ focused }: { focused: any }) => (
        <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="category" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Products</Text>

        </>
    )
},
Orders:{
    Icon: ({ focused }: { focused: any }) => (
        <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="description" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Orders</Text>

        </>
    )
},
AddProducts:{
    Icon: ({ focused }: { focused: any }) => (
        <>
            <Icon size={25} color={focused ? ThemeProviderColors.Light.Primary : "#5F6368"} name="add" type="material" />
            <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? ThemeProviderColors.Light.Primary : "#5F6368" }}>Add new</Text>

        </>
    )
}
}
export default DashConfig