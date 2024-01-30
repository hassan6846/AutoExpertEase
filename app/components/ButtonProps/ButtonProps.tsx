import { StyleSheet } from "react-native"
import { Button } from "@rneui/themed"
import { ReactElement, JSXElementConstructor } from "react"


//Type Interface to prevent typeCheck and Safe Check.
interface ButtonProps {
    title: string | ReactElement<{}, string | JSXElementConstructor<any>> | undefined;
    color?: string; 

}
//Main Prop
const CustomButton = (props: ButtonProps) => {
    return (
        <Button color={props.color ||"#E04E2F" } buttonStyle={Styles.ButtonPropsStyle} title={props.title} />
    )
}

// style
const Styles = StyleSheet.create({
    ButtonPropsStyle: {
        padding: 12,
        zIndex:999,
        borderRadius: 10,
    }
})

export default CustomButton;
