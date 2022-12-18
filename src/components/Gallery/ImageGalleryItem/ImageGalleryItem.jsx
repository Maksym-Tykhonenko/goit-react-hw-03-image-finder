import { Modal } from "components/Modal/Modal";
import { Component } from "react";
import {GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }
    toggleModal = () => {
        this.setState(state => ({
            showModal: !state.showModal,
        }))
    }
    render() {
        const { webImg, tags, largeImg } = this.props;
        const { showModal } = this.state;

        return (
            <> 
                <GalleryItem onClick={this.toggleModal}>
                    <ImageGalleryItemImage src={webImg} alt={tags}/>
                    {showModal && <Modal 
                    largeImg={largeImg} 
                    tags={tags} 
                    onClose={this.toggleModal}
                />}
                </GalleryItem>
            </>
        );
    };
};