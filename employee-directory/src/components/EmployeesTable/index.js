import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import EmployeesTable from '../../employees.json';
import "./style-table.css";

const data = EmployeesTable;
const columns = [
    {
        name: 'Id',
        selector: 'id',
        hidden: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: false,
    },
    {
        name: 'Occupation',
        selector: 'occupation',
        sortable: true,
    },
    {
        name: 'Location',
        selector: 'location',
        sortable: true,
    }
]

class MyComponent extends Component {
    render() {
        return (
            <DataTable class="table"
                title="Employees"
                columns={columns}
                data={data}
            />
        )
    }
};

export default MyComponent;