# React native
# 1. Install
```bash
npx create-expo-app AwesomeProject
cd AwesomeProject
npx expo start --tunnel # may be npm install @expo/ngrok@^4.1.0
# install EXPO app in google play
```
# 2. Core Component
## Pressable Component
1. Reading:
- [Exploring Pressable](https://www.coursera.org/learn/react-native-course/supplement/qYDM2/exploring-pressable)
2. Code sample
- [Pressable-component](https://github.com/thien1892/react-native-tutorial/blob/main/components/Pressable-component.js)
```javascript
<Pressable 
  style={menuStyles.button} 
  onPress={() => { 
    setShowMenu(!showMenu); 
  }}> 
    <Text style={menuStyles.buttonText}> 
      {showMenu ? 'Home' : 'View Menu'} 
    </Text> 
</Pressable> 
```

## Image Component
1. Reading: 
- [Exploring props to the Image Component - Coursera](https://www.coursera.org/learn/react-native-course/supplement/z3oVl/exploring-props-to-the-image-component)
- [Image · React Native](https://reactnative.dev/docs/image)
- [ImageBackground · React Native](https://reactnative.dev/docs/imagebackground)
- [Image Style Props · React Native](https://reactnative.dev/docs/image-style-props)
2. Code example:
```javascript
<Image
    style={styles.logo}
    source={require('../img/littleLemonLogo.png')}
    resizeMode="center"
    accessible={true}
    accessibilityLabel={'Little Lemon Logo'}
/>
```

# 3. Hooks in React-native
## 3.1. useColorScheme hook
```javaScript
// changed the background color of the welcome screen based on the user’s theme (light or dark) mode
import { useColorScheme, ScrollView, Text } from 'react-native'; 
const Welcome = () => { 
  const colorScheme = useColorScheme(); 

  return ( 
   <ScrollView 
      style={[ 
        styles.container, 
        colorScheme === 'light' 
          ? { backgroundColor: '#fff' } 
          : { backgroundColor: '#333333' }, 
      ]}> 
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text> 
    </ScrollView> 
  ); 
}; 

export default Welcome; 
```

The `colorScheme` can have the following values:

- `dark`: The user prefers a dark color theme 

- `light`: The user prefers a light color theme 

- `null`: No preference from user

## 3.2. useWindowDimensions hook
```javascript
import { useWindowDimensions } from 'react-native'; 
const Welcome = () => { 
  const window = useWindowDimensions(); 
  return ( 
    <ScrollView style={styles.container}> 
      <Text style={styles.regular}>Window Dimensions</Text> 
      <Text style={styles.regular}>Height: {window.height}</Text> 
      <Text style={styles.regular}>Width: {window.width}</Text> 
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text> 
    </ScrollView> 
  ); 
}; 

export default Welcome;
```

## 3.3. Other community hooks
### 1. Install
```bash
npm install @react-native-community/hooks
```

### 2. useDeviceOrientationHook
- This hook can determine if the user’s mobile device is viewed in landscape or portrait mode. You can utilize this hook to determine the orientation if your app needs to support both modes.
```javascript
import { useDeviceOrientation } from '@react-native-community/hooks' 

const orientation = useDeviceOrientation() 
 
console.log('is orientation portrait: ', orientation.portrait) 
console.log('is orientation landscape: ', orientation.landscape) 
```

### 3. useAppStateHook
- The useAppState hook is quite useful. This hook is used to determine the current app state. It can be active, background or inactive (iOS only). This determines when the user puts the app in a closed, background, inactive or active state.
- This information is helpful to the developer to take specific necessary actions within the app, depending on whether the app is actively running or in the background. For example, specific applications like banking applications may log out the user after a particular time of inactivity or when the app is in the background.
```javascript
import { useClipboard } from '@react-native-community/hooks' 

// Inside the component 

const [data, setString] = useClipboard() 

<Text>{data}</Text> 

<Button title='Update Clipboard' onPress={() => setString('new clipboard data')}>Set Clipboard</Button> 
```