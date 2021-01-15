import React, { useRef, useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Platform,
} from 'react-native'
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import Video from 'react-native-video'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        //width: '100%',
        //height: 300
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        width: '100%',
        height: 500,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#141823',
        position: 'absolute',
        alignSelf: 'center'
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    mediaControls: {
        height: '100%',
        flex: 1,
        alignSelf: 'center',
    },
});

export const Main = () => {
    const [isTfReady, setIsTfReady] = useState(false)
    const [time, setTime] = useState("")
    const player = useRef(null)

    if (isTfReady) {
        const model = tf.sequential()
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' })

        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1])

        model.fit(xs, ys, { epochs: 10 }).then(() => {
            model.predict(tf.tensor2d([5], [1, 1])).print()
        })
            .catch(() => { })
    }

    const waitForTf = () => {
        tf.ready()
            .then(() => {
                setIsTfReady(true)
            })
    }

    useEffect(() => {
        waitForTf()
    }, [])

    const onProgress = data => {
        let mins = ~~((data.currentTime % 3600) / 60)
        let secs = ~~data.currentTime % 60
        let ret = ''
        setTime(ret += mins + " : " + (secs < 10 ? "0" + secs : secs))
        //console.log(data.currentTime)
    }

    const onLoadStart = () => {
        //console.log('onLoadStart')
    }

    const onLoad = data => {
        //console.log('onLoad')
    }

    const onSeek = seek => player?.current.seek(seek)

    const onSeeking = time => setCurrentTime(time)

    const onEnd = () => {

    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header />
                    <View style={styles.body}>
                        <View
                            style={styles.sectionContainer}
                        >
                            <Video
                                style={styles.backgroundVideo}
                                source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
                                resizeMode='contain'
                                onProgress={onProgress}
                                onLoad={onLoad}
                                onLoadStart={onLoadStart}
                                onEnd={onEnd}
                                ref={ref => player.current = ref}
                                controls={true}
                            />
                            <Text style={styles.highlight}>{time}</Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}