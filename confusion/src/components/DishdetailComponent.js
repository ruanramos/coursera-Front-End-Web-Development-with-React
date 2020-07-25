import React, { useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const Dishdetail = ({ dish, comments }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments comments={comments} dish={dish} />
      </div>
    </div>
  );
};

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <>
        <Card className="col-12 col-md-5 m-1" style={{ padding: 0 }}>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </>
    );
  else return <div></div>;
}

function timeConverter(timestamp) {
  const date = timestamp.split("T")[0];
  return date;
}

const Form = ({ modal, toggle }) => {
  const options = [...Array(11).keys()];

  function handleSubmit(values) {
    alert("Current State is: " + JSON.stringify(values));
  }

  return (
    <Modal isOpen={modal} toggle={toggle} role="">
      <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
      <LocalForm onSubmit={handleSubmit}>
        <ModalBody>
          <Row className="form-group">
            <Col md={12}>
              <Label htmlFor="rating">Rating</Label>
              <Control.select
                model=".rating"
                id="rating"
                name="rating"
                className="form-control"
                validators={{}}
              >
                {options.map((i) => (
                  <option value={i}>{i}</option>
                ))}
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={12}>
              <Label htmlFor="author">Your Name</Label>
              <Control.text
                model=".author"
                name="author"
                id="author"
                placeholder="Your Name"
                className="form-control"
                validators={{
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              ></Control.text>
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                messages={{
                  minLength: "Must be greater than 2 characters ",
                  maxLength: "Must be 15 characters or less ",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={12}>
              <Label htmlFor="comment">Comment</Label>
              <Control.textarea
                model=".comment"
                name="comment"
                id="comment"
                rows={6}
                className="form-control"
              ></Control.textarea>
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={{ size: "auto" }}>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </LocalForm>
    </Modal>
  );
};

const CommentForm = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline onClick={toggle}>
        <i className="fa fa-pencil"></i> Submit Comment
      </Button>
      <Form toggle={toggle} modal={modal} />
    </div>
  );
};

function RenderComments({ comments, dish }) {
  if (dish != null) {
    const com = comments.map((c) => {
      return (
        <div key={c.id}>
          <p>{c.comment}</p>
          <p>
            -- {c.author}, {timeConverter(c.date)}
          </p>
        </div>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <div>{com}</div>
        <CommentForm />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dishdetail;
