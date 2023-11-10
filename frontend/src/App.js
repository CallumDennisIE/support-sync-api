import './App.css';
import CreateTicket from './components/CreateTicket';
import Ticket from './components/Ticket';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import TicketsPage from './components/TicketsPage';


function App() {
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => <TicketsPage message="No tickets found. Try a different search query." />} />
                    <Route exact path="/tickets/:id" render={() => <Ticket />} />
                    <Route exact path="/create-ticket" render={() => <CreateTicket />} />
                    <Route exact path="/signin" render={() => <SignIn />} />
                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route render={() => <p>Page not found</p>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;