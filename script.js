// Function to get system information
function getSystemInformation() {
    // Operating System
    document.getElementById("os").innerText = "Puter (puter.com)";

    // Browser Version
    const browserInfo = getBrowserInfo();
    document.getElementById("browser-version").innerText = browserInfo;

    // Total Memory (GB)
    if (navigator.deviceMemory) {
        document.getElementById("total-memory").innerText = navigator.deviceMemory.toFixed(2);
    } else {
        document.getElementById("total-memory").innerText = "N/A";
    }

    // Platform
    document.getElementById("platform").innerText = navigator.platform;

    // Browser Language
    document.getElementById("browser-language").innerText = navigator.language;

    // User Agent
    document.getElementById("user-agent").innerText = navigator.userAgent;

    // Online Status
    document.getElementById("online-status").innerText = navigator.onLine ? "Online" : "Offline";

    // CPU Architecture
    document.getElementById("cpu-architecture").innerText = navigator.platform.includes("Win") ? "64-bit" : "N/A";

    // Number of CPU Cores
    document.getElementById("cpu-cores").innerText = navigator.hardwareConcurrency || "N/A";

    // Device Type
    document.getElementById("device-type").innerText = getDeviceType();

    // Screen Resolution
    document.getElementById("screen-resolution").innerText = `${window.screen.width}x${window.screen.height}`;

    // Timezone
    document.getElementById("timezone").innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Function to get device type
function getDeviceType() {
    const mobileKeywords = ['Mobi', 'Android', 'iPhone', 'iPad', 'Windows Phone'];
    const userAgent = navigator.userAgent;

    if (mobileKeywords.some(keyword => userAgent.includes(keyword))) {
        return "Mobile";
    } else if (userAgent.includes('Windows') || userAgent.includes('Macintosh') || userAgent.includes('Linux')) {
        return "Desktop";
    } else {
        return "Unknown";
    }
}

// Function to get browser name and version
function getBrowserInfo() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome")) {
        const version = userAgent.match(/Chrome\/(\S+)/)[1];
        return `Google Chrome ${version}`;
    } else if (userAgent.includes("Firefox")) {
        const version = userAgent.match(/Firefox\/(\S+)/)[1];
        return `Mozilla Firefox ${version}`;
    } else if (userAgent.includes("Safari")) {
        const version = userAgent.match(/Version\/(\S+)/)[1];
        return `Safari ${version}`;
    } else if (userAgent.includes("MSIE")) {
        const version = userAgent.match(/MSIE (\S+);/)[1];
        return `Internet Explorer ${version}`;
    } else {
        return "N/A";
    }
}

// Call the function when the page loads
getSystemInformation();
