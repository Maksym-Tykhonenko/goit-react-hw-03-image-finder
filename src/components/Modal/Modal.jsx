import {createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, ModalPopUp } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {
    
    componentDidMount(){
        window.addEventListener('keydown', this.hendleEscClick);
    };
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleEscClick)
    };

    hendleEscClick = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    };

    hendleBackdropClick = (e) => {
        if (e.currentTarget !== e.target) {
            this.props.onClose();
        };
    };
    
    render() {
        const { largeImg, tags } = this.props;
        
        return createPortal (
            <Overlay onClick={this.hendleBackdropClick}>
                <ModalPopUp>
                    <img src={largeImg} alt={tags} />
                </ModalPopUp>
            </Overlay> , modalRoot );
        };
};