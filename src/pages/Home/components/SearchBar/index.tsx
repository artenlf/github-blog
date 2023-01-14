import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { GitHubDataContext } from '../../../../contexts/GitHubDataContext'
import { IssueProps } from '../../index'
import { SearchBarContainer, SearchBarInput } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar({ userIssues }: IssueProps) {
  const fetchUserIssuesSearch = useContextSelector(
    GitHubDataContext,
    (context) => {
      return context.fetchUserIssuesSearch
    },
  )

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleUserIssuesSearch(data: SearchFormInputs) {
    await fetchUserIssuesSearch(data.query)
  }

  return (
    <SearchBarContainer>
      <h3>Publicações</h3>
      <span>
        {userIssues.length > 1
          ? `${userIssues.length} publicações`
          : `${userIssues.length} publicação`}
      </span>
      <SearchBarInput
        {...register('query')}
        placeholder="Buscar conteúdo"
        onBlur={handleSubmit(handleUserIssuesSearch)}
      />
    </SearchBarContainer>
  )
}
