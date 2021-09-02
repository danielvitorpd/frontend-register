import {Component} from 'react'
import Container from '@material-ui/core/Container'

export default class Planilha extends Component {

    constructor() {

        super();
        this.state = {

            weekValues: [],
            week: "",
            cubeSat: "",
            poliMundi: "",
            errorMessage: "",


        }
        this.createWeek = this.createWeek.bind(this);
        this.setWeek = this.setWeek.bind(this);
        this.setCubeSat = this.setCubeSat.bind(this);
        this.setPoliMundi = this.setPoliMundi.bind(this);
    }

    componentDidMount() {

        fetch("http://localhost:4000/auth", {method: 'GET', mode: 'cors',})
        .then(async res => {

            const data = await res.json();
            this.setState({weekValues: data})

        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    createWeek(event) {

        this.setState({weekValues: this.state.weekValues.concat({"week": this.state.week, "cubeSat": Number(this.state.cubeSat), "poliMundi": Number(this.state.poliMundi)})})

        var variables = {"week": this.state.week, "cubeSat": Number(this.state.cubeSat), "poliMundi": Number(this.state.poliMundi)}

        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
            body: JSON.stringify(variables),
        }

        fetch("http://localhost:4000/auth/register", requestOptions).then(res => {
            
            console.log(res)
        })
        }

    setWeek(e) {
        this.setState({ week: e.target.value });
    }
    setCubeSat(e) {
        this.setState({ cubeSat: e.target.value });
    }
    setPoliMundi(e) {
        this.setState({ poliMundi: e.target.value });
    }

    

    render() {

        return(
            <>
            <Container className='flex-box' style={{margin: '10rem auto'}}>
                <table>

                <tr>
                    <th>Projeto</th>
                    {
                        this.state.weekValues.map((res) => {

                            var week = res.week.split('T');
                            return <td>{week[0]}</td>
                        })
                    }
                </tr>
                <tr>
                    <td>CubeSat</td>
                    {
                        this.state.weekValues.map((res) => {

                            return <td>{res.cubeSat}</td>
                        })
                    }
                
                </tr>
                <tr>
                    <td>Poli Mundi</td>
                    {
                        this.state.weekValues.map((res) => {

                            return <td>{res.poliMundi}</td>
                        })
                    } 
                </tr>
                </table>
            </Container>

            <Container className='flex-box'>

                <h2>Insira os valores abaixo:</h2>
                <form>
                    <label>Semana</label>
                <input name='week' type='text' value={this.state.week} onChange={this.setWeek}></input>
                <label>cubeSat</label>
                <input name='cubeSat' type='text' value={this.state.cubeSat} onChange={this.setCubeSat}></input>
                <label>Poli Mundi</label>
                <input name='poliMundi' type='text' value={this.state.poliMundi} onChange={this.setPoliMundi}></input>
                </form>

                <button type='button' onClick={this.createWeek}>Enviar</button>

            </Container>
            </>
        );
    }
}