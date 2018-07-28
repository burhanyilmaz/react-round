import React from 'react';

const positions = ['left', 'top', 'right', 'bottom'];

const Circle = (props) => {
    const { backgroundColor, position, style, size = 80 } = props;
    let positionStyle = {};
    let mainStyle = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -1,
    }

    mainStyle = { ...mainStyle, height: size, width: size, borderRadius: size / 2 }
    if (position) {
        const _position = position.split(',');
        _position.map((item, index) => {
            if (item.trim() === 'null') {
                return null;
            }
            positionStyle = { ...positionStyle, [positions[index]] : parseInt(item.trim()) }
        })
        mainStyle = { ...mainStyle, ...positionStyle}
    }

    if (style) {
        mainStyle = { ...mainStyle, ...style };
    }

    if (backgroundColor) {
        mainStyle = { ...mainStyle, backgroundColor }
    }

    return <div className="circle" style={mainStyle} />;
}

export default Circle;