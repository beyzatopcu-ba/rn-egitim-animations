import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Animated } from 'react-native';
import Modal from 'react-native-modal';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: deviceWidth * 0.5,
        paddingHorizontal: deviceWidth * 0.08,
    },
    touchable: {
        backgroundColor: '#05007B',
        padding: deviceWidth * 0.05,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: deviceWidth * 0.05,
    },
    modalContentContainer: {
        backgroundColor:'green',
    },
    outerCircle: {
        width: deviceWidth * 0.65,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 1000,
        backgroundColor: '#9B0404',
        position: 'absolute',
        zIndex: 1,
        left: (deviceWidth - deviceWidth * 0.65) / 2,
        top: (deviceHeight - deviceWidth * 0.65) / 2,
    },
    middleCircle: {
        width: deviceWidth * 0.52,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 1000,
        backgroundColor: '#9B0404',
        position: 'absolute',
        zIndex: 2,
        left: (deviceWidth - deviceWidth * 0.52) / 2,
        top: (deviceHeight - deviceWidth * 0.52) / 2,
    },
    innerCircle: {
        width: deviceWidth * 0.4,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 1000,
        backgroundColor: '#9B0404',
        position: 'absolute',
        zIndex: 3,
        left: (deviceWidth - deviceWidth * 0.4) / 2,
        top: (deviceHeight - deviceWidth * 0.4) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recordingCircle: {
        width: deviceWidth * 0.15,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    modal: {
        justifyContent: 'flex-start',
        width: deviceWidth,
        margin: 0,
    }
})

const modalInDuration = 500;

const VoiceRecording = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [isStopped, setIsStopped] = useState(false);

    const middleCircleOpacity = useRef(new Animated.Value(0)).current;
    const outerCircleOpacity = useRef(new Animated.Value(0)).current;

    const refAnimation = useRef(null);

    const _onPress_StartRecording = () => {
        setIsVisible(true);

        const initialDelayAnim = Animated.delay(modalInDuration);
        
        const showMiddleCircleAnim = Animated.timing(
            middleCircleOpacity,
            {
                toValue: 0.4,
                duration: 600,
            }
        )

        const hideMiddleCircleAnim = Animated.timing(
            middleCircleOpacity,
            {
                toValue: 0,
                duration: 200,
            }
        )

        const showOuterCircleAnim = Animated.timing(
            outerCircleOpacity,
            {
                toValue: 0.3,
                duration: 1000,
            }
        )

        const hideOuterCircleAnim = Animated.timing(
            outerCircleOpacity,
            {
                toValue: 0,
                duration: 200,
            }
        )

        const showingAnimation = Animated.stagger(300, [
            showMiddleCircleAnim,
            showOuterCircleAnim
        ]);

        const hidingAnimation = Animated.parallel([
            hideMiddleCircleAnim,
            hideOuterCircleAnim,
        ]);

        const intermediateDelayAnim = Animated.delay(500);

        const singleTotalAnimation = Animated.sequence([
            showingAnimation,
            hidingAnimation,
            intermediateDelayAnim,
        ]);

        const loopAnimation = Animated.loop(singleTotalAnimation);

        refAnimation.current = Animated.sequence([
            initialDelayAnim,
            loopAnimation
        ]);

        refAnimation.current.start();
    }

    const _onPress_ModalBackdrop = () => {
        setIsVisible(false);
        setIsStopped(false);
        refAnimation.current && refAnimation.current.reset();
    }

    const _onPress_StartStop = () => {
        if (isStopped) {
            refAnimation.current.start();
            setIsStopped(false);
        }
        else {
            refAnimation.current.stop();
            setIsStopped(true);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchable} onPress={_onPress_StartRecording}>
                    <Text style={styles.text}>Kaydetmeye Başla</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationInTiming={modalInDuration}
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={isVisible}
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
            >
                <View style={styles.modalContentContainer}>
                    <Animated.View style={[
                        styles.outerCircle,
                        { opacity: outerCircleOpacity }
                    ]} />
                    <Animated.View style={[
                        styles.middleCircle,
                        { opacity: middleCircleOpacity }
                    ]} />
                    <TouchableOpacity style={styles.innerCircle} onPress={_onPress_StartStop}>
                        <View style={[
                            styles.recordingCircle,
                            {borderRadius: isStopped ? 1000 : 10}
                        ]}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

export default VoiceRecording;
