import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { IssueProps } from '../../index'
import { ArticleContainer } from './styles'

export function Article({ issue }: IssueProps) {
  const markdown = issue.body

  return (
    <ArticleContainer>
      <ReactMarkdown
        components={{
          code({
            node,
            inline,
            className,
            children,
            style,
            ...props
          }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </ArticleContainer>
  )
}
