import { useEffect } from 'react'
import '../styles/VisiMisiModal.css'

const VisiMisiModal = ({ candidate, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{candidate.name}</h2>
          <p className="modal-number">Kandidat Nomor {candidate.number}</p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="section-title">Visi</h3>
            <p className="section-content">{candidate.visi}</p>
          </div>

          <div className="modal-section">
            <h3 className="section-title">Misi & Program Unggulan</h3>
            <p className="section-content">{candidate.misi}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisiMisiModal
