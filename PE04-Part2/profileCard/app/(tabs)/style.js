import { StyleSheet } from 'react-native'

// const styles = StyleSheet.create({
//     // container: {
//     //     marginTop: 150,
//     //     backgroundColor: '#ededed',
//     //     flexWrap: 'wrap',
//     // }
//     container: {
//         flex: 1,
//         marginTop: 150,
//     },
//     countContainer: {
//         alignItems: 'center',
//         padding: 10,
//     },
//     countText: {
//         fontSize: 18,
//         color: 'red'
//     }
// })

// const buttons = StyleSheet.create({
//     // primary: {
//     //     flex: 1,
//     //     height: 70,
//     //     backgroundColor: 'red',
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //     marginLeft: 20,
//     //     marginRight: 20
//     // }
//     primary: {
//         height: 70,
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginLeft: 20,
//         marginRight: 20
//     },
//     buttonText: {
//         color: 'white'
//     }
// })

// export { buttons, styles }

export const Colors = {
    dark: 'black',
    light: 'white'
}

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
}

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
})

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
})

export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet: lightStyleSheet;
}