import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 0px;
  height: 13.25rem;
  max-width: 54rem;
  place-content: center;
  padding: 2rem;

  img {
    border-radius: 8px;
    grid-area: 1 / 1 / 4 / 2;
    height: 9.25rem;
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    grid-area: 1 / 2 / 2 / 5;
  }

  .link {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    grid-area: 1 / 5 / 2 / 6;
    place-self: start center;
    text-decoration: none;
    text-transform: uppercase;

    .icon {
      margin-left: 0.5rem;
    }
  }

  p {
    grid-area: 2 / 2 / 3 / 6;
  }

  div {
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    gap: 1.5rem;
    grid-area: 3 / 2 / 4 / 5;
    place-self: end start;

    .icon {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
