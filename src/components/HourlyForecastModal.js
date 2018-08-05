import React from 'react';

// should be passing in the hourly forecast data
const HourlyForecastModal = ({show, hideModal}) => {

    const modalShow = show ? "modal-wrapper db" : 'modal-wrapper dn';

    return (
        <div className={modalShow}>
            <div className="modal-main">
                <div className="pa4 pb5 tc">             
                    <h2>Hourly forecast for Mon Aug 1st</h2>
                    <ul>
                    <li>9:00 am - 80deg</li>
                    </ul>
                    <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-purple fr pointer" onClick={hideModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecastModal;