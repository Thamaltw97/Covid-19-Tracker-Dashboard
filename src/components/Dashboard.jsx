import React, { Component } from "react";
import Axios from 'axios';

class Dashboard extends Component{

    constructor(){
        super();
    
        this.state = {
          statistics: []
        }

    }

    componentDidMount(){
        Axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
        .then(res => {
            if(res.data.success === true){
              this.setState({
                  statistics: res.data.data
              })
              console.log(res.data.data);
            } else {
                alert('Error occured from server. Sorry for the inconvenience.');
            }
            
        })
        .catch(err => {
            console.log('Error from client: ' + err);
        })
    }

}

export default Dashboard;