import React from "react";
class Photos extends React.Component {
  state = {
    data: ""
  };
  render() {
    const { data } = this.props;
    console.log("Photos- props", this.props);
    return (
      <div className="photos-container">
        {data &&
          data.hits &&
          data.hits.map(item => {
            return (
              <div className="photo-item" key={item.id}>
                <img src={item.previewURL} height="200px" width="300px" />
                <div className="image-desc">
                  <span>{item.tags}</span>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Photos;
