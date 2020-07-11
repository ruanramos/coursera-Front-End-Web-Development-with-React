import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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

function RenderComments({ comments, dish }) {
  if (dish != null) {
    console.log(dish);
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
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dishdetail;
