import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContextSelector } from 'use-context-selector'
import { GitHubDataContext } from '../../../../contexts/GitHubDataContext'
import { ProfileContainer } from './styles'

export function Profile() {
  const userProfileData = useContextSelector(GitHubDataContext, (context) => {
    return context.userProfileData
  })

  return (
    <ProfileContainer>
      <img src={userProfileData.avatar_url} alt="" />
      <h2>{userProfileData.name}</h2>
      <a
        className="link"
        href={userProfileData.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
      <p>{userProfileData.bio}</p>
      <div>
        <span>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          {userProfileData.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faBuilding} className="icon" />
          {userProfileData.company !== null
            ? userProfileData.company
            : 'Rocketseat'}
        </span>
        <span>
          <FontAwesomeIcon icon={faUserGroup} className="icon" />
          {userProfileData.followers} followers
        </span>
      </div>
    </ProfileContainer>
  )
}
