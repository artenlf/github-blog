import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { BlogContent } from './styles'

export function Home() {
  return (
    <main>
      <BlogContent>
        <Profile />
        <SearchBar />
        <Posts />
      </BlogContent>
    </main>
  )
}
