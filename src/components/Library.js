import React from 'react';


const Library = (props) => {

  return(
    <div>

      <h4>{props.id}: {props.title}</h4>
      <p>{props.overview}</p>
    </div>
  );
}

export default Library;