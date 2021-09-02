import { Component } from 'react'
import Header from './layout/Header'
import Planilha from './layout/Planilha'
import Footer from './layout/Footer'

export default class App extends Component {

  render() {

    return(

      <>
        <Header></Header>

        <Planilha></Planilha>

        <Footer></Footer>
      </>
    );
  }
}
