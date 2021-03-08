import React from 'react'
// import { Link } from 'react-router-dom'

function Task({ task }) {
    return (
        <div className="added-lines">
            <p>{task.text}</p>

            {/* <div className="line-options">

                {user._id === carsonLine.user &&
                    <Link
                        className='action-link'
                        to={{
                            pathname: '/editcarson',
                            state: { carsonLine },
                        }}>edit
                            </Link>
                }
                &nbsp;&nbsp;&nbsp;
            {user._id === carsonLine.user &&
                    <Link
                        to=""
                        className='delete'
                        onClick={() => handleDeleteCarsonLine(carsonLine._id)}
                    >
                        remove
                </Link>
                }
            </div> */}
        </div>

    )
}

export default Task;
