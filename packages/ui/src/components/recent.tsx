import { CircleButton, CircleButtonProps } from './circleButton'
import { FlatList } from 'react-native'
import { YStack, Text, Stack } from 'tamagui'

interface RecentProps {
  list: CircleButtonProps[]
  listHeaderComponent: JSX.Element
}

export const Recent = ({ list, listHeaderComponent }: RecentProps) => {
  return (
    <FlatList
      ListFooterComponent={<Stack mb={'$1'} />}
      ListHeaderComponent={
        <>
          {listHeaderComponent}
          <Text mx={'$4'} fontSize={'$5'}>
            Recent
          </Text>
        </>
      }
      numColumns={2}
      renderItem={({ item }) => <CircleButton {...item} />}
      data={list}
      contentContainerStyle={{ gap: 20 }}
      columnWrapperStyle={{
        gap: 30,
        justifyContent: 'center',
      }}
    />
  )
}
