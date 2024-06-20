import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PageNavbar from "../Navbar/PageNavbar";
import { useNavigate } from "react-router-dom";
import { addblog, clearblog, removeblog, updateblog } from "./blogSlice";
import { Button, Container, Grid, TextField, Typography,Box, Paper} from "@mui/material";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const BlogSchema = Yup.object().shape({
  title: Yup.string()
    .required("Tittle is required")
    .max(15, "At Least 15 charachter")
    .min(3, "At Least 2 charachter")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed for the title"),
  subtitle: Yup.string()
    .required("Subtitle is required")
    .max(25, "At Least 25 charachter")
    .min(2, "At Least 2 charachter")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed for the title"),
  description: Yup.string()
    .required("Description is required")
    .max(30, "At Least 30 charachter")
    .min(2, "At Least 2 charachter")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed for the title"),
});

const BlogForm = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.Blog || []);
  const [visible, setvisible] = useState(true);
  const [update, setupdate] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    if (update) {
      const updatedblog = { id: update.id, ...values };
      dispatch(updateblog(updatedblog));
      setupdate(null);
      navigate("/blogger/update");
    } else {
      const newblog = { id: Date.now(), ...values };
      dispatch(addblog(newblog));
    }
    resetForm();
    setvisible(false);
  };

  const handleEdit = (blog) => {
    setvisible(true);
    setupdate(blog);
    navigate("/blogger/edit");
  };

  const handleDelete = (id) => {
    dispatch(removeblog(id));
    navigate("/blogger/delete");
  };
  const handleclear = () => {
    dispatch(clearblog());
    navigate("/blogger/clearall");
  };
  return (
    <center>
      <div className="blogContainer-1">
        <Container maxWidth="md">
          <PageNavbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h3" align="center" gutterBottom>
            {blogs.length === 0 ? "No Blogs" : "Blogs"}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {!visible && (
                <Button variant="outlined" onClick={() => setvisible(true)}>
                  Create New Blog
                </Button>
              )}
            </Grid>
            {visible && (
              <Grid item xs={12}>
                <Formik
                  initialValues={
                    update || { title: "", subtitle: "", description: "" }
                  }
                  validationSchema={BlogSchema}
                  onSubmit={handleSubmit}
                >
                  {({ resetForm }) => (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="title"
                            name="title"
                            label="Title"
                            placeholder="Title"
                          />
                          <ErrorMessage
                            className="error-msg"
                            name="title"
                            component="div"
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="subtitle"
                            name="subtitle"
                            label="Sub-Title"
                            placeholder="Sub-Title"
                          />
                          <ErrorMessage
                            className="error-msg"
                            name="subtitle"
                            component="div"
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            placeholder="Description"
                          />
                          <ErrorMessage
                            className="error-msg"
                            name="description"
                            component="div"
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          // fullWidth
                        >
                          {update ? "Update Blog" : "Submit"}
                        </Button>
                        <Button
                          variant="outlined"
                          // fullWidth
                          onClick={() => {
                            setvisible(false);
                            resetForm();
                            setupdate(null);
                          }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={3}>
            {blogs .filter((blog) => !update || blog.id !== update.id).map((blog) => (
              <Grid item xs={12} md={6} lg={4}key={blog.id}>
                <Typography variant="h5">Title: {blog.title}</Typography>
                <Typography variant="subtitle1">Sub-Title: {blog.subtitle}</Typography>
                <Typography variant="body1">Description: {blog.description}</Typography>
                <Button variant="outlined" onClick={() => handleEdit(blog)}>
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </Button>
              </Grid>
              
              

            ))}
          </Grid>
          <br/><br/>
          {blogs.length > 0 && (
            <Grid item xs={12}>
              <Button variant="outlined" onClick={handleclear}>
                Clear All
              </Button>
            </Grid>
          )}
          </Box>
        </Container>
      </div>
    </center>
  );
};

export default BlogForm;
