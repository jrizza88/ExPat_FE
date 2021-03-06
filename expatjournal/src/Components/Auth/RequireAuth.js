import React from "react";
import axios from 'axios';

const baseURL = `${process.env.API_URL}`

axios.defaults.baseURL = 'https://expat-lambda.herokuapp.com/';

axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt')

        return options;
    },

    function(error){
        return Promise.reject(error)
    }
);

export default function(Component) {
    return class Authenticated extends 
    React.Component {
        render() {
            const token = localStorage.getItem('jwt');

            const notLoggedIn = <div>Login to proceed </div>

            return <> {token ? <Component 
                {...this.props} /> : notLoggedIn} </>
            
        }
    }
}

// export default RequireAuthentication