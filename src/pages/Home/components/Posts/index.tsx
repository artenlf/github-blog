import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link } from 'react-router-dom'
import { IssueProps } from '../../index'
import { PostsContainer, PostsContent } from './styles'

export function Posts({ userIssues }: IssueProps) {
  return (
    <PostsContainer>
      {userIssues.map((issue) => {
        return (
          <PostsContent key={issue.id}>
            <h2 className="title">
              <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
            </h2>

            <span className="date">
              {formatDistanceToNowStrict(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
            <ReactMarkdown className="article">{issue.body}</ReactMarkdown>
          </PostsContent>
        )
      })}
    </PostsContainer>
  )
}
