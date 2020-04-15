import React from 'react';
import MUIDataTable from 'mui-datatables';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { FormGroup, TextField, FormLabel } from '@material-ui/core';
import moment from 'moment';

import './Table.css';
class Table extends React.Component {
    render() {
        const columns = [
            {
                name: 'Date',
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
                name: 'Customer',
                options: {
                    filter: true,
                    filterType: 'textField',
                },
            },
            {
                name: 'Device',
                options: {
                    filter: true,
                    filterType: 'textField',
                },
            },
            {
                name: 'Received By',
                options: {
                    filter: true,
                    filterType: 'textField',
                },
            },
            'State',
        ];

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

        const options = {
            filter: true,
            print: false,
            filterType: 'multiple',
            responsive: 'scroll',
            selectableRows: 'none',
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
                </div>
                <MUIDataTable
                    title={this.props.name + ' List'}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

export default Table;
