import React from "react"
import { Helmet } from "react-helmet"

import Layout from '../layouts'
import PricingCalculator from '../components/PricingCalculator'

export default () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>CALCI CLOUD</title>
          <meta name="description" content="Maximize your profit by choosing the best pricing available on the cloud. We help you compare and get the best pricing solutions for services offered at AWS, GCP and Azure."></meta>
          <link href="https://hsetially.tech" rel="canonical"></link>
          <html lang="en" />
        </Helmet>
        <Layout>
          <PricingCalculator />
        </Layout>
    </div>
  )
};
