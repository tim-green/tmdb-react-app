import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";
import { fetchDataFromApi } from "./utils/api";
import SearchResult from "./pages/searchResult/SearchResult";

import Clarity from '@microsoft/clarity';
const projectId = "owr4e650s4"
Clarity.init(projectId);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  // Call the genres when the app loads

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.base_url + "original",
        poster: res.images.base_url + "original",
        profile: res.images.base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  // Using Promise.All to call multiple APIs
  // Using Promise.All that can call two APIs at a same time
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));

    //hint: Make item.id as key
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
