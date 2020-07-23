import React from 'react';
import MUIDataTable from 'mui-datatables';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { FormGroup, TextField, FormLabel } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import moment from 'moment';
import axios from 'axios';
import './Table.css';
import Modal from "./modal"
import RingLoader from "react-spinners/RingLoader";

class Table extends React.Component {
    state = {
        keys:[],
        akeys:[],
        ukeys:[],
     
    }
    client = '';
    db = '';
    table = '';
    data = '';
    num='';
    selectData = (name) =>{
        if(name == "Customer"){
            return this.props.customer
        }else if(name == "User"){
            return this.props.user
        }
        else if(name == "Assessment"){
            return this.props.assessment
        }else if(name == "Repairs"){
            return this.props.repair
        }else if(name == "Unlock"){
            return this.props.unlock
        }else if(name == "Charge"){
            return this.props.charge
        }
        else if(name == "Part"){
            return this.props.part
        }
        
    }
    selectColumn = (name) =>{
        if(name == "Customer"){
            return this.state.keys
        }else if(name == "Assessment"){
            return this.state.akeys
        }else if(name == "Repairs"){
            return this.state.akeys
        }else if(name == "Unlock"){
            return this.state.akeys
        }else if(name == "User"){
            return this.state.ukeys
        }else if(name == "Charge"){
            return ["Charge","Technician Commission","Charge to Customer"]
        }else if(name == "Part"){
            return ["ID","Part Name","Current Amount","Roerder Amount"]
        }
    }
    componentDidMount(){
        this.setState({keys:["ID","First Name","Last Name","Email","Phone"]});
        this.setState({akeys:["ID","Customer","Received By","Device","State"]});
        this.setState({ukeys:["ID","Name","Email"]});
    
        
    }

