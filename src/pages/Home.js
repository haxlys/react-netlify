import React from 'react';

const Home = () => {

    return (
        <div className='home-con'>
            <div className="bgimg-1">
            <div className="caption">
                <span className="border">안녕하세요. 방희배입니다.</span>
            </div>
            </div>

            <div className='second-text'>
                <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>

            <div className="bgimg-2">
            <div className="caption">
                <span className="border black">LESS HEIGHT</span>
            </div>
            </div>

            <div style={{position:'relative',}}>
            <div className='second-text'>
                <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
            </div>

            <div className="bgimg-3">
            <div className="caption">
                <span className="border">Web developer</span>
            </div>
            </div>

            <div style={{position:'relative',}}>
            <div className='second-text'>
                <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
            </div>

            <div className="bgimg-1">
            <div className="caption">
                <span className="border"></span>
            </div>
            </div>
        </div>
    );
};

export default Home;