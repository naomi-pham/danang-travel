import React from 'react'
import RightToLeft from './Transition/RightToLeft'

const AttractionCard = ({title, coverPhoto, description}: any) => {
  return (
    <RightToLeft>
        <div className="card-container">
            <div className='flex-col-8'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={coverPhoto.url} className="card-img" />
        </div>
    </RightToLeft>
  )
}

export default AttractionCard