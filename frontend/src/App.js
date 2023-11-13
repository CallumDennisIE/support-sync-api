// Network based imports
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';

// Style based imports
import './App.css';

// Package based import
import Container from "react-bootstrap/Container";

// Custom component imports
import CreateTicket from './components/CreateTicket';
import Ticket from './components/Ticket';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TicketsPage from './components/TicketsPage';
import EditTicket from './components/EditTicket';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => <h1>Welcome to Support Sync</h1>} />
                    <Route exact path="/tickets/" render={() => <TicketsPage message="No tickets found. Try a different search query." />} />
                    <Route exact path="/tickets/:id" render={() => <Ticket />} />
                    <Route exact path="/tickets/:id/edit" render={() => <EditTicket />} />
                    <Route exact path="/create-ticket" render={() => <CreateTicket />} />
                    <Route exact path="/signin" render={() => <SignIn />} />
                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route render={() => <NotFound />} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;