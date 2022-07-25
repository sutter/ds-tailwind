import React from "react"
import type { NextPage } from "next"

import Button from "../components/Button"

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Hello World</h1>
      <Button label="Button" />
    </div>
  )
}

export default Home
