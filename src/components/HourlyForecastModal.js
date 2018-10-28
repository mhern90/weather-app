import React from 'react';

// should be passing in the hourly forecast data
const HourlyForecastModal = ({ show, hideModal, hourly, selectedDay}) => {

    const modalShow = show ? "modal-wrapper db" : 'modal-wrapper dn';
    const viewDayObj = hourly.find((el) => {
        return el.day === selectedDay;
    });

    return (
        <div className={modalShow}>
            <div className="modal-main">
                <div className="pa4 pb5 tc">         
                    <h2>Hourly forecast for {viewDayObj.day}</h2>
                    <ul className="list pl0">
                        {viewDayObj.hours.map((hour, i) => <li className="pb2">{hour} - {viewDayObj.degrees[i]}&#176;</li>) }
                    </ul>
                    <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-purple fr pointer" onClick={hideModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecastModal;