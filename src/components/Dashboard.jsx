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

    render(){
        return(

            <div>

            <div className="container pt-3" >
                <div className="card bg-light">
                    <div className="card-body" align="center">
                        <h2>COVID-19 : Live Situational Analysis Dashboard</h2>
                        <br/>
                        <span className="badge p-2" style={{ background: '#ffffff' }}>
                            <h5>Last Update Time : {this.state.statistics.update_date_time}</h5>
                        </span>
                    </div>
                </div>
            </div>

            </div>

        )
    }

}

export default Dashboard;