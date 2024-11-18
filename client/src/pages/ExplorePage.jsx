import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_VENUES } from "../graphql/queries";
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
          <div className="col-md-8 mb-4">
            <img
              className="img-fluid w-100"
              src="./gilligans.jpg"
              alt="Gilligans"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Half: Text */}
          <div className="col-md-4 justify-content-center align-items-center">
            <div>
              {data.venues.map((venue) => (
                <Link to={venue._id} key={venue._id} className="mb-4">
                  <div className="card mb-4">
                    <div className="card-header">Venue</div>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#00B98E" }}>
                        {venue.name}
                      </h5>
                      <p className="card-text">Located at {venue.location}</p>
                      <button className="btn btn-primary">See details</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
