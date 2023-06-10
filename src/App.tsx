import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthorItem, List, PostItem, TitleContents} from "./components";
import {ProfilePage, MainPage} from "./pages";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/profile" element={<ProfilePage />}>

              </Route>
              <Route path="/" element={<MainPage />}>
                  <Route path="all/" element={<TitleContents />}>
                      <Route path="" element={ <List listType='post' />} />
                      <Route path="posts" element={ <List listType='post' />} />
                      <Route path="authors" element={ <List listType='author' />} />
                  </Route>
                  <Route path="design/" element={<TitleContents />}>
                      <Route path="" element={ <List listType='post' />} />
                      <Route path="posts" element={<List listType='post' />} />
                      <Route path="authors" element={ <List listType='author' />} />
                  </Route>
                  <Route path="dev/" element={<TitleContents />}>
                      <Route path="" element={ <List listType='post' />} />
                      <Route path="posts" element={<List listType='post' />} />
                      <Route path="authors" element={ <List listType='author' />} />
                  </Route>
                  <Route path="manage/" element={<TitleContents />}>
                      <Route path="" element={ <List listType='post' />} />
                      <Route path="posts" element={<List listType='post' />} />
                      <Route path="authors" element={ <List listType='author' />} />
                  </Route>
              </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
