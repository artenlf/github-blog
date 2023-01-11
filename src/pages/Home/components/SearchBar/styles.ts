import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 4.5rem;
  width: 54rem;

  h3 {
    align-self: center;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    grid-area: 1 / 1 / 2 / 2;
  }

  span {
    align-self: center;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
  }
`
export const SearchBarInput = styled.input`
  align-items: center;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  grid-area: 2 / 1 / 3 / 3;
  height: 3.125rem;
  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
