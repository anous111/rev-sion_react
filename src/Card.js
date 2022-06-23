import React, { Component } from "react";
import "./App.css";


class Card extends Component {
    render() {

        return (

            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://news.gandi.net/wp-content/uploads/2018/11/domain_dev_23222b-1024x512.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://news.gandi.net/wp-content/uploads/2018/11/domain_dev_23222b-1024x512.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://news.gandi.net/wp-content/uploads/2018/11/domain_dev_23222b-1024x512.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Card; 