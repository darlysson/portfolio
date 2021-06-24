import * as React from "react"

import Home from "components/Home"
import Layout from "components/Layout"

export default function Index() {
  return (
    <Layout showFooter={false}>
      <Home />
    </Layout>
  )
}
