import React from 'react';
import moment from 'moment';
import { BootstrapModal, dispatch } from '@common';

import AboutReducer from './about-reducer';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);    
        
        this.state = {
            stop: true
        };
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    render() {
        let { recentlyOpenDate, recentlyCancelDate} = this.props.data,
            formatType = 'YYYY MMMM dddd hh:mm:ss a',
            modal = (
                <BootstrapModal
                    ref="modal"
                    confirm="OK"
                    cancel="Cancel"
                    onCancel={this.handleCancel}
                    onConfirm={this.closeModal}
                    onHidden={this.handleModalDidClose}
                    title="Welcome to Bootstrap Modal Dialog"
                >
                    This is a React component powered by jQuery and Bootstrap! <br/>
                    Recently Open: {moment(recentlyOpenDate).format(formatType)} <br/>
                    Recently Close: {moment(recentlyCancelDate).format(formatType)}
                </BootstrapModal>
            );
        
        return (
            <div className="container">
                <h1>About</h1>
                {modal}
                <button
                    className="btn btn-success"
                    onClick={this.openModal}
                >
                    Open Modal
                </button>
            </div>
        );
    }

    openModal() {
        dispatch({ type: 'about/modal/open' });
        this.refs.modal.open();
    }
    
    closeModal() {
        this.refs.modal.close();
    }
    
    handleCancel() {
        dispatch({ type: 'about/modal/close' });
        this.refs.modal.close();
    }
    
    handleModalDidClose() {
        console.log('The modal has been dismissed!');
    }
}

export const page = AboutPage;
export const reducer = AboutReducer;