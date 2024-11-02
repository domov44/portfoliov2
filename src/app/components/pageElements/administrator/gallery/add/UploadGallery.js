import React from 'react';
import Upload from '@/app/components/ui/form/Upload';
import Stack from '@/app/components/ui/wrapper/Stack';
import { useUser } from '@/app/contexts/UserContext';
import { PiPaperclipLight } from 'react-icons/pi';

export default function UploadGallery({ onFileSelect, acceptedTypes }) {
    const { isLoggedIn } = useUser();

    const handleFileChange = (event) => {
        if (!isLoggedIn) {
            console.error("Vous n'avez pas les permissions nécessaires pour effectuer cette action.");
            return;
        }
        const selectedFile = event.target.files[0];

        if (onFileSelect) {
            onFileSelect(selectedFile);
        }
    };

    return (
        <Stack direction="column">
            <Upload
                icon={PiPaperclipLight}
                variant="action"
                name="document"
                accept={acceptedTypes}
                onChange={handleFileChange}
                text="Joindre un fichier"
                disabled={!isLoggedIn}
            />
        </Stack>
    );
}