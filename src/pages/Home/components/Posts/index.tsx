import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { IssueProps } from '../../index'
import { PostsContainer, PostsContent } from './styles'

export function Posts({ userIssues }: IssueProps) {
  return (
    <PostsContainer>
      {userIssues.map((issue) => {
        return (
          <PostsContent key={issue.id}>
            <h2>
              <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
            </h2>

            <span>
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
            <p>{issue.body}</p>
          </PostsContent>
        )
      })}
    </PostsContainer>
  )
}
