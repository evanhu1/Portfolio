import React from 'react';

const Photography = () => {
    return (
        <div className="mx-auto px-4 max-w-7xl">
            <div className="md:columns-3 space-y-4 pt-4">
                {[
                    "https://i.imgur.com/2d6ahrU.jpg",
                    "https://i.imgur.com/hUjlPXV.jpg",
                    "https://i.imgur.com/wJo23So.jpg",
                    "https://i.imgur.com/UQ78Skm.jpg",
                    "https://i.imgur.com/C3vOSkv.jpg",
                    "https://i.imgur.com/OQAOxhX.jpg",
                    "https://i.imgur.com/9Tva5x6.jpg",
                    "https://i.imgur.com/Kvf3GRt.jpg",
                    "https://i.imgur.com/pwnntsv.jpg",
                    "https://i.imgur.com/CQwZGC6.jpg",
                    "https://i.imgur.com/FWdnUg3.jpg",
                    "https://i.imgur.com/4eRGZYs.jpg",
                    "https://i.imgur.com/p09b7Vx.jpg",
                    "https://i.imgur.com/EqiEWx9.jpg",
                    "https://i.imgur.com/GAMoq7m.jpg",
                    "https://i.imgur.com/2G49YCv.jpg",
                    "https://i.imgur.com/zCpBUSg.png",
                    "https://i.imgur.com/boWjTcg.jpg",
                    "https://i.imgur.com/UZH7YMX.jpg",
                    "https://i.imgur.com/cHZFzB7.jpg",
                    "https://i.imgur.com/0zSDZTu.jpg",
                    "https://i.imgur.com/1M5k0Sy.jpg",
                    "https://i.imgur.com/lLWaeMf.jpg"
                ].map((src, index) => (
                    <img key={index} src={src} className="mb-2 w-full h-auto" style={{ breakInside: 'avoid' }} />
                ))}
            </div>
        </div>
    );
};

export default Photography;
