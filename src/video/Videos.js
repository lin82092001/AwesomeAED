import React, { useRef, useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native'
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen'
import Video from 'react-native-video'
import {
    Text,
    Header,
} from 'native-base'

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
        flex: 1
    },
    sectionContainer: {
        width: '100%',
        height: 500,
    },
    textContainer: {
        height: 20,
        bottom: 0
    },
    highlight: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#141823',
        alignSelf: 'center',
    },
    footer: {
        color: Colors.dark,
        fontSize: 28,
        fontWeight: '600',
        alignSelf: 'center',
    },
    button: {
        width: '50%',
        color: '#489c9c'
    }
});

export const Videos = () => {
    const [time, setTime] = useState("")
    const player = useRef(null)

    useEffect(() => {

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
                        <View style={styles.textContainer}>
                            <Text style={styles.highlight}>{time}</Text>
                        </View>
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
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}