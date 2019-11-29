import React, { Component, Fragment } from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import View from './views/view/index'
import LeftNav from './views/leftNav'
function App() {
  return (
	  <Fragment>
		  <BrowserRouter>
			  <div className='App'>
				  <LeftNav></LeftNav>
				  <Route path='/view' exact component={View}></Route>
				  {/*<Route path='/detail/:id' exact component={Detail}></Route>*/}
			  </div>
		  </BrowserRouter>
	  </Fragment>
  );
}
export default App;
