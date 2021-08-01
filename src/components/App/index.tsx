import React, { useEffect, useState } from 'react'
import { getUser } from 'utils/getUser'

type User = {
  name: string
  company: string
}

const App = (): React.ReactElement => {
  const [ user, setUser ] = useState<User | null>(null)
  const [ hasError, setHasError ] = useState(false)
  const [ showFunFact, setShowFunFact ] = useState(false)

  useEffect(() => {
    getUser()
      .then(data => setUser(data))
      .catch(_ => setHasError(true))
  }, [])

  const onClick = () => {
    setShowFunFact(!showFunFact)
  }

  if (hasError) {
    return <p>There is an error occured</p>
  }

  if (!user) {
    return <p>No user information available</p>
  }

  return (
    <>
      <ul>
        <p>Name: {user.name}</p>
        <p>Company: {user.company}</p>
      </ul>
      <button type="button" onClick={onClick}>Show Fun Fact</button>
      {showFunFact && <p>Im from Sydney</p>}
    </>
  )
}

export default App
