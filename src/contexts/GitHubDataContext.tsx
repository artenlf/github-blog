import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface UserProfileDataProps {
  id: number
  name: string
  login: string
  company: string | null
  bio: string
  followers: number
  html_url: string
  avatar_url: string
}

export interface UserIssuesProps {
  user: any
  id: number
  number: number
  title: string
  body: string
  created_at: string
  comments: number
}

export interface GitHubDataContextType {
  userProfileData: UserProfileDataProps
  userIssues: UserIssuesProps[]
  issue: UserIssuesProps
  fetchUserProfileData: () => Promise<void>
  fetchUserIssues: () => Promise<void>
  fetchIssueData: (issueNumber: number) => Promise<void>
  fetchUserIssuesSearch: (query?: string) => Promise<void>
}

interface GitHubDataProviderProps {
  children: ReactNode
}

export const GitHubDataContext = createContext({} as GitHubDataContextType)

export function GitHubDataProvider({ children }: GitHubDataProviderProps) {
  const [userProfileData, setUserProfileData] = useState(
    {} as UserProfileDataProps,
  )

  const [userIssues, setUserIssues] = useState([])
  const [issue, setIssue] = useState({} as UserIssuesProps)

  async function fetchUserProfileData() {
    const response = await api.get('users/artenlf')
    setUserProfileData(response.data)
  }

  async function fetchUserIssues() {
    const response = await api.get('repos/artenlf/github-blog/issues')
    setUserIssues(response.data)
  }

  async function fetchIssueData(issueNumber: number) {
    const response = await api.get(
      `repos/artenlf/github-blog/issues/${issueNumber}`,
    )

    setIssue(response.data)
  }

  const fetchUserIssuesSearch = useCallback(async (query?: string) => {
    const response = await api.get(`search/issues`, {
      params: {
        _sort: 'createdAt',
        q: `${query}repo:artenlf/github-blog`,
      },
    })
    setUserIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchUserProfileData()
    fetchUserIssues()
  }, [])

  return (
    <GitHubDataContext.Provider
      value={{
        userProfileData,
        userIssues,
        issue,
        fetchUserProfileData,
        fetchUserIssues,
        fetchIssueData,
        fetchUserIssuesSearch,
      }}
    >
      {children}
    </GitHubDataContext.Provider>
  )
}
