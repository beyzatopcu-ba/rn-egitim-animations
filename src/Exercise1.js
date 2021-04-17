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

// Egzersiz 2 için
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

    // Egzersiz 2 için yorumu kaldırın
    /*
    const refColorIndex = useRef(0);
    const getColorIndex = () => {
        let nextColorIndex;

        // Renklerin sonuna geldiysek, bir sonraki index 0 olmalı
        if (refColorIndex.current === colors.length - 1) {
            nextColorIndex = 0;
        }
        else {
            nextColorIndex = refColorIndex.current + 1;
        }

        // refColorIndex'i güncelle
        refColorIndex.current = nextColorIndex;

        // Yeni index'i döndür
        return nextColorIndex;
    }

    const calculateRandomMargins = () => {
        // ...
    }
    */


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
