import React, { useRef, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Easing, Dimensions, LayoutAnimation, SafeAreaView, StatusBar, Animated } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const buttonSize = 100;
const motionAreaWidth = deviceWidth * 0.9;
const motionAreaHeight = deviceHeight * 0.75;

const standardMargin = 10;
const minimumMargin = standardMargin;
const maximumMarginLeft = motionAreaWidth - buttonSize - standardMargin;
const maximumMarginTop = motionAreaHeight - buttonSize - standardMargin;

const colors = [
    "#B36FE5",
    "#FF7860",
    "#33A3DE",
    "#F09E17",
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF7E39',
    },
    motionArea: {
        width: motionAreaWidth,
        height: motionAreaHeight,
        backgroundColor: '#89F5B8',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonContainer: {
        width: buttonSize,
        height: buttonSize,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

const Exercise2_Solution = props => {

    const marginLeft = useRef(new Animated.Value(standardMargin)).current;
    const marginTop = useRef(new Animated.Value(standardMargin)).current;
    const colorAnim = useRef(new Animated.Value(0)).current;

    const refColorIndex = useRef(0);

    const calculateRandomMargins = () => {
        let margins = {};
        margins.left = Math.floor(Math.random() 
                            * (maximumMarginLeft - minimumMargin + 1) ) + minimumMargin;
        margins.top = Math.floor(Math.random() 
                            * (maximumMarginTop - minimumMargin + 1) ) + minimumMargin;

        return margins;
    }

    const getColorIndex = () => {
        let newColorIndex;

        if (refColorIndex.current === colors.length - 1) {
            newColorIndex = 0;
        }
        else {
            newColorIndex = refColorIndex.current + 1;
        }

        refColorIndex.current = newColorIndex;

        return newColorIndex;
    }

    const _onPress = () => {
        const {top, left} = calculateRandomMargins();

        const horizontalAnimation = Animated.timing(
            marginLeft,
            {
                toValue: left,
                duration: 200,
                useNativeDriver: false,
            }
        );

        const verticalAnimation = Animated.timing(
            marginTop,
            {
                toValue: top,
                duration: 200,
                useNativeDriver: false,
            }
        );

        const movingAnimation = Animated.parallel([
            horizontalAnimation,
            verticalAnimation,
        ]);

        const colorIndex = getColorIndex();

        const changeColorAnimation = Animated.timing(
            colorAnim,
            {
                toValue: colorIndex,
                duration: 500,
                useNativeDriver: false,
            }            
        );

        Animated.sequence([
            movingAnimation,
            changeColorAnimation,
        ]).start();
    }

    const backgroundColor = colorAnim.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [colors[0], colors[1], colors[2], colors[3]],
    })

    console.log(backgroundColor);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.motionArea}>
                <Animated.View style={[
                    styles.buttonContainer,
                    {
                        marginLeft,
                        marginTop,
                        backgroundColor,
                    }
                ]}>
                    <TouchableOpacity style={styles.button} onPress={_onPress}>
                        <Text style={styles.text}>TIKLA</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
};

export default Exercise2_Solution;
