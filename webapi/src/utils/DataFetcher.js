import axios from 'axios';

export class DataFetcher {

    constructor(requestUrl) {
        this.requestUrl = requestUrl;
    }

    getDataFromApi() {
        return axios({
            method: 'get',
            url: this.requestUrl
        })
            .then((res) => {
                return res.data[0]
            })
            .catch((err) => {
                console.log(err)
            })
    }

}