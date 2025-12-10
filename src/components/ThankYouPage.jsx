import { useEffect, useState } from 'react'
import { candidates } from '../utils/candidates'
import '../styles/ThankYouPage.css'

const ThankYouPage = ({ candidateId }) => {
  const [candidate, setCandidate] = useState(null)

  useEffect(() => {
    if (candidateId) {
      const selected = candidates.find(c => c.id === candidateId)
      setCandidate(selected)
    }
  }, [candidateId])

  return (
    <div className="page-container">
      <div className="thank-you-container">
        <div className="thank-you-content">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="thank-you-title">Terima Kasih!</h1>
          <p className="thank-you-message">
            Suara Anda telah berhasil tercatat dalam sistem pemilihan Ketua MPK
            SMK Negeri 1 Cianjur. Partisipasi Anda sangat berarti untuk masa depan
            organisasi siswa yang lebih baik.
          </p>

          {candidate && (
            <div className="voted-info">
              <div className="voted-candidate">
                <div className="voted-image">
                  <img src={candidate.image} alt={candidate.name} />
                </div>
                <div className="voted-details">
                  <p className="voted-label">Anda memilih:</p>
                  <h3 className="voted-name">{candidate.name}</h3>
                  <p className="voted-number">Kandidat Nomor {candidate.number}</p>
                </div>
              </div>

              <div className="slogan-container">
                <div className="slogan-icon">💬</div>
                <p className="slogan-text">"{candidate.slogan}"</p>
              </div>
            </div>
          )}

          <div className="info-box">
            <p className="info-text">
              Anda tidak dapat mengubah pilihan atau melakukan voting ulang.
              Halaman ini akan tetap ditampilkan setiap kali Anda mengakses sistem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
