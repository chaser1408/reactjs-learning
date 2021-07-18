import React, { Component } from "react";

class ClassDataBinding extends Component {
    title = "Mac Shop";
    productName = "Macbook Pro M1";
    description = "~42,000,000 vnd";

    renderProduct = () => (
        <div>
            <h1>{this.productName}</h1>
            <p>{this.description}</p>
        </div>
    );

    render() {
        return (
            <div>
                <h2>{this.title}</h2>
                {this.renderProduct()}
            </div>
        );
    }
}

export default ClassDataBinding;
