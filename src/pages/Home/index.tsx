import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'

export function Home() {
  return (
    <main>
      <Profile />
      <SearchBar />
      <Posts />
    </main>
  )
}
