import { useQuery } from '@apollo/client'
import { QUERY_ALL_VENUES } from '../graphql/queries'
// This is the page that lists all the venues
export default function Venues() {
    const { loading, data } = useQuery(QUERY_ALL_VENUES)

    if (loading) return <div>Loading all venues...</div>
    console.log("datassss: ", data)
    const venues = data.venues;
    return (
        <div className="page">
            <h1>All Venues</h1>
            <div>
                {venues.map((venue) => {
                    return <div key={venue._id} style={{ border: "1px solid red"}}>
                        <p>{venue.name}</p>
                        <p>{venue.location}</p>
                        <p>{venue.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}