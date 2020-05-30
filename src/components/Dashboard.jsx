import React, { Component } from "react";
import Axios from 'axios';
import TotalCasesImage from '../images/icon-4.d002c132.gif';
import LocalDeaths from '../images/icon-1.403b9d8b.gif';
import LocalRecovered from '../images/icon-3.1348ba98.gif';
import LocalHospitalized from '../images/icon-5.5c1a2221.gif';
//import etst from '../images/'

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

                <div className="row" style={{ width: '90%', margin: '3rem auto' }}>
                    <div className="col-md-3">
                        <div className="card bg-light border border-primary">
                            <div className="card-body">
                                <img src={TotalCasesImage} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>
                                
                                <h3>Total Confirmed Cases</h3>
                                <h1>{this.state.statistics.local_total_cases}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card bg-light border border-danger">
                            <div className="card-body">
                                <img src={LocalDeaths} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>
                                <h3>Total Deaths</h3>
                                <h1>{this.state.statistics.local_deaths}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card bg-light border border-success">
                            <div className="card-body">
                                <img src={LocalRecovered} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>
                                <h3>Recovered & Discharged</h3>
                                <h1>{this.state.statistics.local_recovered}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card bg-light border border-danger">
                            <div className="card-body">
                                <img src={LocalHospitalized} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>
                                <h3>Suspected & Hospitalized</h3>
                                <h1>{this.state.statistics.local_total_number_of_individuals_in_hospitals}</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}

export default Dashboard;