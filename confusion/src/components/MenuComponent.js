import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import Dishdetail from "./DishdetailComponent";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function RenderSelectedDish({ dish }) {
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
        <Dishdetail dish={dish} />
      </>
    );
  else return <div></div>;
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <RenderSelectedDish dish={props.dishes[props.selectedDish]} />
      </div>
    </div>
  );
};

export default Menu;
