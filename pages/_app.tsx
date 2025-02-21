import "../styles/globals.css"
import Layout from "../components/Layout"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title={Component.title || "TechCorp"}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp