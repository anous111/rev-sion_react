import React, { Component } from "react";
import "./App.css";


class Slider extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to={0}
                                        className="active"
                                    />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://news.gandi.net/wp-content/uploads/2018/11/domain_dev_23222b-1024x512.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.qualitydevs.com/wp-content/uploads/2017/12/desarrollador-1288x724.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-target="#carouselExampleIndicators"
                                    data-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-target="#carouselExampleIndicators"
                                    data-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


            </>

        )

    }

}
export default Slider;