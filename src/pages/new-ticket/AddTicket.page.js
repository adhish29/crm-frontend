import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import PageBreadCrumb from "../../components/breadcrumb/PageBreadCrumb.comp";

import { validateSubject } from "../../utils/validator";

const initialState = {
  subject: "",
  issuedDate: "",
  details: "",
};

const initialErrorState = {
  subject: false,
  issuedDate: false,
  details: false,
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialErrorState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(initialErrorState);
    const isValidSubject = validateSubject(formData.subject);

    setError({
      ...error,
      subject: !isValidSubject,
    });
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            formData={formData}
            error={error}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
