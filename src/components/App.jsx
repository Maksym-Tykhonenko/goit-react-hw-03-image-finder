import { Component } from "react";
import { Toaster } from 'react-hot-toast';

import {Searchbar }from "./Searchbar/Searchbar";
import { ImageGallery } from "./Gallery/ImageGallery/ImageGallery";

import {Wrapp } from './App.styled';




export class App extends Component {
  state = {
    query: '',
  };


  onSubmit = (query) => {
    this.setState({
      query
    })
  };
 
  render() {
    const { query } = this.state;
    
    return (
      <Wrapp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={query} />
        <Toaster  position="top-right"
          reverseOrder={false}
        />
      </Wrapp>
    );
  };
};
