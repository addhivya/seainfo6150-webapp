import React, { Component } from 'react';
//import List from './List';
import Article from './Article'

class App extends Component {
  render() {
	  
	  const array=[{ text: "Hi",}];
	  
	  return (
	  <div className="App">
		<String str={array}/>
	  </div>
	  );
  }
}

export default App;
	  
	  

  /*  const array = [
      { firstName: "April", lastName: "Bingham" },
      { firstName: "Tom", lastName: "Cruise" },
      { firstName: "Mickey", lastName: "Mouse" }
    ];

    return (
      <div className="App">
        <List list={array} />
      </div>
    );
  }
}

export default App; */
