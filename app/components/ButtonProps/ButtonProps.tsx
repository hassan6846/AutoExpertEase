import { Button } from "@rneui/themed"
import { ReactElement, JSXElementConstructor } from "react"


//Type Interface to prevent typeCheck and Safe Check.
interface ButtonProps {
    title: string | ReactElement<{}, string | JSXElementConstructor<any>> | undefined;
    color?: string;
    icon?: any;
    BtnRadius?: number,
    function?: any
    marginBottom?:number;
    // ok these retinary operators said ke 
    //agar element props ko define nhi kia to error nhi dene
    //required option h

}
//Main Prop
const CustomButton = (props:any) => {
    return (
        <Button
        disabled={props.disabled}
        
            onPress={props.function}
            icon={props.icon}
            color={props.color || "#E04E2F"}
            iconPosition="right"
            
            buttonStyle={{ borderRadius: props.BtnRadius,marginBottom:props.marginBottom}}
            title={props.title} />
    )
}



export default CustomButton;
