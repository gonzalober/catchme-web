import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_RACE } from "../graphql/queries/race";
import { QUERY_USER } from "../graphql/queries/user";
// import { CREATE_LOCATION } from "../graphql/mutations/createLocation";
// import { UPDATE_RACE_START_TIME } from "../graphql/mutations/updateRaceStartTime";

export default function DistanceCalculator() {
  const location = useLocation();
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
  });

  const { data: { user } = {} } = useQuery(QUERY_USER, {
    variables: { id: location.me }
  })

  //takes your initial coordinates
  let myEndLat = user.location.endLat;
  let myEndLong = user.location.endLong;
  let myDistance = user.location.distance;

  const updateDistanceAndLocation = () => {
    //what we need instead:
    //get the 
    //then we get new coordinates
    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log(data);
        //new coordinates
        currentLat = data.coords.latitude;
        currentLong = data.coords.longitude;
        console.log(currentLat);
        console.log(currentLong);
        //distance calculation -> should give some number
        myDistance += distance(myEndLat, myEndLong, currentLat, currentLong)
        //update the users location in db
        updateLocation({
          variables: {
            startLat: myEndLat,
            startLong: myEndLong,
            endLat: currentLat,
            endLong: currentLong,
            distance: myDistance,
            UserId: user.id,
          },
          refetchQueries: [
            { query: QUERY_RACE, variables: { id: location.RaceId } },
          ],
        });
        console.log("Old end lat:", myEndLat);
        console.log("Old end long:", myEndLong);
        myEndLat = currentLat;
        myEndLong = currentLong;
        console.log("New end lat:", myEndLat);
        console.log("New end long:", myEndLong);
        console.log("Distance is: ", myDistance);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );
  }

  const runUpdater = setInterval(updateDistanceAndLocation, 5000);





  // race {
  //   id
  //   ...
  //   users {
  //     [
  //       id 
  //       username
  //       location {
  //         4.345.3535435
  //         4535346356
  //         35345345
  //         345345
  //       }
  //     ]
  //   }
  // }

  //how to initially get access to our location object that belongs to some user (in db)
  //we find user where user.id === location.me
  //we update this users location


  //query current loc -> location
  //let startLat = location.endLat
  //let startLong = location.endLong
  //get new location of user 
  //let endLat = data.coords.latitude
  //let endLong = data.coords.longitude
  //calculate distance
  //start and end 
  //update the position of user
  // updateLocation({
  //   variables: {
  //     startLat: startLat,
  //     startLong: startLong,
  //     endLat: endLat,
  //     endLong: endLong,
  //     distance: whater we calcualte
  //   }
  // })

  
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

  
  return (
    <div>
      <p>Distance calculator</p>
    </div>
  )
}