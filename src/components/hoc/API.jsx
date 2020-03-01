import React from "react";

const API = injectParams => WrappedComponent => {
  class Hoc extends React.Component {
    state = {
      results: ""
    };

    componentDidMount() {
      let query = injectParams ? injectParams : "landscape+forest";
      let url = `https://pixabay.com/api/?key=15392009-366715d9c5718905431daaa3d&pretty=true&image_type=photo&q=${query}`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({
            results: data
          });
        })
        .catch(error => console.error(" Something went wrong !"));
    }

    render() {
      return (
        <div>
          <WrappedComponent
            data={this.state.results}
            {...injectParams}
            {...this.props}
          />
        </div>
      );
    }
  }

  return Hoc;
};

export default API;
