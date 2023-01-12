/* eslint-disable */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { TitleContainer } from './styles'

export function Title() {
  return (
    <TitleContainer>
      <Link className="return" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Voltar</span>
      </Link>
      <Link className="repo" to="#">
        <span>Ver no GitHub</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Link>
      <h1>JavaScript data types and data structures</h1>
      <div>
        <span>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          artenlf
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} className="icon" />
          Há 1 dia
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} className="icon" /> 5 comentários
        </span>
      </div>
    </TitleContainer>
  )
}
