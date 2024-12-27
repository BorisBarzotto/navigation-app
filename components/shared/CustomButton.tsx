import { forwardRef, type Ref } from 'react'
import { View, Text, Pressable, type PressableProps } from 'react-native'

interface Props extends PressableProps {
    children: string,
    color?: "primary" | "secondary" | "tertiary",
    variant?: "solid" | "outline",
}

const CustomButton = forwardRef(({ children, color = "primary", variant="solid", className = "", ...rest }: Props, ref: Ref<View>) => {
    const btnColor = {
        primary: "bg-blue-500",
        secondary: "bg-green-500",
        tertiary: "bg-red-500",
    }[color]
    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            {...rest}
            ref={ref}
        >
            <Text className="text-white text-center">{children}</Text>
        </Pressable>
    )
})

export default CustomButton