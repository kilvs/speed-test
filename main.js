// const opts = {
//    angle: -0.3, // The span of the gauge arc
//    lineWidth: 0.13, // The line thickness
//    radiusScale: 1, // Relative radius
//    pointer: {
//       length: 0.46, // // Relative to gauge radius
//       strokeWidth: 0.045, // The thickness
//       color: '#051623', // Fill color
//    },
//    limitMax: false,     // If false, max value increases automatically if value > maxValue
//    limitMin: false,     // If true, the min value of the gauge will be fixed
//    colorStart: '#76D8FF',   // Colors
//    colorStop: '#1B36FF',    // just experiment with them
//    strokeColor: '#EEEEEE',  // to see which ones work best for you
//    generateGradient: true,
//    highDpiSupport: true,     // High resolution support
//    // renderTicks is Optional
//    staticLabels: {
//       font: "16px Montserrat",  // Specifies font
//       labels: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],  // Print labels at these values
//       color: "#000000",  // Optional: Label text color
//       fractionDigits: 0  // Optional: Numerical precision. 0=round off.
//    },
//    renderTicks: {
//       divisions: 5,
//       divWidth: 0.6,
//       divLength: 0.6,
//       divColor: '#fff',
//       subDivisions: 3,
//       subLength: 0.3,
//       subWidth: 0.3,
//       subColor: '#fff'
//    }
// };
// const target = document.getElementById('foo'); // your canvas element
// const gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
// gauge.maxValue = 1000; // set max gauge value
// gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
// gauge.animationSpeed = 32; // set animation speed (32 is default value)
// gauge.set(500); // set actual value
// gauge.setTextField(document.getElementById("preview-textfield"));

/* WORKING CODE ###################
const opts = {
   angle: -0.3, // The span of the gauge arc
   lineWidth: 0.13, // The line thickness
   radiusScale: 1, // Relative radius
   pointer: {
      length: 0.46, // // Relative to gauge radius
      strokeWidth: 0.045, // The thickness
      color: '#051623', // Fill color
   },
   limitMax: false,     // If false, max value increases automatically if value > maxValue
   limitMin: false,     // If true, the min value of the gauge will be fixed
   colorStart: '#76D8FF',   // Colors
   colorStop: '#1B36FF',    // just experiment with them
   strokeColor: '#EEEEEE',  // to see which ones work best for you
   generateGradient: true,
   highDpiSupport: true,     // High resolution support
   staticLabels: {
      font: "16px Montserrat",  // Specifies font
      labels: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
   },
   renderTicks: {
      divisions: 5,
      divWidth: 0.6,
      divLength: 0.6,
      divColor: '#fff',
      subDivisions: 3,
      subLength: 0.3,
      subWidth: 0.3,
      subColor: '#fff'
   }
};
const target = document.getElementById('foo'); // your canvas element
const gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 1000; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(0); // initialize gauge to 0
gauge.setTextField(document.getElementById("preview-textfield"));

const startTestBtn = document.getElementById('start-test');
const resultDiv = document.getElementById('result');

const testFileUrl = 'https://staging-falconfinet.azurewebsites.net/wp-content/uploads/2024/07/hero-bg-1.webp'; // URL of the test file
const testFileSizeInBytes = 24268.8; // Size of the test file in bytes (example: 1MB)

const calculateSpeed = (startTime, endTime, fileSize) => {
   const durationInSeconds = (endTime - startTime) / 1000;
   const bitsLoaded = fileSize * 8;
   const speedBps = bitsLoaded / durationInSeconds;
   const speedKbps = speedBps / 1024;
   const speedMbps = speedKbps / 1024;
   return speedMbps;
};

const testSpeed = async () => {
   resultDiv.textContent = 'Testing...';
   gauge.set(0); // reset gauge to 0
   const startTime = new Date().getTime();

   try {
      await fetch(testFileUrl, { cache: 'no-cache' });
      const endTime = new Date().getTime();
      const speedMbps = calculateSpeed(startTime, endTime, testFileSizeInBytes);
      gauge.set(speedMbps); // update gauge with speed
      resultDiv.textContent = `Download Speed: ${speedMbps.toFixed(2)} Mbps`;
   } catch (error) {
      resultDiv.textContent = 'Error: Unable to test speed.';
   }
};

startTestBtn.addEventListener('click', testSpeed);

 */

const opts = {
   angle: -0.3, // The span of the gauge arc
   lineWidth: 0.13, // The line thickness
   radiusScale: 1, // Relative radius
   pointer: {
      length: 0.46, // Relative to gauge radius
      strokeWidth: 0.045, // The thickness
      color: '#051623', // Fill color
   },
   limitMax: false,     // If false, max value increases automatically if value > maxValue
   limitMin: false,     // If true, the min value of the gauge will be fixed
   colorStart: '#76D8FF',   // Colors
   colorStop: '#1B36FF',    // just experiment with them
   strokeColor: '#EEEEEE',  // to see which ones work best for you
   generateGradient: true,
   highDpiSupport: true,     // High resolution support
   staticLabels: {
      font: "16px Montserrat",  // Specifies font
      labels: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
   },
   renderTicks: {
      divisions: 5,
      divWidth: 0.6,
      divLength: 0.6,
      divColor: '#fff',
      subDivisions: 3,
      subLength: 0.3,
      subWidth: 0.3,
      subColor: '#fff'
   }
};
const target = document.getElementById('foo'); // your canvas element
const gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 1000; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(0); // initialize gauge to 0
gauge.setTextField(document.getElementById("preview-textfield"));

const startTestBtn = document.getElementById('start-test');
const resultDiv = document.getElementById('result');

const testFileUrl = '/wp-content/uploads/2024/07/download-image.jpeg'; // URL of the test file
const testFileSizeInBytes = 4737536; // Size of the test file in bytes (example: 2MB)

const calculateSpeed = (startTime, endTime, fileSize) => {
   const durationInSeconds = (endTime - startTime) / 1000;
   const bitsLoaded = fileSize * 8;
   const speedBps = bitsLoaded / durationInSeconds;
   const speedKbps = speedBps / 1024;
   const speedMbps = speedKbps / 1024;
   return speedMbps;
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const testSpeed = async () => {
   startTestBtn.disabled = true; // Disable button
   resultDiv.textContent = 'Speed testing...'; // Show buffering message

   await delay(2000); // Delay of 2 seconds before starting the test

   const startTime = new Date().getTime();

   try {
      const response = await fetch(testFileUrl, { cache: 'no-cache' });
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const endTime = new Date().getTime();
      const speedMbps = calculateSpeed(startTime, endTime, testFileSizeInBytes);
      gauge.set(speedMbps); // update gauge with speed
      resultDiv.textContent = `${speedMbps.toFixed(2)} Mbps`;
   } catch (error) {
      resultDiv.textContent = `Error: Unable to test speed. ${error.message}`;
   } finally {
      startTestBtn.disabled = false; // Re-enable button
   }
};

startTestBtn.addEventListener('click', testSpeed);