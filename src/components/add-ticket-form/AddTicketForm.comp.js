import React from "react";
import { Button, Form, Row, Col, Jumbotron } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AddTicketForm.style.css";

export const AddTicketForm = ({
  handleSubmit,
  handleOnChange,
  formData,
  error,
}) => {
  return (
    <Jumbotron className="py-5 add-new-ticket bg-light">
      <Form className="mt-4" onSubmit={handleSubmit}>
        <h1 className="text-info text-center">Add New Ticket</h1>
        <hr />
        <Form.Group as={Row}>
          <Col sm={2}>
            <Form.Label>Subject</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Enter subject"
              required
            ></Form.Control>
            <Form.Text className="text-danger font-weight-bold">
              {error.subject && "Subject is Required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm={2}>
            Created At
          </Form.Label>
          <Col>
            <Form.Control
              type="date"
              name="issuedDate"
              value={formData.issuedDate}
              onChange={handleOnChange}
              required
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label as={Col} sm={2}>
            Description
          </Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              rows={5}
              name="details"
              value={formData.details}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="info" block>
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  error: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};
