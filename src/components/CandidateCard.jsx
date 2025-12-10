import '../styles/CandidateCard.css'

const CandidateCard = ({ candidate, isSelected, onSelect, onShowVisi }) => {
  return (
    <div
      className={`candidate-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(candidate.id)}
    >
      <div className="candidate-image-wrapper">
        <img src={candidate.image} alt={candidate.name} />
      </div>

      <div className="candidate-info">
        <h3 className="candidate-number">Nomor {candidate.number}</h3>
        <h4 className="candidate-name">{candidate.name}</h4>
      </div>

      <button
        type="button"
        className="btn-visi"
        onClick={(e) => {
          e.stopPropagation()
          onShowVisi(candidate)
        }}
      >
        Lihat Visi Misi
      </button>
    </div>
  )
}

export default CandidateCard