    render() {
        const data = [
            ['12/3/2020', 'Gabby George', 'Samsung Note 8', 'Ben Franklin', 'Repaired'],
            ['30/3/2020', 'Aiden Lloyd', 'Iphone 7', 'Mark Holt', 'Repaired'],
            ['1/4/2020', 'Jaden Collins', 'Iphone 6 Plus', 'Bill Nyle', 'To be Repaired'],
            ['4/4/2020', 'Franky Rees', 'LG V20', 'Mike Stewart', 'To be Repaired'],
            ['23/3/2020', 'Aaren Rose', 'Samsung Note 10', 'Toledo Johnson', 'Assessed'],
            ['3/4/2020', 'Blake Duncan', 'Nokia 3.1', 'Santa Diego', 'To be Assessed'],
            ['12/3/2020', 'Gabby George', 'Samsung Note 8', 'Ben Franklin', 'Repaired'],
            ['30/3/2020', 'Aiden Lloyd', 'Iphone 7', 'Mark Holt', 'Repaired'],
            ['1/4/2020', 'Jaden Collins', 'Iphone 6 Plus', 'Bill Nyle', 'To be Repaired'],
            ['4/4/2020', 'Franky Rees', 'LG V20', 'Mike Stewart', 'To be Repaired'],
            ['23/3/2020', 'Aaren Rose', 'Samsung Note 10', 'Toledo Johnson', 'Assessed'],
            ['3/4/2020', 'Blake Duncan', 'Nokia 3.1', 'Santa Diego', 'To be Assessed'],
        ];

        const customFilter = (options, label) => ({
            logic: (value, filters) => {
                if (filters.length) {
                    // check if value matches string
                    let val = filters.some((e) => value.includes(e));
                    return val !== true;
                }

                return false;
            },
            display: (filterList, onChange, index, column) => {
                return (
                    <div>
                        <Autocomplete
                            id={`auto-${label}`}
                            options={options} // TODO: modify based on actual db
                            renderInput={(params) => (
                                <TextField {...params} label={label} />
                            )}
                            value={filterList[index]}
                            onChange={(e, value) => {
                                onChange(value, index, column);
                            }}
                            freeSolo
                            multiple
                        />
                    </div>
                );
            },
        });
        const columns = [
            {
                name: 'ID',
                options: {
                    filter: true,
                    filterType: 'custom',
                    filterOptions: {
                        logic(date, filters) {
                            let target = moment(date, 'DD-MM-YYYY');
                            let tfilters = filters
                                ? filters.map((f) => moment(f))
                                : filters;

                            if (tfilters[0] && tfilters[1]) {
                                return (
                                    tfilters[0].diff(target) > 0 ||
                                    tfilters[1].diff(target) < 0
                                );
                            } else if (tfilters[0]) {
                                // target is before the filter date
                                return tfilters[0].diff(target) > 0;
                            } else if (tfilters[1]) {
                                return tfilters[1].diff(target) < 0;
                            }
                            return false;
                        },
                        display: (filterList, onChange, index, column) => (
                            <div>
                                <FormLabel>Date Range</FormLabel>
                                <FormGroup row>
                                    <TextField
                                        value={filterList[index][0] || ''}
                                        type="date"
                                        onChange={(event) => {
                                            filterList[index][0] = event.target.value;
                                            onChange(filterList[index], index, column);
                                        }}
                                        style={{ width: '45%', marginRight: '2%' }}
                                    />
                                    -
                                    <TextField
                                        type="date"
                                        value={filterList[index][1] || ''}
                                        onChange={(event) => {
                                            filterList[index][1] = event.target.value;
                                            onChange(filterList[index], index, column);
                                        }}
                                        style={{ width: '45%', marginLeft: '2%' }}
                                    />
                                </FormGroup>
                            </div>
                        ),
                    },
                    print: false,
                },
            },
            {
                name: this.props.name == "Customer" ? "First Name":"Customer",
                options: {
                    filter: true,
                    filterType: 'custom',
                    filterOptions: customFilter(
                        this.selectData(this.props.name).map((r) => r[1]) /** TODO: modify for production */,
                        this.props.name == "Customer" ? "First Name":"Customer"
                    ),
                },
            },
            {
                name: this.props.name == "Customer" ? "Last Name":"Received By",
                options: {
                    filter: true,
                    filterType: 'custom',
                    filterOptions: customFilter(
                        this.selectData(this.props.name).map((r) => r[2]) /** TODO: modify for production */,
                        this.props.name == "Customer" ? "Last Name":"Received By"
                    ),
                },
            },
            {
                name: this.props.name == "Customer" ? "Email":"Device",
                options: {
                    filter: true,
                    filterType: 'custom',
                    filterOptions: customFilter(
                        this.selectData(this.props.name).map((r) => r[3]) /** TODO: modify for production */,
                        this.props.name == "Customer" ? "Email":"Device"
                    ),
                },
            },
            this.props.name == "Customer" ? "Phone":"State",
        ];


        const options = {
            filter: true,
            print: false,
            filterType: 'dropdown',
            responsive: 'stacked',
            selectableRows: 'none',
            rowsPerPage: 10,
            downloadOptions: {
                filename: 'customer-list.csv',
                // separator: ';',
                filterOptions: {
                    useDisplayedColumnsOnly: true,
                    useDisplayedRowsOnly: true,
                },
            },
        };
       
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{this.props.name}</h1>
                  {this.props.name == "Assessment" || this.props.name == "User" || this.props.name == "Charge" ? <a class="btn btn-primary" data-toggle="modal"
                    data-target={"#"+this.props.name+"Modal"}><span style={{color:"white"}}>Add new {this.props.name}</span></a>
                  :""}<Modal value={this.props.user}/>
                </div>
                {this.selectData(this.props.name) == 0 ?
                  <div style={{marginLeft:'400px',MarginTop:'400px'}}>  <RingLoader
                        size={100}
                        color={"#123abc"}
                    /><span style={{marginLeft:'20px'}}>Loading...</span></div>
                    :
                <MUIDataTable
                    title={this.props.name + ' List'}
                    data={this.selectData(this.props.name)}
                    columns={this.selectColumn(this.props.name)}
                    options={options}
                />
            }
            </div>
        );
    }
}

export default Table;
