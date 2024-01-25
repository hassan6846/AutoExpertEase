import { StyleSheet } from "react-native"
import { Button } from "@rneui/themed"
import { ReactElement, JSXElementConstructor } from "react"

interface ButtonProps {
    // Assuming you want to pass a color prop
    title: string | ReactElement<{}, string | JSXElementConstructor<any>> | undefined;
    color?: string; 
}

const CustomButton = (props: ButtonProps) => {
    return (
        <Button color={props.color ||"#E04E2F" } buttonStyle={Styles.ButtonPropsStyle} title={props.title} />
    )
}

// style
const Styles = StyleSheet.create({
    ButtonPropsStyle: {
        padding: 12,
        borderRadius: 10,
    }
})

export default CustomButton;
