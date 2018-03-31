import axios from 'axios';
import { localUrl } from './../utils/AppConfig';

export function SendLoginData(data) {
    axios({
        method: 'post',
        url: `${localUrl}/api/session`,
        data: {
            username: data.username,
            password: data.password
        }
    })
}