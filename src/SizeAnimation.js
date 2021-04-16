import React, { useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated, Easing, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const squareWidth = width * 0.3;
const paddingHorizontal = width * 0.05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareContainer: {
        width: width,
        height: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        backgroundColor: 'orange',
        height: undefined,
        aspectRatio: 1,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'lightgreen',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const SizeAnimation = props => {

    const squareSize = useRef(new Animated.Value(squareWidth)).current;


    const _onPress_Grow = () => {
        Animated.timing(
            squareSize,
            {
                toValue: squareWidth * 1.5,
                duration: 500,
                useNativeDriver: false,
            }
        ).start();
    }

    const _onPress_Shrink = () => {
        Animated.timing(
            squareSize,
            {
                toValue: squareWidth,
                duration: 500,
                useNativeDriver: false,
            }
        ).start();
    }

    return (
        <View style={styles.container}>
            <View style={styles.squareContainer} >
                <Animated.View style={[
                    styles.square,
                    {
                        width: squareSize,
                    }
                ]} />
            </View>
            <TouchableOpacity style={styles.button} onPress={_onPress_Grow}>
                <Text>Büyüt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_Shrink}>
                <Text>Küçült</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SizeAnimation;
