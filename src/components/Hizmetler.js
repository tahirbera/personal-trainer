import React from 'react'

const Hizmetler = () => {
  return (
    <div className='hizmetler'>
        <div className='hizmetler-left'>
            <h2> <span style={{color: 'yellow'}}>İLETİŞİM  </span>
            ADRESLERİ</h2>
            <ul>
                <li ><p className='hizmetler-li'>Telefon Et: <a href='tel:+905066424651'>+90 506 642 4651</a></p></li>
                <li ><p className='hizmetler-li'>WhatsApp: <a href="https://wa.me/+905066424651?text=Merhaba%20PT%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.">+90 506 642 4651</a></p></li>
                <li ><p className='hizmetler-li'>Instagram:<a href='https://www.instagram.com/selim.sari91/'> selim.sarı91</a></p></li>
            </ul>
        </div>
        <div className='hizmetler-right'>
        <h2> <span style={{color: 'yellow'}}>CARBON GYM  </span>
            ADRES</h2>
        <p>Uncubozköy, 5537. Sk. 32/A, 45010 Yunusemre/Manisa</p>
        </div>
       
    </div>
  )
}

export default Hizmetler