import React from 'react'
import SelimSarı from '../images/selimsarı.jpeg'
const Banner = () => {
  return (
    <div className='banner-flex'>
      <div className='banner-text'>
        <h2 className='banner-h2'>
          BİREYSEL
          <br></br>
          <span style={{color:'yellow'}}> FİTNESS ANTRENÖRÜ
          </span>
          <br></br>
          <span style={{color:'yellow'}}> PROFESYONEL ÇALIŞMA
          </span>
        </h2>
        <p className='banner-p'>
         Bireysel antrenman ve beslenme programı ile en iyi sonuç isteyenlere özel olarak tasarlanan eğitimlerimle sizlere hizmet vermekteyim.

        </p>
        <div>
          <ul  className='banner-values'>
            <li className='banner-values-li'>
              <span className='li-number'>
                15+
              </span>
              <br></br>
              <span className='li-desc'>
                Yıllık Tecrübe
              </span>
            </li>
            <li className='banner-values-li'>
            <span className='li-number'>
                100+
              </span>
              <br></br>
              <span className='li-desc'>
                Öğrenci
              </span>
            </li>
            <li className='banner-values-li' style={{borderRight: 'none'}}>
            <span className='li-number'>
                %100
              </span>
              <br></br>
              <span className='li-desc'>
                Öğrenci Memnuniyeti
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className='banner-image'>
        <div className='image-container'>
        </div>
      </div> */}
       
    </div>
  )
}

export default Banner