import { useState } from 'react';

const useDrawerState = () => {
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return { open, handleDrawerToggle };
};

export default useDrawerState;
