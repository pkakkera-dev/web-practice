import React from "react";
import Westport from "../../media/Westport.jpg";
import GameNyt from "../../media/GameNyt.jpg";
import TinkBday from "../../media/TinkBday.jpg";
import mincar from "../../media/mincar.jpg";
import keerti from "../../media/keerti.jpg";
import wed1 from "../../media/wed1.jpg";
import wed2 from "../../media/wed2.jpg";
import wed3 from "../../media/mincar.jpg";
import siju from "../../media/siju.jpg";
import sankran from "../../media/sankran.jpg";
import priti from "../../media/priti.jpg";

class Photos extends React.Component {
  state = {
    data: ""
  };

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=15230169-d49fcfee7075675ba55bcb704&q=sunflower&image_type=photo&pretty=true"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(error => {
        console.error("Something went wrong!");
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="photos-container">
        {/* {data &&
          data.hits &&
          data.hits.map(item => {
            return <img src={item.previewURL} height="200px" width="300px" />;
          })} */}
        <React.Fragment>
          <img src={sankran} height="200px" width="300px" />
          <img src={Westport} height="200px" width="300px" />
          <img src={TinkBday} height="200px" width="300px" />
          <img src={mincar} height="200px" width="300px" />
          <img src={siju} height="200px" width="300px" />
          <img src={priti} height="200px" width="300px" />
          <img src={GameNyt} height="200px" width="300px" />
          <img src={wed1} height="200px" width="300px" />
          <img src={wed2} height="200px" width="300px" />
          <img src={wed3} height="200px" width="300px" />
          <img src={keerti} height="200px" width="300px" />
        </React.Fragment>
      </div>
    );
  }
}

export default Photos;
