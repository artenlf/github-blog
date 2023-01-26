import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  width: 54rem;
`

export const PostsContent = styled.div`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  display: grid;
  gap: 0 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  max-height: 16.25rem;
  max-width: 26rem;
  padding: 2rem;

  .title {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.125rem;
    font-weight: 700;
    grid-area: 1 / 1 / 2 / 5;
  }

  .date {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    grid-area: 1 / 5 / 2 / 6;
    line-height: 2.3;
    min-width: max-content;
    justify-self: end;
  }

  .article {
    grid-area: 2 / 1 / 3 / 6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 5rem;
  width: 54rem;

  li {
    display: flex;
    text-decoration: none;
  }

  a {
    border-radius: 99px;
    color: ${(props) => props.theme['base-subtitle']};
    padding: 0 0.75rem;
  }

  .active {
    border-radius: 99px;
    background-color: ${(props) => props.theme.blue};
  }

  .previous,
  .next {
    font-weight: bold;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
