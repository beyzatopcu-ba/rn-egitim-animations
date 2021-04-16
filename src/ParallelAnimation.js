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
        height: squareWidth,
        backgroundColor: 'pink',
        justifyContent: 'flex-end',
    },
    square: {
        height: undefined,
        aspectRatio: 1,
        backgroundColor: 'orange',
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

const ParallelAnimation = props => {

    const animationState = useRef(new Animated.Value(0)).current;

    const _onPress_MoveLeft = () => {
        let moveLeftAnimation = Animated.timing(
            animationState,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }
        );

        moveLeftAnimation.start();
    }

    const _onPress_MoveRight = () => {
        let moveRightAnimation = Animated.timing(
            animationState,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }
        );

        moveRightAnimation.start();
    }

    const paddingLeft = animationState.interpolate({
        inputRange: [0, 1],
        outputRange: [paddingHorizontal, width - squareWidth - paddingHorizontal],
    })

    const squareSize = animationState.interpolate({
        inputRange: [0,1],
        outputRange: [squareWidth, squareWidth * 1.5],
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.squareContainer,
                { paddingLeft }
            ]}>
                <Animated.View style={[
                    styles.square,
                    {
                        width: squareSize,
                    }
                ]} />
            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveRight}>
                <Text>Sağa kaydır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveLeft}>
                <Text>Sola kaydır</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ParallelAnimation;
