
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import OurServices from './components/OurServices/OurServices';
import OurDoctor from './components/OurDoctor/OurDoctor';
import ContactUs from './components/ContactUs/ContactUs';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Doctors/Register/Register';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Router exact path="/">
              <Home></Home>
            </Router>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/ourservices/:id">
              <OurServices></OurServices>
            </PrivateRoute>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/doctor">
              <OurDoctor></OurDoctor>
            </Route>
            <Router exact path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
