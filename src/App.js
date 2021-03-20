import './App.css';
import Greet from './components/Greet.js'
import Hello from './components/Hello.js'
import Login from './components/login.js'

import Person from './components/Person.js'
import Counter from './components/Counter.js'
import Message from './components/Message.js'

import FunctionClick from './components/Events.js'
import ClassEvent from './components/ClassEvent.js'


function App() {
  return (
  <div className="App" >
<ClassEvent></ClassEvent>
{/* <FunctionClick></FunctionClick>
      <Counter></Counter>
        <Login />
   <Hello />
   <Greet name='Charan' age={20}/>
   <Greet name='Raj' age={40}/>
   <Greet name='Charan' age={40}>
       <p>Click me</p>
   </Greet>
   <Person />

   <dev className='person'>
            <h1>Charan</h1>
            <p>Your age:: 27</p>
        </dev>
        <dev className='person'>
            <h1>Charan</h1>
            <p>Your age:: 27</p>
        </dev>
        <dev className='person'>
            <h1>Charan</h1>
            <p>Your age:: 27</p>
        </dev>

<Login name = "Charan Raj"></Login>
<Message></Message> */}

  </div>
  
  );
}

export default App;
