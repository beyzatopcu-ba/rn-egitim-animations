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

const OtherComposedAnimations = props => {

    const squareContainer1PaddingLeft = useRef(new Animated.Value(paddingHorizontal)).current;
    const squareContainer2PaddingRight = useRef(new Animated.Value(paddingHorizontal)).current;
    const backgroundColorState = useRef(new Animated.Value(0)).current;

    const moveFirstSquareLeftAnimation = useRef();

    const _onPress_MoveLeft_Sequence = () => {

        moveFirstSquareLeftAnimation.current = Animated.timing(
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

        let changeBgColorAnimation = Animated.timing(
            backgroundColorState,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        let moveSquares = Animated.sequence([
            moveFirstSquareLeftAnimation.current,
            moveSecondSquareRightAnimation,
        ]);


        Animated.parallel([
            changeBgColorAnimation,
            moveSquares,
        ]).start(() => {
            alert("animasyonu tamamladım")
        });
    }

    const _onPress_MoveRight_Sequence = () => {

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

        let changeBgColorAnimation = Animated.timing(
            backgroundColorState,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        let moveSquares = Animated.sequence([
            moveFirstSquareRightAnimation,
            moveSecondSquareLeftAnimation,
        ]);


        Animated.parallel([
            changeBgColorAnimation,
            moveSquares,
        ]).start();
    }

    const _onPress_MoveLeft_Stagger = () => {
        let moveFirstSquareLeftAnimation = Animated.timing(
            squareContainer1PaddingLeft,
            {
                toValue: paddingHorizontal,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        let moveSecondSquareRightAnimation = Animated.timing(
            squareContainer2PaddingRight,
            {
                toValue: paddingHorizontal,
                duration: 1500,
                useNativeDriver: false,
            }
        );

        

        let changeBgColorAnimation = Animated.timing(
            backgroundColorState,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        let moveSquares = Animated.stagger(200, [
            moveFirstSquareLeftAnimation,
            moveSecondSquareRightAnimation
        ]).start();


        Animated.parallel([
            changeBgColorAnimation,
            moveSquares,
        ]).start();
    }

    const _onPress_MoveRight_Stagger = () => {
        let moveFirstSquareRightAnimation = Animated.timing(
            squareContainer1PaddingLeft,
            {
                toValue: width - squareWidth - paddingHorizontal,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        let moveSecondSquareLeftAnimation = Animated.timing(
            squareContainer2PaddingRight,
            {
                toValue: width - squareWidth - paddingHorizontal,
                duration: 1500,
                useNativeDriver: false,
            }
        );

        

        let changeBgColorAnimation = Animated.timing(
            backgroundColorState,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }
        );

        let moveSquares = Animated.stagger(200, [
            moveFirstSquareRightAnimation,
            moveSecondSquareLeftAnimation
        ]).start();


        Animated.parallel([
            changeBgColorAnimation,
            moveSquares,
        ]).start();
    }

    const backgroundColor = backgroundColorState.interpolate({
        inputRange: [0, 1],
        outputRange: ["#FFFFFF", "#E874D6"]
    })

    return (
        <Animated.View style={[
            styles.container,
            {
                backgroundColor
            }
        ]}>
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
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveRight_Sequence}>
                <Text>Sıralı sağa kaydır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveLeft_Sequence}>
                <Text>Sıralı sola kaydır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveRight_Stagger}>
                <Text>Sıralı paralel sağa kaydır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_onPress_MoveLeft_Stagger}>
                <Text>Sıralı paralel sola kaydır</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default OtherComposedAnimations;
