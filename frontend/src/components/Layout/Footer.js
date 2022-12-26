import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="tw-sticky tw-top-[100vh] tw-bg-white tw-text-gray-700 tw-mt-10">
            <div className="container tw-py-10 text-center">
                <p className="tw-font-bold tw-text-lg">F A H M I I B R A H I M</p>
                <p className="mt-2 tw-font-semibold">My Social Media:</p>
                <div className="tw-flex tw-justify-center mt-3">
                    <a href="https://www.facebook.com/profile.php?id=100075059771896">
                        <i className="fab fa-facebook tw-text-2xl tw-ml-3"></i>
                    </a>
                    <a href="https://github.com/fahmiibrahimdev">
                        <i className="fab fa-github tw-text-2xl tw-ml-3"></i>
                    </a>
                    <a href="https://id.quora.com/profile/Fahmi-Ibrahim-8">
                        <i className="fab fa-quora tw-text-2xl tw-ml-3"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fahmi-ibrahim-5023ba207/">
                        <i className="fab fa-linkedin tw-text-2xl tw-ml-3"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer