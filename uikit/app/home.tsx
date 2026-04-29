import { View, Text, Dimensions, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AnimatedHeaderScrollView } from "@/components/ui/organisms/animated-header-scrollview";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { H1, H2, H3, H4 } from "@/components/ui/text/h";
import { P } from "@/components/ui/text/p";
import { ScaleCarousel } from "@/components/ui/molecules/scale-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { SymbolView } from "expo-symbols";
import Lanyard from "@/components/ui/molecules/lanyard";


export default function Home() {
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
    const items = [
        {
            title: "React Native",
            image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmcCNot1r4p3DaXAIH6HyxLynvvYFVizJvw&s" },
            color: "red"
        },
        {
            title: "Expo",
            image: { uri: "https://www.kevinwanke.com/wp-content/uploads/2021/06/marcel-friedrich-XC_28Kk25F0-unsplash.jpg" },
            color: "blue"
        },
        {
            title: "NativeWind",
            image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90C7m1ZKYDx66hYHc0vOEajXUF5t3cnEnEg&s" },
            color: "green"
        },
        {
            title: "Tailwind",
            image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJu0yTUoOQYwbWtjUOwjZKlYoz8YF_OEIgmA&s" },
            color: "yellow"
        },
        {
            title: "Reactix",
            image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40u6SyPgW-mxI1yzXj6beZQ0DGFGj2Oi4dA&s" },
            color: "pink"
        }
    ]

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView>
                <AnimatedHeaderScrollView
                    largeTitle="UIKit"
                    subtitle="Testando bibliotecas de componentes para o react native"
                >
                    <H2>Bibliotecas utilizadas:</H2>
                    <View className="-ml-8">
                        <ScaleCarousel
                            data={items}
                            itemWidth={SCREEN_WIDTH}
                            itemHeight={SCREEN_HEIGHT * 0.75}
                            scaleRange={[1.4, 1, 1.4]}
                            rotationRange={[15, 0, -15]}
                            renderItem={({ item }) => (
                                <View className="absolute bottom-0 left-0 right-0 justify-end pb-[50px] px-10">
                                    <LinearGradient
                                        colors={["transparent", "rgba(0,0,0,0.8)"]}
                                        style={styles.gradient}
                                    />
                                    <View style={styles.movieInfo}>

                                        <Text
                                            style={[
                                                styles.movieTitle,

                                            ]}
                                        >
                                            {item.title}
                                        </Text>

                                    </View>
                                </View>
                            )}
                        />
                    </View>

                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Lanyard
                            cardWidth={160}
                            cardHeight={220}
                            cardBackgroundColor="#000000"
                            cardAccentColor="#ffffff"
                            ropeColor="#ededed"
                            ropePattern="striped"
                            ropeSegments={8}
                            ropeSegmentLength={15}
                            ropeThickness={3}
                            gravity={600}
                            stiffness={0.85}
                            damping={0.25}
                            cardImageSource="https://avatars.githubusercontent.com/u/131066052?v=4"
                            cardImageWidth={70}
                            cardImageHeight={70}
                            anchorPosition={{
                                x: SCREEN_WIDTH / 2,
                                y: 20,
                            }}
                            cardData={{
                                name: "Deivyson Ricardo",
                            }}
                            
                        />
                    </View>


                </AnimatedHeaderScrollView>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d0d0d",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 55,
        paddingBottom: 15,
    },
    topTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
        letterSpacing: 3,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.08)",
        justifyContent: "center",
        alignItems: "center",
    },
    movieCard: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        paddingBottom: 50,
        paddingHorizontal: 24,
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "500%",
    },
    movieInfo: {
        gap: 12,
    },
    ratingBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        backgroundColor: "rgba(255,215,0,0.15)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: "flex-start",
    },
    ratingText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#FFD700",
    },
    movieTitle: {
        fontSize: 25,
        fontWeight: "700",
        color: "#fff",
        letterSpacing: 1,
    },
    genreRow: {
        flexDirection: "row",
        gap: 8,
    },
    genrePill: {
        backgroundColor: "rgba(255,255,255,0.1)",
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.15)",
    },
    genreText: {
        fontSize: 12,
        color: "rgba(255,255,255,0.7)",
        fontWeight: "500",
    },
    bottomActions: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 12,
        alignItems: "center",
    },
    actionButton: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "rgba(255,255,255,0.08)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    primaryButton: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        gap: 8,
    },
    primaryButtonText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
    },
});