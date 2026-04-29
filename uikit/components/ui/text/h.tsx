import { Text } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export function H1({ children }: { children: string }) {
    return (
        <Text className="text-white text-4xl font-bold py-2 border-b border-white/20">
            {children}
        </Text>
    )
}

export function H2({ children }: { children: string }) {
    return (
        <Text className="text-white text-2xl font-bold py-2 border-b border-white/20">
            {children}
        </Text>
    )
}

export function H3({ children }: { children: string }) {
    return (
        <Text className="text-white text-2xl font-semibold py-2 border-b border-white/20">
            {children}
        </Text>
    )
}

export function H4({ children }: { children: string }) {
    return (
        <Text className="text-white text-xl font-bold py-1">
            {children}
        </Text>
    )
}