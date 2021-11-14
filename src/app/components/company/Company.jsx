import React from 'react';
import './Company.scss';
import { Button, Modal } from 'react-bootstrap';

function Company(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <li
        id="company"
        onClick={() => setModalShow(true)}
      >
        <div
          className="show-name"
          >
          <h4>{props.ranking + 1}.</h4>
          <h1>{props.name}</h1>
          <div className="details">
            <h5>Like</h5>
            <CompanyDetails name={props.name}/>
          </div>
        </div>
      </li>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={props.name}
      />
    </>
  )
}

export default Company;

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <p>This is some additional info</h1>
      </Modal.Footer>
    </Modal>
  );
}

function CompanyDetails() {
  return (
    <div className="company-details">
      <p>Overview: 99/100</p>
      <p>Overview: 99/100</p>
      <p>Overview: 99/100</p>
      <p>Overview: 99/100</p>
      <p>Overview: 99/100</p>
    </div>
  )
}
