import React from 'react';
import axios from 'axios';

type TestResponse = {
    data: string
}

// react component returns 
let PORT = 5000
export class Test extends React.Component<{}, TestResponse>{

    constructor(props: {}){
        super(props);
        this.state = { data: ""}
    }

    async query(url: string): Promise<any>{
        let value =  await axios.get(url)
        return value
    }

    componentDidMount(){
        console.log("in component did mount")
        this.query(`http://localhost:${PORT}/test`)
            .then( response =>{
                console.log(response)
                this.setState({
                    data: response.data
                })
            }).catch( error => {
                console.log(error)
                console.log("error while querying")
            })
    }

    render(){
        return(
        <p>{this.state.data}</p>
        )
    }

}
