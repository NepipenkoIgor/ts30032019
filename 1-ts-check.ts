Object
    .defineProperty(window, "MySweetApp", {
        value: "v1.0.0", writable: true
    });

function deliveryMethod(): string {
    // TODO
    return "overnight";
}

function shipWeight(): number {
    const el: HTMLDivElement = document.getElementById('weight') as HTMLDivElement;
    return parseInt(el.innerHTML);
}

/**
 * @param {(string | string[])} emailAddr
 */
function sendUpdates(emailAddr: string | string[]): void {
    /**
     * @param {string} addr
     */
    function sendEmail(addr: string) {
        // можно исполльзовать //@ts-ignore чтобы отключить проверку для любой строки 
        console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);

        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string, _idx: number) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}