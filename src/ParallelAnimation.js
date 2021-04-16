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
    squareContainer1: {
        width: width,
        height: squareWidth,
        marginBottom: 20,
    },
    squareContainer2: {
        width: width,
        height: squareWidth,
        alignItems: 'flex-end',
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

const ParallelAnimation = props => {

    const squareContainer1PaddingLeft = useRef(new Animated.Value(paddingHorizontal)).current;
    const squareContainer2PaddingRight = useRef(new Animated.Value(paddingHorizontal)).current;

    const _onPress_MoveLeft = () => {
        let moveFirstSquareLeftAnimation = Animated.timing(
            squareContainer1PaddingLeft,
            {
                toValue: paddingHorizontal,
                duration: 500,
                useNativeDriver: false,
            }
        );

        let moveSecondSquareRightAnimation = Animated.timing(
            squareContainer2PaddingRight,
            {
                toValue: paddingHorizontal,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        Animated.parallel([
            moveFirstSquareLeftAnimation,
            moveSecondSquareRightAnimation
        ]).start();
    }

    const _onPress_MoveRight = () => {
        let moveFirstSquareRightAnimation = Animated.timing(
            squareContainer1PaddingLeft,
            {
                toValue: width - squareWidth - paddingHorizontal,
                duration: 500,
                useNativeDriver: false,
            }
        );

        let moveSecondSquareLeftAnimation = Animated.timing(
            squareContainer2PaddingRight,
            {
                toValue: width - squareWidth - paddingHorizontal,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        Animated.parallel([
            moveFirstSquareRightAnimation,
            moveSecondSquareLeftAnimation,
        ]).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.squareContainer1,
                { paddingLeft: squareContainer1PaddingLeft }
            ]}>
                <View style={styles.square} />
            </Animated.View>
            <Animated.View style={[
                styles.squareContainer2,
                { paddingRight: squareContainer2PaddingRight }
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

export default ParallelAnimation;
