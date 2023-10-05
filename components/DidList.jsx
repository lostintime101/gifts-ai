import React from 'react'
import Did from './Did'

export default function DidList( { dids } ) {
  return (
    dids.map((did) => {
        return <Did key={did.name} did={did}/>;
    })
  );
}
