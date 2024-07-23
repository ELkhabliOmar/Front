import React from "react";
import useForm from "./useForm";
import { Button, Form, Row, Col } from "react-bootstrap"; // Vous pouvez remplacer cela si vous n'utilisez pas bootstrap pour Button et Form
import "./CreditCardForm.scss";
//import 'react-credit-cards/es/styles-compiled.css';
//import Cards from "react-credit-cards";

// Composant d'alerte personnalisé
const CustomAlert = ({ id, dataTestId, show, message, variant }) => {
  if (!show) return null;

  const getAlertStyles = () => {
    switch (variant) {
      case "danger":
        return { backgroundColor: "red", color: "white", padding: "10px", borderRadius: "5px", margin: "10px 0", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" };
      case "success":
        return { backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px", margin: "10px 0", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" };
      case "warning":
        return { backgroundColor: "orange", color: "black", padding: "10px", borderRadius: "5px", margin: "10px 0", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" };
      default:
        return {};
    }
  };

  return (
    <div id={id} data-testid={dataTestId} style={getAlertStyles()}>
      {message}
    </div>
  );
};

const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
{/*             <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div> */}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                  style={{ width: '100%' }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                  style={{ width: '100%' }}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group style={{ display: 'flex', gap: '20px' }}>
                    <Form.Control
                      type="text"
                      name="cardType"
                      id="cardType"
                      data-testid="cardType"
                      placeholder="Card Type"
                      value={values.cardType}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ctype}
                      style={{ width: '160px' }}
                    />
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiration Date"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                      style={{ width: '160px' }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group style={{ display: 'flex', gap: '20px' }}>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Security Code"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                      style={{ width: '160px' }}
                    />
                    <Form.Control
                      type="text"
                      id="cardPostalCode"
                      data-testid="cardPostalCode"
                      name="cardPostalCode"
                      placeholder="Postal Code"
                      value={values.cardPostalCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cpostal}
                      style={{ width: '160px' }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
              >
                Validate
              </Button>
            </Form>
            <CustomAlert
              id="alertMessage"
              data-testid="alertMessage"
              show={errors.show}
              message={errors.message}
              variant={errors.variant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
