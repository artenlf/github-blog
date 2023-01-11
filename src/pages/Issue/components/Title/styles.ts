import styled from 'styled-components'
import { ProfileContainer } from '../../../Home/components/Profile/styles'

export const TitleContainer = styled(ProfileContainer)`
  max-height: 10.5rem;
  width: 54rem;

  .return {
    grid-area: 1 / 1 / 2 / 2;

    span {
      margin-left: 0.5rem;
    }
  }

  .repo {
    grid-area: 1 / 5 / 2 / 6;
    span {
      margin-right: 0.5rem;
    }
  }

  .repo,
  .return {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    grid-area: 2 / 1 / 3 / 6;
  }

  div {
    color: ${(props) => props.theme['base-span']};
    grid-area: 3 / 1 / 4 / 4;
  }
`
