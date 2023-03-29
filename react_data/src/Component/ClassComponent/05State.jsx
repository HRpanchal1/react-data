import React, { Component } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
class CompoForCard extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBCardImage src={this.props.imgSrc} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.prodTitle}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default CompoForCard;