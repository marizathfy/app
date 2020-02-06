import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const people = [
  "Lorem Ipsum 1",
  "Lorem Ipsum 2",
  "Lorem Ipsum 3",
  "Lorem Ipsum 4",
  "Lorem Ipsum 5",
  "Lorem Ipsum 6"

];

function App() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  
  return (


  <div className="App container">

    <div class="container product">
      <div class="row list-product">
        <div class="col-lg-4 col-xs-12 _list_product">
          <a href="">
            <img src="image/1.png" class="img-responsive"/>
            <h1>
              Lorem Ipsum 1
            </h1>
          </a>
          <h2>Rp 400.000</h2>
        </div>
        <div class="col-lg-4 col-xs-12 _list_product">
          <img src="image/1.png" class="img-responsive"/>
          <a href="">
            <h1>
              Lorem Ipsum 2
            </h1>
          </a>
          <h2>Rp 400.000</h2>
        </div>
        <div class="col-lg-4 col-xs-12 _list_product">
          <img src="image/1.png" class="img-responsive"/>
          <a href="">
            <h1>
              Lorem Ipsum 3
            </h1>
          </a>
          <h2>Rp 400.000</h2>
        </div>
        <div class="col-lg-4 col-xs-12 _list_product">
          <img src="image/1.png" class="img-responsive"/>
          <a href="">
            <h1>
              Lorem Ipsum 4
            </h1>
          </a>
          <h2>Rp 400.000</h2>
        </div>
        <div class="col-lg-4 col-xs-12 _list_product">
          <img src="image/1.png" class="img-responsive"/>
          <a href="">
            <h1>
              Lorem Ipsum 5
            </h1>
          </a>
          <h2>Rp 400.000</h2>
        </div>
        <div class="col-lg-4 col-xs-12 _list_product">
          <img src="image/1.png" class="img-responsive"/>
          <a href="">
            <h1>
              Lorem Ipsum 6
            </h1>
          </a>
          <h2>Rp 400.000</h2>
        </div>
      </div>

    </div>
  </div>
  );
}

export default App;
