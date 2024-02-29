export default function DateEmergencyFilters({
    filter,
    onChangeOrderDate,
    onChangeOrderVelocity
}) {

    function handleClickDate() {
        
        filter === "asc" ? onChangeOrderDate("desc") : onChangeOrderDate("asc")
    }

    function handleClickVelocity() {
        
        filter === "hot" ? onChangeOrderVelocity("low") : onChangeOrderVelocity("hot")
    }

    let filters
    switch (filter) {

        case "asc" : {

            filters = (
                <>
                    <div className="filter active up" onClick={ handleClickDate }>Date</div>
                    <div className="filter" onClick={ handleClickVelocity }>Urgence</div>
                </>
            )
            break
        }

        case "desc" : {

            filters = (
                <>
                    <div className="filter active down" onClick={ handleClickDate }>Date</div>
                    <div className="filter" onClick={ handleClickVelocity }>Urgence</div>
                </>
            )
            break
        }

        case "hot" : {

            filters = (
                <>
                    <div className="filter" onClick={ handleClickDate }>Date</div>
                    <div className="filter active up" onClick={ handleClickVelocity }>Urgence</div>
                </>
            )
            break
        }

        case "low" : {

            filters = (
                <>
                    <div className="filter" onClick={ handleClickDate }>Date</div>
                    <div className="filter active down" onClick={ handleClickVelocity }>Urgence</div>
                </>
            )
            break
        }

        default : {

            filters = (
                <>
                    <div className="filter" onClick={ handleClickDate }>Date</div>
                    <div className="filter" onClick={ handleClickVelocity }>Urgence</div>
                </>
            )
            break
        }
    }

    return (
        <div className="filters">
            { filters }
        </div>
    )
}