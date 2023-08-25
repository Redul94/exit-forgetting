import { Left } from './left'
import { Right } from './right'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const statusBarOption: NativeStackNavigationOptions = {
  headerLeft: () => <Left />,
  headerRight: () => <Right />,
  headerTitle: () => <></>,
}
