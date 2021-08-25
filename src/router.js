import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Saved from './pages/Saved'
import NotFound from './pages/NotFound'
import Header from './components/Header'

const Router = () =>
{
  return (
    <BrowserRouter>
      <Header/>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:id' component={Movie} />
        <Route exact path='/saved' component={Saved} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;