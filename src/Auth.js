import {Component} from 'react'
import {Card, Container, Button, TextField} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default class Auth extends Component {

    render() {

        return(

            <Container className='flex-box container-auth' style={{maxWidth: '100%', backgroundColor: '#4E36E8'}}>

                <Card className='card-login'>

                <h2>Acesso a planilha de Atividade</h2>

                <TextField className="input-login"
          id="outlined-email-input"
          label="E-mail"
          type="email"
          autoComplete="current-email"
          variant="outlined"
        />
                        <TextField className="input-login"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
                        <Link to="/" ><Button variant="contained">Login</Button> </Link>
                </Card>
            </Container>
        );
    }
} 