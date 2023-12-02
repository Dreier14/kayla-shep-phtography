import { Link } from 'react-router-dom';
import { Image, Col } from 'react-bootstrap';

import Kayla from '../../assets/KaylaShepstonLogo.png';
import Instagram from '../../assets/Instagram.png';

import "../../App.scss";

export const getProfilePhoto = (isThumbnailPhoto: boolean): JSX.Element => {
    const photoClassName = isThumbnailPhoto ? 'thumbnail-photo' : 'profile-photo';

    return (
        <>
            <Image className={photoClassName} src={Kayla} roundedCircle />
        </>
    )
}

export const getContactInfo = (): JSX.Element => {
    return (
        <>
            <h1 className='custom-font'>Kayla Shepston Photography</h1>
            <a className='links custom-font' href='mailto:kaylashepstonphoto@gmail.com'>kaylashepstonphoto@gmail.com</a>
        </>
    )
}

export const getIcons = (): JSX.Element => {
    return (
        <>
            <Link to='https://instagram.com/kaylashepstonphoto?igshid=ZWNiaGo5bmRtdmFv'>
                <Image className='profile-photo' src={Instagram} />
            </Link>
        </>
    )
}

export const renderTopLevelInfo = (): JSX.Element => {
    return (
        <>
            <Col xs={3} sm={2} md={3} lg={3}>
                {getProfilePhoto(false)}
            </Col>
            <Col xs={9} sm={9} md={8} lg={8} xl={6} style={{ marginTop: '15px' }}>
                {getContactInfo()}
            </Col>
            {/* <Col xs={3} md={4}>
                {getIcons()}
            </Col> */}
        </>
    )
}