import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPaste, updatePaste } from '../redux/slice.js'

const Home = () => {
    const [title, SetTitle] = useState('')
    const [value, SetValue] = useState('')
    const [searchparams, SetSearchParams] = useSearchParams()

    const pasteid = searchparams.get('pasteid')
    const dispatcher = useDispatch()
    const allpastes = useSelector((item) => item.paste.pastes)


    useEffect(() => {
        if (pasteid) {
            const mypaste = allpastes.find((p) => p._id === pasteid)
            SetTitle(mypaste.title);
            SetValue(mypaste.content);
        }

    }, [pasteid])


    function createPaste() {
        const paste = {
            title,
            content: value,
            _id: pasteid || Date.now().toString(36),
            createdAt: new Date().toISOString()
        }


        if (pasteid) {
            dispatcher(updatePaste(paste))
        } else {
            dispatcher(addPaste(paste))
        }

        SetTitle('')
        SetValue('')
        SetSearchParams({})
    }

    return (
        <div className="home-container">
            <h2>{pasteid ? 'Update Note' : 'Create a New Note'}</h2>

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => SetTitle(e.target.value)}
                className="home-input"
            />

            <textarea
                placeholder="Enter text here"
                value={value}
                onChange={(e) => SetValue(e.target.value)}
                rows={12}
                className="home-textarea"
            />

            <button onClick={createPaste} className="home-button">
                {pasteid ? 'Update Note' : 'Create Note'}

            </button>
        </div>
    )
}

export default Home
