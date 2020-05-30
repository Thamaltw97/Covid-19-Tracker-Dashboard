import React, { Component } from "react";
import Axios from 'axios';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TotalCasesImage from '../images/icon-4.d002c132.gif';
import LocalDeaths from '../images/icon-1.403b9d8b.gif';
import LocalRecovered from '../images/icon-3.1348ba98.gif';
import LocalHospitalized from '../images/icon-5.5c1a2221.gif';
import PcrTest from '../images/eye_transparent.gif';
//import etst from '../images/'

class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            statistics: []
        }

    }

    componentDidMount() {
        Axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res => {
                if (res.data.success === true) {
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

    render() {
        return (

            <div>
                <br />
                <div className="container pt-3" >
                    <div className="card bg-light">
                        <div className="card-body" align="center" >
                            <h2>COVID-19 : Live Situational Analysis Dashboard</h2>
                            <br />
                            <span className="badge p-2" style={{ background: '#ffffff' }}>
                                <h5>Last Update Time : {this.state.statistics.update_date_time}</h5>
                            </span>
                        </div>
                    </div>
                </div>

                <br />

                <Tabs>
                    <TabList style={{ width: '90%', margin: '1rem auto', height: '25px' }}>
                        <Tab style={{ background: '#d5f4e6', width: '50%', height: '200%' }}><h3>Sri Lanka</h3></Tab>
                        <Tab style={{ background: '#f4e1d2', width: '50%', height: '200%' }}><h3>World</h3></Tab>
                    </TabList>

                    <TabPanel>
                        <br />
                        <div className="row" style={{ width: '91%', margin: '0rem auto' }}>
                            <div className="col-md-12" >
                                <fieldset className="custom-border bg-white">
                                    <legend className="custom-border">Total Figures</legend>

                                    <div className="row" style={{ width: '100%', margin: '2rem auto' }}>
                                        <div className="col-md-3">
                                            <div className="card bg-light border border-primary">
                                                <div className="card-body">
                                                    <img src={TotalCasesImage} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>

                                                    <h3>Total Confirmed Cases</h3>
                                                    <h1>{this.state.statistics.local_total_cases}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
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

                                </fieldset>
                            </div>
                        </div>




                        <br />
                        <div className="row" style={{ width: '91%', margin: '0rem auto' }}>
                            <div className="col-md-6" >
                                <fieldset className="custom-border bg-white">
                                    <legend className="custom-border">New Figures</legend>

                                    <div className="row" style={{ width: '100%', margin: '2rem auto' }}>

                                        <div className="col-md-6">
                                            <div className="card bg-light border border-primary">
                                                <div className="card-body">
                                                    <img src={TotalCasesImage} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>

                                                    <h3>New Cases</h3>
                                                    <h1>{this.state.statistics.local_new_cases}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-md-6">
                                            <div className="card bg-light border border-danger">
                                                <div className="card-body">
                                                    <img src={LocalDeaths} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>
                                                    <h3>New Deaths</h3>
                                                    <h1>{this.state.statistics.local_new_deaths}</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </fieldset>
                            </div>

                            <div className="col-md-4" >
                                <fieldset className="custom-border bg-white">
                                    <legend className="custom-border">PCR Tests</legend>

                                    <div className="row" style={{ width: '100%', margin: '2rem auto' }}>

                                        <div className="col-md-12">
                                            <div className="card bg-light border border-primary">
                                                <div className="card-body">
                                                    <img src={PcrTest} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>

                                                    <h3>Total PCR Test Count</h3>
                                                    <h1>{this.state.statistics.total_pcr_testing_count}</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </fieldset>
                            </div>

                        </div>




                        {/* <div className="row" style={{ width: '91%', margin: '0rem auto' }}>
                            <div className="col-md-6" >
                                <fieldset className="custom-border bg-white">
                                    <legend className="custom-border">PCR Tests</legend>

                                    <div className="row" style={{ width: '100%', margin: '2rem auto' }}>

                                        <div className="col-md-6">
                                            <div className="card bg-light border border-primary">
                                                <div className="card-body">
                                                    <img src={LocalRecovered} alt="card icon" className="figures-icon" style={{ maxWidth: '20%' }}></img>

                                                    <h3>Total PCR Test Count</h3>
                                                    <h1>{this.state.statistics.total_pcr_testing_count}</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </fieldset>
                            </div>
                        </div> */}





                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>



            </div>

        )
    }

}

export default Dashboard;