import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_RACE } from "../graphql/queries/race";
import { UPDATE_LOCATION } from "../graphql/mutations/updateLocation";
import { QUERY_LOCATION } from "../graphql/queries/location";

function distance(lat1, lon1, lat2, lon2) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1609.344;
    return dist;
  }
}

export default function DistanceCalculator() {
  const [dist, setDist] = React.useState(null);
  const location = useLocation();
  const history = useHistory();
  let myEndLat = location.myEndLat;
  let myEndLong = location.myEndLong;
  let myDistance = location.myDistance;
  let myLocId = location.myLocId;
  let newDistance;
  let endTime;

  const [updateLocation] = useMutation(UPDATE_LOCATION);
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    onCompleted: async () => {
      await updateDistanceAndLocation(myEndLat, myEndLong, myDistance, myLocId);
    },
  });

  const updateDistanceAndLocation = (lat, long, dist, id) => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        // console.log(data);
        //new coordinates
        let currentLat = data.coords.latitude;
        let currentLong = data.coords.longitude;
        // console.log(currentLat);
        // console.log(currentLong);
        //distance calculation -> should give some number
        newDistance = dist + distance(lat, long, currentLat, currentLong);
        setDist(newDistance);
        console.log(race.distance);
        // if (dist > 5) {
        //   history.push({
        //     pathname: "/race-end",
        //   });
        //   return;
        // }
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
            { query: QUERY_LOCATION, variables: { id: location.myLocId } },
          ],
        });
        // console.log("Old end lat:", lat);
        // console.log("Old end long:", long);
        let startLat = currentLat;
        let startLong = currentLong;
        // console.log("New end lat:", startLat);
        // console.log("New end long:", startLong);
        console.log("Distance is: ", newDistance);
        console.log("Location id is:", id);
        setTimeout(function () {
          updateDistanceAndLocation(startLat, startLong, newDistance, id);
        }, 3000);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );
  };

  return <></>;
}
