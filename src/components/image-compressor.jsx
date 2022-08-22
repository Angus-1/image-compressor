import React from 'react';
import ReactDOM from 'react-dom';

import ImageCompressor from 'react-image-compressor';


class App extends React.Component {

    constructor() {
      super()
    }
  
    // Callback When Image Has Been Compressed~
    _getFiles(obj){
      console.log(obj);
    }
  
    render() {
      return (
        <ImageCompressor
          scale={ 100 }
          quality={ 75 }
          onDone={ this._getFiles.bind(this) } />
      )
    }
  
  }
  
  
  ReactDOM.render(<App />, document.getElementById("app"))