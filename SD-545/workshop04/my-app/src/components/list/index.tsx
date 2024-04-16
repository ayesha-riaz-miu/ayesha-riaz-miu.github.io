import User from '../../types'
import userTypes from '../../types/user'
import './index.css'

import React from 'react'

type Props = {
  user: userTypes
}
export default function List(props: Props) {
  const { user:{isFirst,isLoading,isError,user} } = props
  return (
    <>


      {
        isFirst ? <h2>Enter name for search</h2> :
          isLoading ? <h2> Please wait</h2> :
           isError? <h2>try again</h2> :
              <div className="row">
                {
                  user.map(user => (
                    <div className="card" key={user.id}>
                      <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>

                  ))


                }
              </div>

      }


    </>
  )
}
