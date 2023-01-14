import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { IssueProps } from '../../index'
import { ArticleContainer } from './styles'

export function Article({ issue }: IssueProps) {
  return (
    <ArticleContainer>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </ArticleContainer>
  )
}
