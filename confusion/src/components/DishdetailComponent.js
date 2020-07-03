import React, { Component } from 'react';


class Dishdetail extends Component {

    timeConverter(timestamp){
        const date = timestamp.split("T")[0];
        return date;
      }

    renderComment() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments.map((c) => {
                return (
                    <div key={c.id}>
                    <p>{c.comment}</p>
                        <p>-- {c.author}, {this.timeConverter(c.date)}</p>
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
            return (
                <div></div>
            );
        }
    }

    render() {

        return (
            <div >
                {this.renderComment()}
            </div>
            
        );
    }

}

export default Dishdetail;