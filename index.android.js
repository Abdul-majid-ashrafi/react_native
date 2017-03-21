// 'use strict';

// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.hello}>Hello, World</Text>
//       </View>
//     )
//   }
// }
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   hello: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// AppRegistry.registerComponent('AwesomeProject', () => HelloWorld);



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    View
} from 'react-native';

export default class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/16406467_1087154408078243_4411565682060068657_n.jpg?oh=0b9a4a4a674c740746f2dc9d6f86bd46&oe=595CE405' }}
                    style={{ width: 400, height: 400 }} />
                <Text style={styles.welcome}>
                    Hello Friend
                    </Text>
            </View>
            //   <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //       Welcome to React Native!
            //     </Text>
            //     <Text style={styles.instructions}>
            //       To get started, edit index.android.js
            //     </Text>
            //   </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
    // ,
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

