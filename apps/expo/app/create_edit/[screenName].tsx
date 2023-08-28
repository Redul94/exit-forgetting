import { statusBarOption } from '@my/ui/src'
import { CreateEdit } from 'app/features/create_edit/screen'
import { Stack } from 'expo-router'
import React from 'react'

export default function Screen() {
  return (
    <>
      <Stack.Screen options={statusBarOption} />
      <CreateEdit />
    </>
  )
}
