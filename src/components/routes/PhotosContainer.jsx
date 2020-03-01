import React from "react";
import SearchBar from "./SearchBar";
import Photos from "./Photos";
import { fetchPhotos } from "../../utils/fetch";

class PhotosContainer extends React.Component {
  state = {
    query: "",
    photos: ""
  };

  handleSearch = value => {
    fetchPhotos(value).then(data => {
      this.setState({
        photos: data
      });
    });
  };

  componentDidMount() {
    fetchPhotos().then(data => {
      this.setState({
        photos: data
      });
    });
  }

  render() {
    return (
      <div className="photosContainer">
        <SearchBar newProps="Siju" onSearch={this.handleSearch} />
        <Photos data={this.state.photos} />
      </div>
    );
  }
}

export default PhotosContainer;
