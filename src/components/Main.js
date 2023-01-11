import React from 'react';

const Main = ({isDark}) => {
    return (
        <div className='main' style={{
            backgroundColor: isDark? '#222':null,
            color: isDark ? '#fff':'#222'
        }}>
            메인페이지입니다
        </div>
    );
};

export default Main;