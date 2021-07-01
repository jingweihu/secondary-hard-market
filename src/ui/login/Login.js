import {useContext, useState} from "react";
import {LOGIN} from "../../constants/reducerConstants";
import {Context} from "../../store";
import {useHistory, Link } from 'react-router-dom';


const initialState = {
    email: "",
    password: "",
    inProgress: false,
};


const Login = () => {
    const [state, dispatch] = useContext(Context);
    let history = useHistory();
    const [
        {email, password, inProgress},
        setState
    ] = useState(initialState);

    const onChange = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        let value = {
            username: 'tim',
            image: ''
        }
        /* fetch api */

        /* clear state */
        dispatch({type: LOGIN, value: value, key: 'currentUser'});
        history.push('/')
    };

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">

                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign In</h1>
                        <p className="text-xs-center">
                            <Link to="/register">
                                Need an account?
                            </Link>
                        </p>

                        {/*<ListErrors errors={this.props.errors} />*/}

                        <form onSubmit={handleSubmit}>
                            <fieldset>

                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}/>
                                </fieldset>

                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}/>
                                </fieldset>

                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                    disabled={inProgress}>
                                    Sign in
                                </button>

                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;