import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removePaste } from '../redux/slice.js'

const Pastes = () => {
  const datalist = useSelector((item) => item.paste.pastes)
  const [searchdata, setSearchData] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filteredData = datalist.filter((paste) =>
    paste.title.toLowerCase().includes(searchdata.toLowerCase())
  )

  const handleDelete = (id) => {
    dispatch(removePaste(id))
  }

  const handleEdit = (id) => {
    navigate(`/?notesid=${id}`)
  }

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content)
    alert('Content copied to clipboard!')
  }

  const handleView = (id) => {
  navigate(`/notes/${id}`)
}


  return (
    <div className="pastes-container">
      <h2>All Notes</h2>

      <input
        type="search"
        placeholder="Search here..."
        value={searchdata}
        onChange={(e) => setSearchData(e.target.value)}
        className="pastes-search"
      />

      <div className="pastes-list">
        {filteredData.length ? (
          filteredData.map((paste) => (
            <div className="paste-card" key={paste._id}>
              <h3>{paste.title}</h3>
              <p>
                {paste.content.length > 100
                  ? paste.content.substring(0, 100) + '...'
                  : paste.content}
              </p>
              <p className="paste-date">
                Created: {new Date(paste.createdAt).toLocaleString()}
              </p>

              <div className="paste-buttons">
                <button onClick={() => handleEdit(paste._id)}>Edit</button>
                <button onClick={() => handleDelete(paste._id)}>Delete</button>
                <button onClick={() => handleCopy(paste.content)}>Copy</button>
                <button onClick={() => handleView(paste._id)}>View</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-pastes">No matches found</p>
        )}
      </div>
    </div>
  )
}

export default Pastes
