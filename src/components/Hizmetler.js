import React from 'react'

const Hizmetler = () => {
  return (
    <div className='hizmetler'>
        <div className='hizmetler-left'>
            <h2> <span style={{color: 'yellow'}}>İLETİŞİM  </span>
            ADRESLERİ</h2>
            <ul>
                <li ><p className='hizmetler-li'>Telefon Et: <a href=''>0XXX xxx xxx</a></p></li>
                <li ><p className='hizmetler-li'>WhatsApp: <a href='"https://wa.me/+905066424651?text=Hello%20there!"'>0XXX xxx xxx</a></p></li>
                <li ><p className='hizmetler-li'>Instagram:<a href=''> sariselim</a></p></li>
            </ul>
        </div>
        <div className='hizmetler-right'>
        <h2> <span style={{color: 'yellow'}}>CARBON GYM  </span>
            ADRES</h2>
        <p>Manisa/ Uncubozköy Mahallesi / 5511 sokak</p>
        </div>
       
    </div>
  )
}

export default Hizmetler