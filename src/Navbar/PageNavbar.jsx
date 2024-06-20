import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
const PageNavbar = () => {

  return (
    <>  
      <AppBar sx={{background:'#d06363'}} >
      <Toolbar>
        <Box sx={{flexGrow: 1 }}>
         <Tabs textColor="inherit"> 
          <Tab icon={
            <img src="https://static.vecteezy.com/system/resources/previews/006/226/901/original/creative-cooking-art-logo-combination-fork-spoon-and-pencil-for-food-writer-blog-restaurant-recipes-logo-design-inspiration-vector.jpg"
            height={40}
            alt='Logo'/>
          }/>
       <Tab  component={Link} to="/Home" sx={{textAlign: 'center'}} label="Home"/>
         <Tab  component={Link} to="/Blogger" label="Blogger"/>
         </Tabs>
         </Box>
         <Tabs textColor="inherit">
         <Tab component={Link} to="/" label="Logout"/>
         </Tabs>
        
      </Toolbar>
      </AppBar>
    </>
  )
}

export default PageNavbar
