import { useEffect, useState } from "react";

function useTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        function checkTouchDevice() {
            if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
                setIsTouchDevice(true);
                return;
            }
            if (window.DocumentTouch && document instanceof DocumentTouch) {
                setIsTouchDevice(true);
                return;
            }
            if ("ontouchstart" in document.documentElement) {
                setIsTouchDevice(true);
                return;
            }
            setIsTouchDevice(false);
        }
        checkTouchDevice();
    }, []);

    return { isTouchDevice };
}

export default useTouchDevice;
