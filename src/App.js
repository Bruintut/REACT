/*import React, { Component } from 'react';

class App extends React.Component{
    state = {
        isLoading: true,
        cavaleiros: [],
        error: null
    }

    GetFetchCavaleiros(){
        this.setState({
            loading: true
        }, ()=> {
            fetch("http://localhost:3000/cavaleiros").then(res => res.json()).then(result => this.setState({
                loading: false,
                cavaleiros: result
            })).catch(console.log);
        });
    }

    componentDidMount(){
        this.GetFetchCavaleiros();
    }

    render(){
        const {cavaleiros,error} = this.state;
    }
}
export default App;*/
