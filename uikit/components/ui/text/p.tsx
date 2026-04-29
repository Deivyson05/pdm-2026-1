import { Text } from "react-native";

export function P({ children }: { children: string }) {
    return (
        <Text className="text-white/50 text-sm">
            {children}
        </Text>
    );
}