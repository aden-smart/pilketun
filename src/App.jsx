import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import IdentityForm from './components/IdentityForm'
import VotingSection from './components/VotingSection'
import ThankYouPage from './components/ThankYouPage'

function App() {
  const [hasVoted, setHasVoted] = useState(false)
  const [votedCandidate, setVotedCandidate] = useState(null)

  useEffect(() => {
    const voted = localStorage.getItem('hasVoted')
    const candidateId = localStorage.getItem('votedCandidate')

    if (voted === 'true') {
      setHasVoted(true)
      setVotedCandidate(parseInt(candidateId))
    }
  }, [])

  const handleVoteComplete = (candidateId) => {
    localStorage.setItem('hasVoted', 'true')
    localStorage.setItem('votedCandidate', candidateId.toString())
    setHasVoted(true)
    setVotedCandidate(candidateId)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            hasVoted ? (
              <Navigate to="/terima-kasih" replace />
            ) : (
              <IdentityForm />
            )
          }
        />
        <Route
          path="/vote"
          element={
            hasVoted ? (
              <Navigate to="/terima-kasih" replace />
            ) : (
              <VotingSection onVoteComplete={handleVoteComplete} />
            )
          }
        />
        <Route
          path="/terima-kasih"
          element={
            hasVoted ? (
              <ThankYouPage candidateId={votedCandidate} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
