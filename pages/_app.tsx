import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Layout from 'layout/layout.comp'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { theme } from '../utils/theme'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <React.Fragment>
      <Layout>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </React.Fragment>
  )
}

export default App
