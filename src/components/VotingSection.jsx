import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { candidates } from '../utils/candidates'
import { supabase } from '../utils/supabase'
import CandidateCard from './CandidateCard'
import VisiMisiModal from './VisiMisiModal'
import '../styles/VotingSection.css'

const VotingSection = ({ onVoteComplete }) => {
  const navigate = useNavigate()
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [voterData, setVoterData] = useState(null)

  useEffect(() => {
    const storedData = sessionStorage.getItem('voterData')
    if (!storedData) {
      navigate('/')
      return
    }
    setVoterData(JSON.parse(storedData))
  }, [navigate])

  const handleCandidateSelect = (candidateId) => {
    setSelectedCandidate(candidateId)
  }

  const handleShowVisi = (candidate) => {
    setModalData(candidate)
  }

  const handleCloseModal = () => {
    setModalData(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedCandidate) {
      alert('Pilih kandidat dulu.')
      return
    }

    if (!reason.trim()) {
      alert('Tulis alasan memilih.')
      return
    }

    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      let jabatanKelasValue = ''
      if (voterData.role === 'perwakilan_kelas') {
        jabatanKelasValue = `${voterData.kelas} - ${voterData.jabatan}`
      }

      const voteData = {
        nama: voterData.fullname,
        role: voterData.role,
        ekstrakuler: voterData.ekstrakuler || '',
        jabatan_kelas: jabatanKelasValue,
        kandidat: selectedCandidate,
        alasan: reason.trim()
      }

      const { error } = await supabase
        .from('votes')
        .insert([voteData])

      if (error) {
        throw error
      }

      sessionStorage.removeItem('voterData')
      onVoteComplete(selectedCandidate)
      navigate('/terima-kasih')
    } catch (error) {
      console.error('Error submitting vote:', error)
      alert('Gagal mengirim vote. Silakan coba lagi.')
      setIsSubmitting(false)
    }
  }

  if (!voterData) {
    return null
  }

  return (
    <div className="page-container">
      <div className="voting-container">
        <h1 className="title">PEMILIHAN KETUA MPK</h1>
        <h2 className="subtitle">Pilih Kandidat</h2>

        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              isSelected={selectedCandidate === candidate.id}
              onSelect={handleCandidateSelect}
              onShowVisi={handleShowVisi}
            />
          ))}
        </div>

        {selectedCandidate && (
          <form onSubmit={handleSubmit} className="reason-form">
            <div className="form-group">
              <label htmlFor="reason">Alasan Memilih</label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tulis alasan kamu memilih kandidat (wajib)..."
                rows="5"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-text">
                  <span className="spinner"></span>
                  Mengirim Vote...
                </span>
              ) : (
                'Submit Vote'
              )}
            </button>
          </form>
        )}

        {modalData && (
          <VisiMisiModal
            candidate={modalData}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  )
}

export default VotingSection
