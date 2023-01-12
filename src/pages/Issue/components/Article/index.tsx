import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { ArticleContainer } from './styles'

export function Article() {
  return (
    <ArticleContainer>
      <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
    </ArticleContainer>
  )
}
