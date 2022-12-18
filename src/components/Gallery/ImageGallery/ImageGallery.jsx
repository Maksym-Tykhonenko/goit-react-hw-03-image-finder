import { Component } from "react";
import { getImgs } from "servises/api";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../../Button/Button';
import { Loader } from "components/Loader/Loader";
import {GallaryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    data: [],
    loading: false,
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const {page } = this.state;

    if (prevProps.query !== query) {

      this.setState({ loading: true });

      getImgs(query, page)
        .then(data => this.setState({
          data: data.hits
        })).catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    };

    if (prevState.page !== page) {

      this.setState({ loading: true });

      getImgs(query, page)
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
        {loading && <Loader />}
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
        {data.length > 0 && <Button onClick={this.onLoadMoreClick} />}
        
      </>
    );
  };
};


