import { statusBarOption } from '@my/ui/src'
import { Check } from 'app/features/check/screen'
import { Stack } from 'expo-router'
import React from 'react'

export default function Screen() {
  return (
    <>
      <Stack.Screen options={statusBarOption} />
      <Check />
    </>
  )
}
