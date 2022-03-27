import { useState, useRef, useEffect } from "react"

function AddMountain(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState (false)
  const [formData, setFormData] = useState({
    name: '',
    elevation: 0,
    country: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity()?
    setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		const mountainFormData = new FormData()
		// mountainFormData.append('photo', formData.photo)
    mountainFormData.append('name', formData.name)
    mountainFormData.append('elevation', formData.elevation)
    mountainFormData.append('country', formData.country)
    props.handleAddMountain(mountainFormData)
  }

  // const handleChangePhoto = evt => {
	// 	setFormData({...formData, photo: evt.target.files[0]})
	// }


  return (
    <>
      <main>
        <h3>Add mountain</h3>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name-input">
						Mountain's Name (required)
				</label>
        <br />
        <input 
						type="text"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
        </div>
        </form>

      </main>
    
    </>
  )
}

export default AddMountain