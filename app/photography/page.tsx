import React from 'react';

const Photography = () => {
    return (
        <div className="mx-auto px-4 max-w-7xl">
            <div className="md:columns-3 space-y-4 pt-4">
                {[
                    "https://i.imgur.com/2d6ahrU.jpg",
                    "https://i.imgur.com/hUjlPXV.jpg",
                    "https://i.imgur.com/UQ78Skm.jpg",
                    "https://live.staticflickr.com/65535/53373781774_fa78c4f486_c_d.jpg",
                    "https://i.imgur.com/C3vOSkv.jpg",
                    "https://i.imgur.com/OQAOxhX.jpg",
                    "https://i.imgur.com/9Tva5x6.jpg",
                    "https://i.imgur.com/pwnntsv.jpg",
                    "https://i.imgur.com/CQwZGC6.jpg",
                    "https://live.staticflickr.com/65535/53373781794_51ace553ec_c_d.jpg",
                    "https://i.imgur.com/FWdnUg3.jpg",
                    "https://i.imgur.com/p09b7Vx.jpg",
                    "https://i.imgur.com/GAMoq7m.jpg",
                    "https://i.imgur.com/2G49YCv.jpg",
                    "https://live.staticflickr.com/65535/53372554802_ddcdf675a5_c_d.jpg",
                    "https://live.staticflickr.com/65535/53373781799_0145e19411_c_d.jpg",
                    "https://i.imgur.com/zCpBUSg.png",
                    "https://i.imgur.com/UZH7YMX.jpg",
                    "https://i.imgur.com/cHZFzB7.jpg",
                    "https://i.imgur.com/0zSDZTu.jpg",
                ].map((src, index) => (
                    <img key={index} src={src} className="mb-2 w-full h-auto" style={{ breakInside: 'avoid' }} />
                ))}
            </div>
        </div>
    );
};

export default Photography;
