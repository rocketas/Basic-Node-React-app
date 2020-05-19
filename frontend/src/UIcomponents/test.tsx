import React from 'react';
import axios from 'axios';

type TestResponse = {
    data: string
}

// react component returns 

export class Test extends React.Component<{}, TestResponse>{

    constructor(props: {}){
        super(props);
        this.state = { data: ""}
    }

    async query(url: string): Promise<any>{
        let value =  await axios.get(url)
        console.log(value)
        return value
    }

    componentDidMount(){
        console.log("in component did mount")
        this.query("http://localhost:3001/test").then( response =>{
            console.log(response)
            this.setState({
                data: response.data
            })
        })
    }

    render(){
        return(
        <p>{this.state.data}</p>
        )
    }

}
