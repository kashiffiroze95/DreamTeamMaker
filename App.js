import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from './components/AppHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
      <SafeAreaProvider>
        <AppHeader/>
      </SafeAreaProvider>
  )
}

export default App