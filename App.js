import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Plan from './Plan';

 class App extends Component {
  state = {
    item: [],
    text:""
  }
  handelChange = e =>{
    this.setState({ text: e.target.value })
  }
handleAdd = e  => {
    if (this.state.text !==  "") {
      const item = [...this.state.item, this.state.text];
      this.setState({ item:item, text:""});
      
    }
  }
handleDelete = id => {
  console.log("Deleted",id);
  const Olditem = [...this.state.item]
  console.log("olditem", Olditem);
  const item = Olditem.filter((element, i) => {
    return i !== id
  })
  this.setState({item: item  });
 
}
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto shadow-lg p-3'>
            <h2 className='text-center' >Today's plan</h2>
            <div className='row'>
              <div className='col-9'>
                <input type="text" className='form-control' placeholder="Write plan here" value={this.state.text} onChange={this.handelChange}/>
                <div className='col-2'>
                  <button className="btn btn-warning px-5 font-weigth-bold" onClick={this.handleAdd}>Add</button>
                <div className='container-fluid my-5'>   
                  <ul className='list-unstyled row m-5 text-white'>
                  
              {
              this.state.item.map((value,i)=>{
                return <Plan  key={i}  id={i} value=
                 {value} sendData={this.handleDelete}/>
              })
              }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default App;