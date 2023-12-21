import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';

export default function App(props) {
  const [centredModal, setCentredModal] = useState(false);
  React.useEffect(() => {
    setCentredModal(props.show)
  },[props.show])

  const toggleShow = () => {
    setCentredModal(!centredModal)
    props.change();
  };

  return (
    <>
      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='font-bold text-center w-full text-green-600'>{props.title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p className='font-semibold text-center text-lg' >
                {props.msg}
              </p>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
} 