import { statusBarOption } from '@my/ui/src'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import React from 'react'

export default function Screen() {
  return (
    <>
      <Stack.Screen options={statusBarOption} />
      <HomeScreen />
    </>
  )
}
