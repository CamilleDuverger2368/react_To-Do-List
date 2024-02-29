export default function DoneTodoFilters({
    category,
    onChange
}) {

    function handleClick(type) {
        
        onChange(type)
    }

    let filters
    switch (category) {

        case "all" : {

            filters = (
                <>
                    <div className="filter active" onClick={ () => handleClick("all") }>Toutes</div>
                    <div className="filter" onClick={ () => handleClick("done") }>Faites</div>
                    <div className="filter" onClick={ () => handleClick("to-do") }>A Faire</div>
                </>
            )
            break
        }

        case "done" : {

            filters = (
                <>
                    <div className="filter" onClick={ () => handleClick("all") }>Toutes</div>
                    <div className="filter active" onClick={ () => handleClick("done") }>Faites</div>
                    <div className="filter" onClick={ () => handleClick("to-do") }>A Faire</div>
                </>
            )
            break
        }

        case "to-do" : {

            filters = (
                <>
                    <div className="filter" onClick={ () => handleClick("all") }>Toutes</div>
                    <div className="filter" onClick={ () => handleClick("done") }>Faites</div>
                    <div className="filter active" onClick={ () => handleClick("to-do") }>A Faire</div>
                </>
            )
            break
        }

        default : {

            filters = (
                <>
                    
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