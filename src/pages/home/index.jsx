import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'

import { HomeWrapper } from "./home.styled"

import EncodeBase64 from "../../components/encode-base64"

function Home() {
  return (
    <HomeWrapper>
      <BrowserRouter>
          <Redirect to="/base64"/>
          <Route path="/base64" component={EncodeBase64}></Route>
      </BrowserRouter>
    </HomeWrapper>

  )
}

export default Home