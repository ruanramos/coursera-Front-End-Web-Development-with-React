import React from "react";

const Dishdetail = (props) => {
  return (
    <div className="col-12 offset-md-5 col-md-5 m-1">
      {renderComment(props)}
    </div>
  );
};

function timeConverter(timestamp) {
  const date = timestamp.split("T")[0];
  return date;
}

function renderComment(props) {
  if (props.dish != null) {
    const comments = props.dish.comments.map((c) => {
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
        <div>{comments}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dishdetail;
