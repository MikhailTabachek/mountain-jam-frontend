import { useLocation, Link } from "react-router-dom";
import MountainList from "../MountainList/MountainList";
import CreateComment from "../../components/Comment/Comment";
import * as profileService from"../../services/profileService.js"



const MountainDetails = (props) => {
  const location = useLocation()
  const mountain = location.state.mountain

  // function that will pass mountainId to the backend
  // function addPeakToCollection(mountainId){
  //   console.log("testing add to profile function!!!!")
    // takes the ID of a mountain and sends to the backend
    //Backend controller function pushes it to a not visited array
    // backend  reurns profile with added mountain id to the front end
    // MyProfile page maps through an array and populates mountains in cards

  // }

  return(
    <>
    <main>
      <h1>Mountain details</h1>
      <div className="mountain-dets">
        <p>This is {mountain.name}</p>
        <p>It's located in {mountain.countries[0]} </p>
        {mountain.countries.length > 1? mountain.countries.filter((country, index) => index>0).map(country => <p>It's also located in {country} </p>)
        :
        <></>}
        <p>Elevation of this mountain is {mountain.elevation} meters / {Math.round(mountain.elevation*3.28)} feet</p> 
        {mountain.range? 
        <>
          <p>It's part of the {mountain.range} range</p>
        </>
        :
        <p></p>
      }
      <p>Comments:</p>
      {mountain.comments.length? mountain.comments.map(comments => {
        return(
          <p>{comments.comment}</p>
        )
      })
        : "No comments yet:( Be the first to leave a comment."
      }
        </div>
        <button onClick={() => props.addPeakToCollection(mountain)}
        >Add To My Profile</button>
        <CreateComment handleCreateComment={props.handleCreateComment} mountain={mountain}/>
        <Link
          to='/editmountain'
          state={{mountain}}
        >
          <br />
          <button>
            Edit Mountain
          </button>
        </Link>
        <Link
          to='/mountains'
          state={{mountain}}
        >
          <br />
          <button
            onClick={()=> props.handleDeleteMountain(mountain._id)}>
              Delete Mountain
          </button>
        </Link>
    </main>
    </>
  )
}


export default MountainDetails;