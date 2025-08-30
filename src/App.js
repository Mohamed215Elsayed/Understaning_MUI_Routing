import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";
import PostsList from "./PostsList";
import { postsContext } from "./contexts/PostsContext";
import PostDetails from "./PostDetails";
import NotFound from "./NotFound";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
import PostLayout from "./PostLayout";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green, purple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));
const theme = createTheme({
  status: {
    danger: orange[500],
  },
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  // },
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

let postsData = [
  {
    id: 1,
    title: "first Post",
    body: "the quick brown fox jumps over the lazy dog",
  },
  {
    id: 2,
    title: "Second Post",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Third Post",
    body: "the five boxing wizards jump quickly",
  },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomCheckbox defaultChecked />
        <postsContext.Provider value={postsData}>
          <div style={{ fontSize: "30px" }}>
            <Link to="/home">
              <button style={{ fontSize: "30px" }}>Home</button>
            </Link>

            <Link to="/hello">
              <button style={{ fontSize: "30px" }}>Hello</button>
            </Link>

            <Link to="/posts">
              <button style={{ fontSize: "30px" }}>Posts</button>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hello" element={<Hello />} />

            <Route path="/posts" element={<PostLayout />}>
              <Route index element={<PostsList />} />
              <Route path=":postId" element={<PostDetails />} />
              <Route path="new" element={<NewPost />} />
              <Route path="delete" element={<DeletePost />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </postsContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
