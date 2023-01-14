import { useContextSelector } from 'use-context-selector'
import {
  GitHubDataContext,
  UserIssuesProps,
} from '../../contexts/GitHubDataContext'
import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'

export interface IssueProps {
  userIssues: UserIssuesProps[]
}

export function Home() {
  const userIssues = useContextSelector(GitHubDataContext, (context) => {
    return context.userIssues
  })

  return (
    <main>
      <Profile />
      <SearchBar userIssues={userIssues} />
      <Posts userIssues={userIssues} />
    </main>
  )
}
