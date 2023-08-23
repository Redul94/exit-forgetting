import { HomeScreen } from 'app/features/home/screen'
import { SearchBar } from 'app/features/Search/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Seach</title>
      </Head>
      {/* <HomeScreen /> */}

      <SearchBar />
    </>
  )
}
