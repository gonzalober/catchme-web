import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_RACE } from "../graphql/queries/race";
import { QUERY_USER } from "../graphql/queries/user";
import { UPDATE_LOCATION } from "../graphql/mutations/updateLocation";
import { QUERY_LOCATION } from "../graphql/queries/location";
// import { UPDATE_RACE_START_TIME } from "../graphql/mutations/updateRaceStartTime";
export default function DistanceCalculator() {
  const location = useLocation();
  const history = useHistory();
  let myEndLat = location.myEndLat;
  let myEndLong = location.myEndLong;
  let myDistance = location.myDistance;
  let myLocId = location.myLocId;
  let newDistance;
  // console.log("Details:", myEndLat, myEndLong, myDistance, myLocId, location.me, location.RaceId);

  function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515 * 1609.344;
      return dist;
    }
  }

  const [updateLocation] = useMutation(UPDATE_LOCATION);
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    onCompleted: async () => {
      await updateDistanceAndLocation(myEndLat, myEndLong, myDistance, myLocId);
    }
  });

  //TO BE DELETED LATE BUT KEEP NOW FOR TRSTING
  const { data: { loc } = {} } = useQuery(QUERY_LOCATION, {
    variables: { id: location.myLocId },
    pollInterval: 2000,
    onCompleted: async () => {
      await console.log(loc)
    }
    
  });
  //--------------------------

  const updateDistanceAndLocation = (lat, long, dist, id) => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log(data);
        //new coordinates
        let currentLat = data.coords.latitude;
        let currentLong = data.coords.longitude;
        console.log(currentLat);
        console.log(currentLong);
        //distance calculation -> should give some number
        newDistance = dist + distance(lat, long, currentLat, currentLong)
        //update the users location in db
        updateLocation({
          variables: {
            id: id,
            startLat: lat,
            startLong: long,
            endLat: currentLat,
            endLong: currentLong,
            distance: newDistance,
          },
          refetchQueries: [
            { query: QUERY_RACE, variables: { id: location.RaceId } },
          ],
        });
        console.log("Old end lat:", lat);
        console.log("Old end long:", long);
        let startLat = currentLat;
        let startLong = currentLong;
        console.log("New end lat:", startLat);
        console.log("New end long:", startLong);
        console.log("Distance is: ", newDistance);
        console.log("Location id is:", id);
        updateDistanceAndLocation(startLat, startLong, newDistance, id)
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );
  }
  return (
    <div>
      <p>Distance: {loc && loc.distance}</p>
    </div>
  )
}