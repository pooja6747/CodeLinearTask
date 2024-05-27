import React from 'react'
import img1 from '../../public/public/frame-567@2x.png';
import img2 from '../../public/public/frame-7@2x.png';


const About = () => {
  return (
    <>
    <div className="container-fluid about-section bg-light overflow-hidden d-flex flex-column align-items-start justify-content-start pt-5 px-3 pb-4">
  
      <h1 className="text-uppercase font-weight-normal mb-0" style={{ maxWidth: '860.7px', fontSize: '4rem', color: '#100E0E', fontFamily: 'Almarai' }}>
        Amet magnis diam varius viverra at
      </h1>
      <div className="d-none d-md-block w-100"></div>
      <div className="d-flex flex-row flex-wrap align-items-start justify-start w-100 gap-3 text-body" style={{ maxWidth: '1242.1px', color: '#000', fontFamily: 'Sora' }}>
        <div className="flex-grow-1 d-flex flex-column align-items-start justify-content-start pt-5" style={{ minWidth: '424px' }}>
          <img
            className="img-fluid w-100"
            loading="lazy"
            alt=""
            src={img1}
            style={{ height: '619.5px', objectFit: 'cover' }}
          />
        </div>
        <div className="d-flex flex-column align-items-start justify-content-start" style={{ minWidth: '442.6px', maxWidth: '100%' }}>
          <div className="w-100" style={{ maxWidth: '410.9px', lineHeight: '1.5' }}>
            Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </div>
          <div className="d-flex flex-row align-items-start justify-content-end w-100 text-muted" style={{ fontSize: '1.25rem', fontFamily: 'Almarai' }}>
            <div className="position-relative" style={{ width: '150.8px', height: '88.5px' }}>
              <img
                className="position-absolute"
                loading="lazy"
                alt=""
                src={img2}
                style={{ top: 0, bottom: '0.2px', left: '62.2px', height: 'calc(100% - 0.2px)', width: '88.3px', objectFit: 'contain' }}
              />
              <div className="position-absolute text-uppercase" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '94px', zIndex: 1 }}>
                About Us
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default About