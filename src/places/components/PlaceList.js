import React from 'react'
import './PlaceList.css'
import PlaceItem from './PlaceItem'
import Card from '../../shared/components/UIElements/Card'
const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h1>No places found. Maybe create one?</h1>
          <button>Share Place</button>
        </Card>
      </div>
    )
  }
  return (
    <ul className='place-list'>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageURL}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  )
}

export default PlaceList
