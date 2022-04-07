import { createGlobalStyle, ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import ProgressBar from "@badrap/bar-of-progress"
import Router, { useRouter } from "next/router"
import { Provider, useDispatch } from "react-redux"
import store from "../redux/store"

const progress = new ProgressBar({
  size: 3,
  color: "teal",
  className: "bar-of-progress",
  delay: 50,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Urbanist",'Noto Sans SC', 'sans-serif';
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: teal;
    &:hover {
      font-weight: 500;
    }
  }

  .bar-of-progress {
    box-shadow: none;
    z-index: 50;
  }
`

const theme = {
  colors: {
    primary: "#0070f3",
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  )
}
