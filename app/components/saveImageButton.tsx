import React from 'react';

const SaveImageButton = ({ base64Image, imageName }: { base64Image: string, imageName: string }) => {
    const handleSave = () => {
        // Convert base64 image to Blob
        const byteCharacters = atob(base64Image);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        // Create a temporary link and click it programmatically
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'image.png';
        link.click();

        // Clean up the temporary link
        URL.revokeObjectURL(link.href);
    };

    return (
        <button onClick={handleSave}>
            이미지 저장
        </button>
    );
};

export default SaveImageButton;
