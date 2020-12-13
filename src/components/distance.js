import React from "react";
import ReactDOM from "react-dom";

const map;
var markers = [];
var infowindow;
const API_KEY = "AIzaSyCoA2VxeNezyptAE6yq7oB-HySPjVaMHLA";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      dest: "",
      distance: "",
      duration: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map);
  }

  componentDidMount() {
    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        API_KEY +
        `&libraries=places,geometry`;
      script.id = "googleMaps";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.addEventListener("load", (e) => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
    var marker = new google.maps.Marker({
      position: { lat: -25.344, lng: 131.036 },
      map: map,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleSubmit(event) {
    this.getDistanceMatrix();
    event.preventDefault();
  }

  geocodeAddress(addressResult) {
    var geocoder = new google.maps.Geocoder();
    console.log(addressResult[0]);
    var address1 = addressResult[0];
    geocoder.geocode({ address: address1 }, (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        this.createMarker(results[0]);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  getDistanceMatrix() {
    var service = new google.maps.DistanceMatrixService();
    var orig = this.state.origin;
    var dest = this.state.dest;
    service.getDistanceMatrix(
      {
        origins: [orig],
        destinations: [dest],
        travelMode: "DRIVING",
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        if (status !== "OK") {
          alert("Error was: " + status);
        } else {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
          this.geocodeAddress(origins);
          this.geocodeAddress(destinations);

          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            console.log(response);
            for (var j = 0; j < results.length; j++) {
              var element = results[j];
              console.log(element);
              var distanceString = element.distance.text;
              var durationString = element.duration.text;
              //add new value to the previousValue
              this.setState({
                distance: distanceString,
              });

              this.setState({
                duration: durationString,
              });
            }

            console.log(this.state.distance + "," + this.state.duration);
          }
        }
      }
    );
  }

  // createMarker(place) {
  //   var image = {
  //     url:
  //       "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  //     // This marker is 20 pixels wide by 32 pixels high.
  //     size: new google.maps.Size(20, 32),
  //     // The origin for this image is (0, 0).
  //     origin: new google.maps.Point(0, 0),
  //     // The anchor for this image is the base of the flagpole at (0, 32).
  //     anchor: new google.maps.Point(0, 32),
  //   };

  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: place.geometry.location,
  //     title: place.formatted_address,
  //     icon: image,
  //   });
  //   markers.push(marker);

  //   infowindow = new google.maps.InfoWindow();
  //   var content =
  //     "Formatted Address: " +
  //     place.formatted_address +
  //     "<br/>Location Type: " +
  //     place.geometry.location_type +
  //     "<br/>Address Type: " +
  //     place.types +
  //     "<br/>Place ID: " +
  //     place.place_id;

  //   marker.addListener("click", () => {
  //     infowindow.setContent(content);
  //     infowindow.open(map, marker);
  //   });
  // }

  render() {
    return (
      <div id="root">
        <div className="map" id={this.props.id} />
        <h1 htmlFor="input">Get Distance Matrix</h1>
        <br />
        <input
          type="text"
          id="origin"
          name="origin"
          placeholder="origin"
          value={this.state.origin}
          onChange={this.handleInputChange}
        />
        &nbsp;
        <input
          type="text"
          id="dest"
          name="dest"
          placeholder="destination"
          value={this.state.dest}
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <button type="submit" color="primary" onClick={this.handleSubmit}>
          Submit
        </button>
        <br />
        <br />
        <h1 htmlFor="input">Results </h1> &nbsp;
        <label htmlFor="input"> Distance:{this.state.distance}</label>
        <br />
        <label htmlFor="input"> Duration:{this.state.duration}</label>
      </div>
    );
  }
}

export default Map;
