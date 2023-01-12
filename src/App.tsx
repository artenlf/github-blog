import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GitHubDataProvider } from './contexts/GitHubDataContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitHubDataProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </GitHubDataProvider>
    </ThemeProvider>
  )
}
