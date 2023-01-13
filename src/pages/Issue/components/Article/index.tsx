import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { IssueTitleProps } from '../..'
import { ArticleContainer } from './styles'

export function Article({ issue }: IssueTitleProps) {
  return (
    <ArticleContainer>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </ArticleContainer>
  )
}
