import React from 'react'


const Download = (src) => {
    const img = new Image();


        img.crossOrigin = 'anonymous'
        img.src = src;
        img.onload = () => {

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const a = document.createElement('a');
        a.download = 'download.jpeg';
        a.href = canvas.toDataURL('image/jpeg');
        a.click();
        };
    
  }
export default Download