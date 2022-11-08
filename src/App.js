import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './Mobile.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import HeadingNews from './pages/HeadingNews';

// https://xd.adobe.com/view/cdf13db8-4c0e-44e1-b198-09d5152925ee-98a2/

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/headingNews" component={HeadingNews} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
