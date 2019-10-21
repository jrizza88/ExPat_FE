import React from "react";
import axios from 'axios';

const baseURL = `${process.env.API_URL}/api`

axios.defaults.baseURL = 'https://expat-lambda.herokuapp.com/';