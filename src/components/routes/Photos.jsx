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
                <img
                  src={item.previewURL}
                  height={item.previewHeight}
                  width={item.previewWidth}
                />
                <div className="image-desc">
                  <span style={{ paddingLeft: "15px" }}>
                    {item.tags.slice(0, 5)}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Photos;
