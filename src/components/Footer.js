import React from 'react';

const Footer = ({isDark,setIsDark}) => {
    const darkToggle = ()=>{
        setIsDark(!isDark);
    }
    return (
        // isDark가 true면 배경색을 #222
        //글자색은 #fff색으로 변경
        <div className='footer' style={{
            backgroundColor:isDark? "#222":null,
            color: isDark ? "#fff":"#222"
        }}>
            <button onClick={darkToggle}>다크모드</button>
        </div>
    );
};

export default Footer;