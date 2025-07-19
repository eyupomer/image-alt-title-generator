import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Image Alt Generator Test (Vite)</h1>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Test Images (alt ve title otomatik eklenecek):</h3>
          
          {/* Bu img tagları build sırasında otomatik olarak alt ve title alacak */}
          <img src="/images/user-profile.jpg" style={{ width: '200px', margin: '10px' }} />
          <img src="/images/avatar.png" style={{ width: '200px', margin: '10px' }} />
          <img src="/images/product_photo_1.webp" style={{ width: '200px', margin: '10px' }} />
          <img src="/images/logo.svg" style={{ width: '200px', margin: '10px' }} />
          
          <h3>Mevcut alt/title olan resimler (değişmeyecek):</h3>
          <img 
            src="/images/custom-image.jpg" 
            alt="Bu alt değişmeyecek" 
            title="Bu title değişmeyecek"
            style={{ width: '200px', margin: '10px' }} 
          />
        </div>
        
        <p>
          Bu sayfadaki resimler build sırasında otomatik olarak alt ve title alacak.
          <br />
          Konsolu açıp build çıktısını kontrol edin.
        </p>
      </header>
    </div>
  )
}

export default App 