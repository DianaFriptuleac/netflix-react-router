import { Container, Row, Col, Button } from "react-bootstrap";

const SettingsPage = () => {
  return (
    <Container fluid className="bg-light">
      <Container className="my-5">
        <h1 className="pt-3">Account</h1>
        <hr />
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={3}>
            <h5 className="text-body-tertiary">MEMBERSHIP & BILLING</h5>
            <Button
              type="button"
              className="btn rounded-0 text-start text-black px-4 bg-body-secondary border-0"
            >
              Cancel Membership
            </Button>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="fw-bold">
              <p>Student@strive.school</p>
              <p className="text-body-tertiary">Password: ********</p>
              <p className="text-body-tertiary">Phone: 321 044 1279</p>
              <hr />
              <span>
                <i className="bi bi-paypal"></i>
                <span className="fw-bold">
                  <em>PayPal</em>
                </span>{" "}
                <span className="fw-bold">admin@strive.school</span>
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-end ms-auto">
            <p className="text-primary">Change account email</p>
            <p className="text-primary">Change password</p>
            <p className="text-primary">Change phone number</p>
            <hr />
            <p className="text-primary">Update payment info</p>
            <p className="text-primary">Billing details</p>
            <p className="text-primary">Redeem gift card or promo code</p>
            <p className="text-primary">Where to buy gift cards</p>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={3}>
            <h5 className="text-body-tertiary">PLAN DETAILS</h5>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <p className="text-start">
              <span className="fw-bold">Premium </span>
              <span className="border border-3 border-black px-2 rounded-1">
                ULTRA <span className="fw-bold">HD</span>
              </span>
            </p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-primary text-end ms-auto">
            <p>Change plan</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={12} md={6} lg={3}>
            <h5 className="text-body-tertiary">SETTINGS</h5>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-primary">
            <p>Parental controls</p>
            <p>Test participation</p>
            <p>Manage download devices</p>
            <p>Activate a device</p>
            <p>Recent device streaming activity</p>
            <p>Sign out all devices</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={12} md={6} lg={3}>
            <h5 className="text-body-tertiary">MY PROFILE</h5>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <p className="fw-bold">Strive Student</p>
            <p className="text-primary">Language</p>
            <p className="text-primary">Playback</p>
            <p className="text-primary">Subtitle appearance</p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-primary">
            <p>Viewing activity</p>
            <p>Ratings</p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-primary text-end">
            <p>Manage profiles</p>
            <p>Add profile email</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SettingsPage;
