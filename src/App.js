import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClicked from './components/ClassClicked';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import AreaTextHandle from './components/AreaTextHandle';
import SelectTextHandle from './components/SelectTextHandle';
import MutipleInputs from './components/MutipleInputs';
import RegistrationForm from './components/RegistrationForm';
import Validation from './components/Validation';
import RefsDemo from './components/RefsDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PersonList from './components/PersonList';
import PersonInput from './components/PersonInput';
import FetchData from './components/FetchData';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error404 from './components/Error404';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components-amazon/Home';
import CartForm from './components-amazon/CartForm';
import Invoice from './components-amazon/Invoice';
import Confirm from './components-amazon/Confirm';
import Error from './components-amazon/Error';



function App() {
  return (
    <div className="App"> 
      
      {/* <BrowserRouter>
        <Switch>cd 
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={CartForm} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/confirm" component={Confirm} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>    */}




      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      
      

      {/* <BrowserRouter>
        <Switch>
         <Route exact path="/" component={About} />
         <Route path="/contact" component={ContactUs} />
         <Route component={Error404} />
        </Switch>                                 
      </BrowserRouter>       */}

      {/* <FetchData /> */}

      {/* <PersonInput /> 
      <PersonList /> */}

      {/* <PostList /> */}
      {/* <PostForm /> */}


    
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>     */}
    

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn)=> isLoggedIn? "Sid": "Guest" }/> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <ErrorBoundary><Hero heroName="Batman" /></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Superman" /></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Joker" /></ErrorBoundary> */}
      
      {/* <RefsDemo /> */}
      {/* <Validation />    */}
      {/* <RegistrationForm /> */}
      {/* <MutipleInputs /> */}
      {/* <SelectTextHandle />  */}
      {/* <AreaTextHandle />      */}
      <Todo />
      {/* <TodoForm /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClicked />      
      <Message />
      <Greet name="Bruce" heroname="Superman">
        <p>This is a paragraph</p>
      </Greet>
      <Greet name="Siddharth" heroname="Batman" />
      <Greet name="Tan" heroname="WonderWomen" />      
      <Welcome name="Bruce" heroname="Superman" />
      <Welcome name="Siddharth" heroname="Batman"> 
        <button>Click me</button>
      </Welcome>
      <Welcome  name="Tan" heroname="WonderWomen"/> */}
    </div>
  );
}

export default App;
