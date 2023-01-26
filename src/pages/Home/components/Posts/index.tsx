import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link } from 'react-router-dom'
import { IssueProps } from '../../index'
import { Pagination, PostsContainer, PostsContent } from './styles'

export function Posts({ userIssues }: IssueProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage] = useState(6)

  const indexOfFirstIssue = currentPage * perPage
  const indexOfLastIssue = indexOfFirstIssue + perPage
  const currentIssues = userIssues.slice(indexOfFirstIssue, indexOfLastIssue)

  return (
    <>
      <PostsContainer>
        {currentIssues.map((issue) => {
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

      <Pagination
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(userIssues.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(e) => setCurrentPage(e.selected)}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  )
}
