import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { IssueProps } from '../../index'
import { TitleContainer } from './styles'

export function Title({ issue }: IssueProps) {
  return (
    <TitleContainer>
      <Link className="return" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Voltar</span>
      </Link>
      <a
        className="repo"
        href={`https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/${issue.number}`}
        target="_blank"
        rel="noreferrer"
      >
        <span>Ver no GitHub</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
      <h1>{issue.title}</h1>
      <div>
        <span>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          {issue.user ? issue.user.login : ''}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} className="icon" />
          {issue.created_at
            ? formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })
            : ''}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} className="icon" />
          {issue.comments > 1
            ? `${issue.comments} comentários`
            : `${issue.comments} comentário`}
        </span>
      </div>
    </TitleContainer>
  )
}
