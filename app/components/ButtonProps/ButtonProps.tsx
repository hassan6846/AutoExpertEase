import { StyleSheet } from "react-native"
import { Button, IconProps } from "@rneui/themed"
import { ReactElement, JSXElementConstructor } from "react"


//Type Interface to prevent typeCheck and Safe Check.
interface ButtonProps {
    title: string | ReactElement<{}, string | JSXElementConstructor<any>> | undefined;
    color?: string;
    icon?: any;
    BtnRadius?: number,
    function?: any
    // ok these retinary operators said ke 
    //agar element props ko define nhi kia to error nhi dene
    //required option h

}
//Main Prop
const CustomButton = (props: ButtonProps) => {
    return (
        <Button
            onPress={props.function}
            icon={props.icon}
            color={props.color || "#E04E2F"}
            iconPosition="right"
            
            buttonStyle={{ borderRadius: props.BtnRadius }}
            title={props.title} />
    )
}

// style
const Styles = StyleSheet.create({
    ButtonPropsStyle: {
        padding: 12,
        zIndex: 999,


    }
})

export default CustomButton;
