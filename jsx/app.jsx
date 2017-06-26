import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx'
import CatTable from './CatTable.jsx'




class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            dynamicText: '',
            checkbox: false
        }
    }

    handleTextChange = event => {
      this.setState({
        dynamicText : event.target.value,
      });
    }

    handleCheckboxChange = event => {
      this.setState({
        checkbox : event.target.checked,
      });
    }





      render () {

     const kitties = this.props.kitties.filter(cat => {
       if(this.state.checkbox && !cat.likesKids) {
         return false;
       }

       if(this.state.dynamicText.length > 0 && cat.name.toLowerCase().indexOf(this.state.dynamicText.toLowerCase()) === -1){
         return false;
       }
       return true;
     })






         return <section>

             <SearchBar onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckboxChange} dynamicText={this.state.dynamicText} checkbox={this.state.checkbox} />
             <CatTable kitties = {kitties}/>
         </section>
      }
  }
export default App;
