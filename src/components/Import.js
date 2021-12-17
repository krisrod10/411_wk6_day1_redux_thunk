import React from 'react'

const Import = (props) => {
    // fill out this component

    return (
        < div >
            <Button onClick={() => props.fetchMakes()} color="primary" variant="contained">
                Import
            </Button>
            <h2>Number of cars: {props.makes.length}</h2>
            <CustomTable deleteMake={props.deleteMake} makes={props.makes}></CustomTable>
        </div >
    )

}

export default Import