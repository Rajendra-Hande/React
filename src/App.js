       import React from 'react';
       import ReactDOM from 'react-dom/client'        
       import Counter from './components/Counter'  
       import UserForm from './components/UserForm'
       import TodoList from './components/TodoList' 
    
       
        const HeadingComponent = ()=>{
          let name = "Rajendra"  
          return ( 
                <div id="container">
                    <TodoList />                       
                    <h2>{name}</h2>                                 
                </div>                
            );
        }
        
        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(<HeadingComponent />);       
