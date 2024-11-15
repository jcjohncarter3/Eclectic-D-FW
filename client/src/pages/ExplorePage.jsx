
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_VENUES } from '../graphql/queries';
import { Link } from "react-router-dom";

function ExplorePage() {
  const { loading, error, data } = useQuery(QUERY_ALL_VENUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="container-xxl py-.5">
        {/* Centered Title */}
        <div className="text-center mb-5">
          <h1>Explore Music Venues</h1>
        </div>

        <div className="row">
          {/* Left Half: Image */}
          <div className="col-md-6">
            <img
              className="img-fluid w-100 h-100"
              src="./gilligans.jpg"
              alt="Gilligans"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Half: Text */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <ul>
                {data.venues.map((venue) => (
                  <li key={venue._id} className="mb-4">
                    <Link to={venue._id} style={{ textDecoration: "none", color: "inherit" }}>
                      <h3>{venue.name}</h3>
                      <p>{venue.location}</p>
                      <p>{venue.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
