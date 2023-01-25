import React from 'react'

const InformationBar = (props) => {
    console.log(props.ip)
    return (
        <div className='information__bar'>
            {/* IP Address container */}
            <div className='information__block'>
                <p className='information__header'>
                    Ip Address
                </p>
                <p className='information__content'>
                    {props.ip !== 'error' ? props.ip.ip : '-'}
                </p>
            </div>

            {/* Location Container (City, State) -> (zip) */}
            <div className='information__block'>
                <p className='information__header'>
                    Location
                </p>
                <p className='information__content'>
                    {props.ip !== 'error' ? `${props.ip.location.city}, ${props.ip.location.region}` : '-' }
                    
                </p>
            </div>

            {/* Timezone */}
            <div className='information__block'>
                <p className='information__header'>
                    Timezone
                </p>
                <p className='information__content'>
                     {props.ip !== 'error' ? `UTC ${props.ip.location.timezone}` : '-'}
                </p>
            </div>

            {/* ISP */}
            <div className='information__block'>
                <p className='information__header'>
                    Isp
                </p>
                <p className='information__content'>
                    {props.ip !== 'error' ? props.ip.isp : '-'}
                </p>
            </div>
        </div>
    )
}

export default InformationBar