import Home from './HomePage/Home';
import './App.css';
import LoginForm from './SignInPage/LoginForm';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import BlogForm from './BlogPage/BlogForm';

function App() {
  return (
   <>
   <Provider store={Store}>
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Blogger' element={<BlogForm/>}/>
        <Route path='/blogger/delete' element={<BlogForm/>}/>
        <Route path='/blogger/update' element={<BlogForm/>}/>
        <Route path='/blogger/edit' element={<BlogForm/>}/>
        <Route path='/blogger/clearall' element={<BlogForm/>}/>
        
     
      </Routes>
    </Router>
     {/* <PageNavbar/> */}
      </Provider>
      </>

   
  );
}

export default App;
