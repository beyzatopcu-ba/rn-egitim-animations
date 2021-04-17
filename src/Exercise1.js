import React, { useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Dimensions, StatusBar, Animated } from 'react-native';

let { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const buttonSize = 100;
const motionAreaWidth = deviceWidth * 0.9;
const motionAreaHeight = deviceHeight * 0.75;

const standardMargin = 10;
const minimumMargin = standardMargin;
const maximumMarginLeft = motionAreaWidth - buttonSize - standardMargin;
const maximumMarginTop = motionAreaHeight - buttonSize - standardMargin;

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
        backgroundColor: '#B36FE5',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        margin: standardMargin,
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

const Exercise1 = props => {

    const _onPress = () => {
        // ...
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.motionArea}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={_onPress}>
                        <Text style={styles.text}>TIKLA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Exercise1;
