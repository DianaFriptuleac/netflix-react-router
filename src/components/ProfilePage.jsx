import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ProfilePage = () => {
  //constructor(props) {
  // super(props);
  //this.state = {
  //name: "",
  // email: "",
  // age: "",
  // language: "English",
  //termsAccepted: false,

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("English");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    //mappo ogni nome del campo alla funzione di aggiornamento di stato
    const setStateFunctions = {
      name: setName,
      email: setEmail,
      age: setAge,
      language: setLanguage,
      termsAccepted: setTermsAccepted,
    };

    setStateFunctions[name](type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("profilo salvato:", {
      name,
      email,
      age,
      language,
      termsAccepted,
    });

    // Reimposta lo stato per svuotare il form
    setName("");
    setEmail("");
    setAge("");
    setLanguage("English");
    setTermsAccepted(false);
  };

  return (
    <Container className="my-5 w-50">
      <h1 className="display-2 text-light">Edit Profile</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={3}>
            <div className="position-relative">
              <img
                src="assets/avatar.png"
                className="w-100"
                id="avatar-profile"
                alt="avatar-profile"
              />
              <span className="position-absolute bottom-0 start-0 border border-1 rounded-circle bg-black px-1">
                <i className="bi bi-pencil text-light"></i>
              </span>
            </div>
          </Col>
          <Col xs={12} md={9}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label className="text-light">Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="bg-black text-light border border-1 border-light rounded-0"
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="text-light">Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="bg-black text-light border border-1 border-light rounded-0"
                required
              />
            </Form.Group>
            <Form.Group controlId="age" className="mb-3">
              <Form.Label className="text-light">Age:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                className="bg-black text-light border border-1 border-light rounded-0"
                required
              />
            </Form.Group>
            <Form.Group controlId="language" className="mb-3">
              <Form.Label className="text-light">Language:</Form.Label>
              <Form.Control
                as="select"
                name="language"
                value={language}
                onChange={handleInputChange}
                className="bg-black text-light border border-1 border-light rounded-0"
                required
              >
                <option>English</option>
                <option>Spanish</option>
                <option>Italian</option>
                <option>German</option>
                <option>French</option>
                <option>Chinese</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="termsAccepted" className="mb-3">
              <Form.Check
                type="checkbox"
                name="termsAccepted"
                label="I agree to the terms and conditions"
                checked={termsAccepted}
                onChange={handleInputChange}
                className="text-light"
                required
              />
            </Form.Group>
            <Button type="submit" className="btn btn-primary mt-3">
              Save Profile
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ProfilePage;
