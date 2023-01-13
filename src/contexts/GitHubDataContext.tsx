import { ReactNode, useEffect, useState } from 'react'
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

interface UserIssuesProps {
  id: number
  number: number
  title: string
  created_at: string
  body: string
  comments: number
}

interface GitHubDataContextType {
  userProfileData: UserProfileDataProps
  userIssues: UserIssuesProps[]
  issue: UserIssuesProps
  fetchUserProfileData: () => Promise<void>
  fetchUserIssues: () => Promise<void>
  fetchIssueData: (issueNumber: number) => Promise<void>
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
    const response = await api.get(
      'repos/rocketseat-education/reactjs-github-blog-challenge/issues',
    )
    setUserIssues(response.data)
  }

  async function fetchIssueData(issueNumber: number) {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`,
    )

    setIssue(response.data)
  }

  // repos/artenlf/github-blog/issues
  // const fetchUserIssues = useCallback(async (query?: string) => {
  //   const response = await api.get(
  //     'repos/rocketseat-education/reactjs-github-blog-challenge/issues',
  //     {
  //       params: {
  //         _sort: 'createdAt',
  //         _order: 'desc',
  //         q: query,
  //       },
  //     },
  //   )
  //   setUserIssues(response.data)
  // }, [])

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
      }}
    >
      {children}
    </GitHubDataContext.Provider>
  )
}
