import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_RACE } from "../graphql/queries/race";
// import { CREATE_LOCATION } from "../graphql/mutations/createLocation";
// import { UPDATE_RACE_START_TIME } from "../graphql/mutations/updateRaceStartTime";

export default function Timer() {
  const location = useLocation();
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
  });

  const convertTimestamp = () => {

  }

  return (
    <div>
      <p>{race.startTime}</p>
    </div>
  )
}