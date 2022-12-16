import { Component } from "react";
//import { getImages } from "servises/api";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from "components/Loader/Loader";
import {GallaryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    data: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {

      this.setState({ loading: true });

      const API_KEY = '29676821-2dfd501c3768e552959bc01fb';

        fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(data => this.setState({
          data: data.hits
        }))
        .finally(() => this.setState({ loading: false }));
    };
    if (prevState.page !== this.state.page) {
      
      this.setState({ loading: true });

      const API_KEY = '29676821-2dfd501c3768e552959bc01fb';

        fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(data => this.setState({
          data: [...prevState.data, ...data.hits]
        }))
        .finally(() => this.setState({ loading: false }));
    };
  };

  onLoadMoreClick = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
        page: prevState.page +1,
    }));
  };

  render() {
    const { data, loading } = this.state;
    return (
      <>
        {loading && <Loader/>}
        <GallaryList>
          {data.map((item) => {
            return (
              <ImageGalleryItem
                key={item.id}
                webImg={item.webformatURL}
                tags={item.tags}
                largeImg={item.largeImageURL}
              />
            )
          })}
        </GallaryList>
        {data.length > 0 && <Button onClick={this.onLoadMoreClick }/>}
        
      </>
    );
  }
};

