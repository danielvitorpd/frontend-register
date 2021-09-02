import {Component} from 'react'
import Container from '@material-ui/core/Container';



export default class Header extends Component {

    render() {

        return(

            <Container className='flex-box' style={{backgroundColor: '#C9C9C9', maxWidth: '100%'}}>

                <h1>Planilha de Atividades de user </h1>

            </Container>


        );
    }
}