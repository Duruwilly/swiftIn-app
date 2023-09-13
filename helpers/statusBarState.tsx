import { useState } from 'react';

export default function useStatusbarState() {
    const [isDark, setIsDark] = useState<boolean>(true);

    const statusbarStyleFunc = () => {
        setIsDark((prev) => !prev);
    };

    return { isDark, statusbarStyleFunc };
}
