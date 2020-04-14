import React from 'react'
import MUIDataTable from "mui-datatables";
import VisibilityIcon from '@material-ui/icons/Visibility';
class Table extends React.Component {
 
    render () {
      const columns = ["Date","Customer", "Device", "Received By", "State"];

       const data = [
          ["12/3/2020","Gabby George", "Samsung Note 8", "Ben Franklin", "Repaired"],
          ["30/3/2020","Aiden Lloyd", "Iphone 7", "Mark Holt", "Repaired"],
          ["1/4/2020","Jaden Collins", "Iphone 6 Plus", "Bill Nyle", "To be Repaired"],
          ["4/4/2020","Franky Rees", "LG V20", "Mike Stewart", "To be Repaired"],
          ["23/3/2020","Aaren Rose", "Samsung Note 10", "Toledo Johnson", "Assessed"],
          [
            "3/4/2020",
            "Blake Duncan",
            "Nokia 3.1",
            "Santa Diego",
            "To be Assessed"
          ],
          ["12/3/2020","Gabby George", "Samsung Note 8", "Ben Franklin", "Repaired"],
          ["30/3/2020","Aiden Lloyd", "Iphone 7", "Mark Holt", "Repaired"],
          ["1/4/2020","Jaden Collins", "Iphone 6 Plus", "Bill Nyle", "To be Repaired"],
          ["4/4/2020","Franky Rees", "LG V20", "Mike Stewart", "To be Repaired"],
          ["23/3/2020","Aaren Rose", "Samsung Note 10", "Toledo Johnson", "Assessed"],
          [
            "3/4/2020",
            "Blake Duncan",
            "Nokia 3.1",
            "Santa Diego",
            "To be Assessed"
          ],
   
         
        ];
    
         const options = {
          filter: true,
          print: false,
          filterType: "multiselect",
          responsive: "scroll",
          selectableRows: "none",
          downloadOptions: {
            filename: 'customer-list.csv',
            // separator: ';',
            filterOptions: {
              useDisplayedColumnsOnly: true,
              useDisplayedRowsOnly: true,
            }
          }
        };
        return (
        
          <div class="container-fluid">
       
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">{this.props.name}</h1>
          </div>
              <MUIDataTable
                title={(this.props.name)+" List"}
                data={data}
                columns={columns}
                options={options}
              />
           </div>   
        )
    }
}

export default Table
