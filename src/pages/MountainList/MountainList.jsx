// import { useState, useEffect } from 'react'
import Mountain from '../../components/Mountain/Mountain'
import { Link } from 'react-router-dom'
import MountainDetails from '../MountainDetails/MountainDetails'
import { useState, useEffect } from 'react'

const MountainList = (props) => {
const [mountains, setMountains] = useState([])
const [search, setSearch] = useState({query: ''})
const [searchResults, setSearchResults] = useState([])

useEffect(()=> {
  const results = mountains.filter(mountain => mountain.name.toLowerCase().includes(search.query))
  setSearchResults(results)
}, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  useEffect (() => {
    setMountains(props.mountains)
  }, [])
  
  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
  }

    return (
      <>
      <main>
      <form onSubmit={handleSubmitSearch}>
        <input 
        onChange={handleSearch} 
        value={search.query}
        name="query"
        type="search"
        placeholder='search'
        aria-label='search'
        />
      </form>
      <h1>Mountain List</h1>
      <div className='cards'>
      {search.query ? 
        <>
          {searchResults.map(mountain =>
            <Mountain 
            key={mountain._id}
            mountain={mountain}
            handleDeleteMountain={props.handleDeleteMountain}
            user={props.user}/>
          )}
        </>
        :
        <>
          {mountains.slice(0, 18).map(mountain=>
            <Mountain 
            key={mountain._id}
            mountain={mountain}
            handleDeleteMountain={props.handleDeleteMountain}
            user={props.user}/>
          )}

        </>
      }
      </div>
      </main>
      </>
    )

}


export default MountainList;