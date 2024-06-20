import { Button, Container, Paper } from "@mui/material";
import React from "react";
import PageNavbar from "../Navbar/PageNavbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const naviagte=useNavigate();
  const blogs = useSelector((state) => state.Blog || []);
  
  const handlebutton=()=>{
    naviagte("/Blogger")
  
    
  }
  return (
    <div>
      <PageNavbar/>
      <div className="homeContainer-1">
        <br />
        <br />
        <br />
        <center>
          <h1 className="home-h1">Publish your passions, your way</h1>
          <h3 className="home-h3">
            Create a unique and beautiful blog easily.
          </h3>
          <br />
          <Button sx={{background:'#d06363', color: "white"}} onClick={handlebutton}
          >
            create your blog
          </Button>
        </center>
        <center><h1 className="Initialtitle">Trending Blogs</h1></center>
        <div className="blogList">
          {blogs.slice(0,2).map((blog)=>(
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper
            sx={{
              backgroundColor:'#d06363',
              textAlign:'center',
              justifyContent:'space-between',
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 0,
                width: 300,
                height: 150,
              },
            }}
            >
            <div  key={blogs.id}>
                <h2 variant="h5">Title:{blog.title}</h2>
                <p variant="subtitle1">Sub-Title:{blog.subtitle}</p>
                <p variant="body1">Description:{blog.description}</p>
               
            </div>
               </Paper>
               </Container>
          ))}
        
        </div>
      </div>
      <div className="homeContainer-2">
        <div className="paraContainer">
          <p className="homePara-1">Choose the perfect design</p>
          <p className="homePara-2">
            Create a beautiful blog that fits your style. Choose from a
            selection
          </p>
          <p className="homePara-2">
            of easy-to-use templates - all with flexible layouts and hundreds of
          </p>
          <p className="homePara-2">
            background images - or design something new.
          </p>
        </div>
      </div>
      <div className="homeContainer-3">
        <p className="homePara3-1">Get a domain</p>
        <p className="homePara3-2">
          Give your blog the perfect home. Get a blogspot.com domain or buy
        </p>
        <p className="homePara3-2">a custom domain with just a few clicks.</p>
      </div>
      <div className="homeContainer-4">
        <div className="paraContainer">
          <p className="homePara-1">Hang onto your memories</p>
          <p className="homePara-2">
            Save the moments that matter. Blogger lets you safely store
          </p>
          <p className="homePara-2">
            thousands of posts, photos, and more with Google.
          </p>
        </div>
      </div>
      <div className="homeContainer-5">
        <p className="homePara3-1">Know your audience</p>
        <p className="homePara3-2">
          Find out which posts are a hit with Blogger's built-in analytics.
          You'll
        </p>
        <p className="homePara3-2">
          see where your audience is coming from and what they're interested
        </p>
        <p className="homePara3-2">
          in. You can even connect your blog directly to Google Analytics for a
        </p>
        <p className="homePara3-2">more detailed look.</p>
      </div>
      <div className="homeContainer-6">
        <div className="paraContainer-2">
          <p className="homePara3-1">Earn money</p>
          <p className="homePara3-2">
            Get paid for your hard work. Google AdSense can automatically
          </p>
          <p className="homePara3-2">
            display relevant targeted ads on your blog so that you can earn
          </p>
          <p className="homePara3-2">income by posting about your passion.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
