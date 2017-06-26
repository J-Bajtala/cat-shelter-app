import React from 'react';
import ReactDOM from 'react-dom';





class CatTable extends React.Component {
      render () {


      const allKitties = this.props.kitties;
      const maleCat = allKitties.filter(cat => {
        return cat.category === 'male';
      })

      const maleCatList = maleCat.map(cat => {
        return <tr key = {cat.name+cat.age}>
                  <td>{cat.name}</td>
                  <td>{cat.age}</td>
               </tr>
      })




         return <table>
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>Age</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <th colSpan="2">male</th>
                     </tr>
                         {maleCatList}
                     <tr>
                         <th colSpan="2">female</th>
                     </tr>
                     <tr>
                         <td>Yude</td>
                         <td>4</td>
                     </tr>
                 </tbody>
             </table>

      }
  }
export default CatTable;
