import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../asset/Data/dummy-tickets.json";
import PageBreadCrumb from "../../components/breadcrumb/PageBreadCrumb.comp";

function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadCrumb page="Dashboard" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button
              variant="info"
              style={{
                fontSize: "2rem",
                padding: "10px 30px",
              }}
            >
              Add New Ticket
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <div>Total Tickets: 50</div>
            <div>Pending Tickets: 5</div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">Recently added ticket</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
