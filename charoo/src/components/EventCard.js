const Card = ({ charity,
                country,
                distance,
                eventTitle,
                monetaryGoal,
                sportstype,
                start,
                imageUrl,
                description,
                dateCreated
}) => {
    

        return(
                <>
                <h1>{eventTitle}</h1>
                <p>{sportstype}</p>
                <p>{distance}</p>
                <p>{start}</p>
                <p>{monetaryGoal}</p>
                <p>{country}</p>
                <p>{charity}</p>
                <p>{imageUrl}</p>
                <p>{description}</p>
                <p>{dateCreated}</p>
                </>
            )
        }


export default Card
// imageUrl: event.imageUrl,
// sport: event.sport,
// distance: event.distance,
// start: event.start,
// country: event.country,
// monetaryGoal: event.monetaryGoal,
// eventTitle: event.eventTitle,
// description: event.description,
// charity: event.charity,
// dateCreated: event.dateCreated,
// export default Card