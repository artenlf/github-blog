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

interface GitHubDataContextType {
  userProfileData: UserProfileDataProps
  fetchUserProfileData: () => Promise<void>
}

interface GitHubDataProviderProps {
  children: ReactNode
}

export const GitHubDataContext = createContext({} as GitHubDataContextType)

export function GitHubDataProvider({ children }: GitHubDataProviderProps) {
  const [userProfileData, setUserProfileData] = useState(
    {} as UserProfileDataProps,
  )

  async function fetchUserProfileData() {
    const response = await api.get('')
    setUserProfileData(response.data)
  }

  useEffect(() => {
    fetchUserProfileData()
  }, [])

  return (
    <GitHubDataContext.Provider
      value={{ userProfileData, fetchUserProfileData }}
    >
      {children}
    </GitHubDataContext.Provider>
  )
}
