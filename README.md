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