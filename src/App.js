       import React from 'react';
       import ReactDOM from 'react-dom/client';        
       import Counter from './components/Counter'  
       
    
       
        const HeadingComponent = ()=>{
          let name = "Rajendra"  
          return ( 
                <div id="container">
                    <Counter />                       
                    <h2>{name}</h2>                                 
                </div>                
            );
        }
        
        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(<HeadingComponent />);       
