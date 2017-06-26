import React from 'react';
import ReactDOM from 'react-dom';
import CatRow from './CatRow.jsx';
import CatCategoryRow from './CatCategoryRow.jsx';

class CatTable extends React.Component {


    getRows(category){
      const allKitties = this.props.kitties;
      const items = allKitties.filter(cat => {
        return cat.category === category;
      })

      const rows = items.map(cat => {
        return <CatRow key={cat.name} cat={cat}/>;
      })
      return rows;
    }

    render () {

        const maleRow = this.getRows('male');
        const femaleRow = this.getRows("female");
        return <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <CatCategoryRow category="male"/>
              {maleRow}
              <CatCategoryRow category="female"/>
              {femaleRow}
            </tbody>
          </table>
    }
}
export default CatTable;
