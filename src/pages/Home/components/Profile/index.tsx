import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/artenlf.png" alt="" />
      <h2>Luís Felipe Arten</h2>
      <Link className="link" to="https://github.com/artenlf">
        <span>GitHub</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Link>
      <p>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </p>
      <div>
        <span>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          artenlf
        </span>
        <span>
          <FontAwesomeIcon icon={faBuilding} className="icon" />
          Rocketseat
        </span>
        <span>
          <FontAwesomeIcon icon={faUserGroup} className="icon" />
          35 followers
        </span>
      </div>
    </ProfileContainer>
  )
}
