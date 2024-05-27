import React from 'react'

const Home = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-row justify-content-between align-items-start">
                <div className="title" style={{ marginTop: "178.5px" }}>
                    <h1 className="m-0" style={{ maxWidth: '853.8px', textTransform: 'uppercase', fontSize: '89px', color: '#100E0E', fontFamily: 'Almarai', fontWeight: '400' }}>
                        Propelling the World, by design.
                    </h1>
                </div>

                <div className="d-flex flex-column align-items-end pt-4 text-end text-xs" style={{ color: '#374151', fontFamily: 'Sora', marginTop: "110.62px" }}>
                    <div className="d-flex flex-column gap-1">
                        <div className="" style={{ fontSize: '12px', zIndex: 1 }}>
                            introduction
                        </div>
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="opacity-50" style={{ width: '29.5px', height: '0.8px', borderTop: '0.8px solid white' }}></div>
                            <div className="zIndex-1" style={{ whiteSpace: 'nowrap' }}>
                                about us
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="opacity-50" style={{ width: '31.5px', height: '0.8px', borderTop: '0.8px solid white' }}></div>
                            <div className="zIndex-1">
                                services
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="opacity-50" style={{ width: '45.5px', height: '0.8px', borderTop: '0.8px solid white' }}></div>
                            <div className="zIndex-1">
                                works
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-3 align-items-center">
                            <div className="opacity-50" style={{ width: '20.5px', height: '0.8px', borderTop: '0.8px solid white' }}></div>
                            <div className="zIndex-1">
                                industries
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid p-0">
                <div className="box w-100"></div>
            </div>

        </>
    )
}

export default Home