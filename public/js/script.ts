/**
 * Calculate the rotator div to run from the top right to bottom left, also on resize.
 */
(() => {
    const rotatingDiv = document.getElementById("rotator");

    const setStyle = (
        container: HTMLElement,
        property: string,
        value: string | number
    ) => {
        if (!container) {
            throw new Error(
                `Couldn't find the container specified in your setStyle call. Received: ${container}`
            );
        }
        container.style.setProperty(
            property,
            `${value.toString()}${typeof value === "number" ? "px" : ""}`
        );
    };

    const calculateDiagonal = (a: number, b: number): number => {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    };

    const calculateAngleTopRightBottomLeft = (): number => {
        const bodyDomRect = document.body.getBoundingClientRect();

        const p1 = {
            x: bodyDomRect.width,
            y: 0,
        };

        const p2 = {
            x: 0,
            y: window.innerHeight,
        };

        return (Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180) / Math.PI;
    };

    const recalculatePositioning = () => {
        if (!rotatingDiv) return;

        setStyle(
            rotatingDiv,
            "transform",
            `rotate(${calculateAngleTopRightBottomLeft()}deg)`
        );

        setStyle(
            rotatingDiv,
            "width",
            calculateDiagonal(window.innerHeight, window.innerWidth)
        );
    };

    recalculatePositioning();

    window.addEventListener("resize", recalculatePositioning);
})();
