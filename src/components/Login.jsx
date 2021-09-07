import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Link} from 'react-router-dom'

const URL = 'https://appmoviesoscar.herokuapp.com/usuario';
export default class Login extends Component {
    constructor() {
            super();
            this.state = {
                form: {
                    username: "",
                    password: ""
                }
            }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) //imprimir todo el estado 
    }

    iniciarSesion = async () => {
        await axios.get(URL,{params:{username:this.state.form.username}})
        .then((response) =>{return response.data})
        .then((response) =>{
            console.log(response.username)
            if (response.length) {
                axios.get(URL,{params:{password:md5(this.state.form.password)}})
                .then((response) =>{return response.data})
                .then((response) =>{
                if (response.length) {
                let lengthResponse = response[0]
                alert(`Bienvenido ${lengthResponse.nombre} ${lengthResponse.primer_apellido}`)
                }else{
                    alert(`Clave incorrecta`)
                }
            })
            } else {
                alert('usuario no registrado')
            }

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.iniciarSesion()
    }
    render() {

        return (
            <div>
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                    name ="username"
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    onChange={this.handleChange}
                    name ="password"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="">
                    <p>Login with social networks</p>

                    <div className="google-btn btn-primary">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                  <Link
                    to="/registro"
                    className="Link"
                   >
                    Crear una nueva cuenta
                </Link>
            </form>
        </div>
        )
    }
}