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
    },
    square: {
        width: squareWidth,
        height: squareWidth,
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

const SizeAnimation = props => {

    const squareContainerPaddingLeft = useRef(new Animated.Value(paddingHorizontal)).current;

    const _onPress_MoveLeft = () => {
        let moveLeftAnimation = Animated.timing(
            squareContainerPaddingLeft,
            {
                toValue: paddingHorizontal,
                duration: 500,
                useNativeDriver: false,
            }
        );

        moveLeftAnimation.start();
    }

    const _onPress_MoveRight = () => {
        let moveRightAnimation = Animated.timing(
            squareContainerPaddingLeft,
            {
                toValue: width - squareWidth - paddingHorizontal,
                duration: 500,
                useNativeDriver: false,
            }
        );

        moveRightAnimation.start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.squareContainer,
                { paddingLeft: squareContainerPaddingLeft }
            ]}>
                <View style={styles.square} />
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

export default SizeAnimation;
