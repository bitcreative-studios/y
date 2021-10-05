import React, { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import LoremIpsum from '../components/LoremIpsum'
import NewProjectModal from '../components/NewProjectModal'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoremIpsum />
    </Layout>
  )
}

export default Home
