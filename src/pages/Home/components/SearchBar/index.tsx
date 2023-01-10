import { SearchBarContainer, SearchBarInput } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <h3>Publicações</h3>
      <span>6 publicações</span>
      <SearchBarInput placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
