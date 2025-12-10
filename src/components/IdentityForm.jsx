import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/IdentityForm.css'

const IdentityForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullname: '',
    role: '',
    ekstrakuler: '',
    kelas: '',
    jabatan: ''
  })

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
      ekstrakuler: '',
      kelas: '',
      jabatan: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.fullname || !formData.role) {
      alert('Nama lengkap dan kategori wajib diisi.')
      return
    }

    if (formData.role === 'ekskul' && !formData.ekstrakuler) {
      alert('Mohon pilih Ekstrakurikuler Anda.')
      return
    }

    if (formData.role === 'perwakilan_kelas' && (!formData.kelas || !formData.jabatan)) {
      alert('Mohon pilih Kelas dan Jabatan Kelas Anda.')
      return
    }

    sessionStorage.setItem('voterData', JSON.stringify(formData))
    navigate('/vote')
  }

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="title">PEMILIHAN KETUA MPK</h1>

        <form onSubmit={handleSubmit} className="identity-form">
          <div className="form-group">
            <label htmlFor="fullname">Nama Lengkap</label>
            <input
              type="text"
              id="fullname"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Pilih Role</label>
            <select
              id="role"
              value={formData.role}
              onChange={handleRoleChange}
              required
            >
              <option value="" disabled>-- Pilih Kategori Anda --</option>
              <option value="guru">Guru</option>
              <option value="ekskul">Ketua Ekstrakurikuler</option>
              <option value="anggota_mpk">Anggota MPK</option>
              <option value="anggota_osis">Anggota OSIS</option>
              <option value="perwakilan_kelas">Perwakilan Kelas</option>
            </select>
          </div>

          {formData.role === 'ekskul' && (
            <div className="form-group">
              <label htmlFor="ekstrakuler">Pilih Ekstrakurikuler</label>
              <select
                id="ekstrakuler"
                value={formData.ekstrakuler}
                onChange={(e) => setFormData({ ...formData, ekstrakuler: e.target.value })}
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Paskibra">Paskibra</option>
                <option value="Pramuka">Pramuka</option>
                <option value="PMR">PMR</option>
                <option value="Kestra">Kestra</option>
                <option value="Cinema">Cinema</option>
                <option value="Karate">Karate</option>
                <option value="Paduan Suara">Paduan Suara</option>
                <option value="English Club">English Club</option>
                <option value="Badminton">Badminton</option>
                <option value="Futsal">Futsal</option>
                <option value="Basket">Basket</option>
                <option value="Voli">Voli</option>
              </select>
            </div>
          )}

          {formData.role === 'perwakilan_kelas' && (
            <>
              <div className="form-group">
                <label htmlFor="kelas">Pilih Kelas</label>
                <select
                  id="kelas"
                  value={formData.kelas}
                  onChange={(e) => setFormData({ ...formData, kelas: e.target.value })}
                  required
                >
                  <option value="">-- Pilih Kelas --</option>
                  <option value="X PPLG 1">X PPLG 1</option>
                  <option value="X PPLG 2">X PPLG 2</option>
                  <option value="X PPLG 3">X PPLG 3</option>
                  <option value="X AKKUL 1">X AKKUL 1</option>
                  <option value="X AKKUL 2">X AKKUL 2</option>
                  <option value="X AKKUL 3">X AKKUL 3</option>
                  <option value="X AKKUL 4">X AKKUL 4</option>
                  <option value="X MPLB 1">X MPLB 1</option>
                  <option value="X MPLB 2">X MPLB 2</option>
                  <option value="X MPLB 3">X MPLB 3</option>
                  <option value="X MPLB 4">X MPLB 4</option>
                  <option value="X MPLB 5">X MPLB 5</option>
                  <option value="X TJKT 1">X TJKT 1</option>
                  <option value="X TJKT 2">X TJKT 2</option>
                  <option value="X TJKT 3">X TJKT 3</option>
                  <option value="X PS 1">X PS 1</option>
                  <option value="X PS 2">X PS 2</option>
                  <option value="X PS 3">X PS 3</option>
                  <option value="XI MPLB">XI MPLB</option>
                  <option value="XI MPLB-MP 1">XI MPLB-MP 1</option>
                  <option value="XI MPLB-MP 2">XI MPLB-MP 2</option>
                  <option value="XI MPLB-MP 3">XI MPLB-MP 3</option>
                  <option value="XI MPLB-ML 1">XI MPLB-ML 1</option>
                  <option value="XI MPLB-ML 2">XI MPLB-ML 2</option>
                  <option value="XI AKKUL-AK 1">XI AKKUL-AK 1</option>
                  <option value="XI AKKUL-AK 2">XI AKKUL-AK 2</option>
                  <option value="XI AKKUL-AK 3">XI AKKUL-AK 3</option>
                  <option value="XI AKKUL-PB 1">XI AKKUL-PB 1</option>
                  <option value="XI TJKT-TR 1">XI TJKT-TR 1</option>
                  <option value="XI TJKT-TK 1">XI TJKT-TK 1</option>
                  <option value="XI TJKT-TK 2">XI TJKT-TK 2</option>
                  <option value="XI PS-BR 1">XI PS-BR 1</option>
                  <option value="XI PS-BR 2">XI PS-BR 2</option>
                  <option value="XI PS-BD 1">XI PS-BD 1</option>
                  <option value="XI PPLG-RPL 1">XI PPLG-RPL 1</option>
                  <option value="XI PPLG-RPL 2">XI PPLG-RPL 2</option>
                  <option value="XII MPLB-MP 1">XII MPLB-MP 1</option>
                  <option value="XII MPLB-MP 2">XII MPLB-MP 2</option>
                  <option value="XII MPLB-MP 3">XII MPLB-MP 3</option>
                  <option value="XII MPLB-ML 1">XII MPLB-ML 1</option>
                  <option value="XII MPLB-ML 2">XII MPLB-ML 2</option>
                  <option value="XII AKKUL-AK 1">XII AKKUL-AK 1</option>
                  <option value="XII AKKUL-AK 2">XII AKKUL-AK 2</option>
                  <option value="XII AKKUL-AK 3">XII AKKUL-AK 3</option>
                  <option value="XII AKKUL-PB 1">XII AKKUL-PB 1</option>
                  <option value="XII TJKT-TK 1">XII TJKT-TK 1</option>
                  <option value="XII TJKT-TK 2">XII TJKT-TK 2</option>
                  <option value="XII TJKT-TK 3">XII TJKT-TK 3</option>
                  <option value="XII PS-BR 1">XII PS-BR 1</option>
                  <option value="XII PS-BR 2">XII PS-BR 2</option>
                  <option value="XII PS-BD 1">XII PS-BD 1</option>
                  <option value="XII PPLG-RPL 1">XII PPLG-RPL 1</option>
                  <option value="XII PPLG-RPL 2">XII PPLG-RPL 2</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="jabatan">Jabatan dalam Kelas</label>
                <select
                  id="jabatan"
                  value={formData.jabatan}
                  onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                  required
                >
                  <option value="">-- Pilih Jabatan --</option>
                  <option value="Ketua Murid">Ketua Murid</option>
                  <option value="Wakil KM">Wakil KM</option>
                  <option value="Sekretaris">Sekretaris</option>
                  <option value="Bendahara">Bendahara</option>
                </select>
              </div>
            </>
          )}

          <button type="submit" className="btn-primary">
            Lanjut
          </button>
        </form>
      </div>
    </div>
  )
}

export default IdentityForm
