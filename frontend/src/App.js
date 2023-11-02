import './App.css';
import CreateTicket from './components/CreateTicket';
import ListTickets from './components/ListTickets';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Container from "react-bootstrap/Container"
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';


function App() {
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={()=><h1>Home</h1>}/>
                    <Route exact path="/tickets" render={()=><ListTickets />}/>
                    <Route exact path="/create-ticket" render={()=><CreateTicket />}/>
                    <Route exact path="/signin" render={()=><SignIn />}/>
                    <Route exact path="/signup" render={()=><SignUp />}/>
                    <Route render={()=><p>Page not found</p>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;