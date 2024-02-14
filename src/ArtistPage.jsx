import React, { Suspense } from 'react'
import Albums from './Albums'

const ArtistPage = ({artist}) => {
  return (
    <>
    <h1>{artist.name}</h1>
    <Suspense fallback={<Loading />}>
        <Albums artist={artist.id} />
    </Suspense>
    </>
  )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
export default ArtistPage