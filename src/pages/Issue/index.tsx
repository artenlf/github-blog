import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import {
  GitHubDataContext,
  UserIssuesProps,
} from '../../contexts/GitHubDataContext'
import { Article } from './components/Article'
import { Title } from './components/Title'

export interface IssueProps {
  issue: UserIssuesProps
}

export function Issue() {
  const issue = useContextSelector(GitHubDataContext, (context) => {
    return context.issue
  })

  const { issueNumber } = useParams()

  const fetchIssueData = useContextSelector(GitHubDataContext, (context) => {
    return context.fetchIssueData
  })

  useEffect(() => {
    fetchIssueData(Number(issueNumber))
  }, [fetchIssueData, issueNumber])

  return (
    <main>
      <Title issue={issue} />
      <Article issue={issue} />
    </main>
  )
}
