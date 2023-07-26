import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthorItem, List, PostItem, TitleContents} from "./components";
import {MainPage, PostPage} from "./pages";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}>
                  <Route path="/" element={ <List />} />
                  <Route path="posts/" element={ <List />} />
              </Route>
              <Route path="posts/:id" element={ <PostPage />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
