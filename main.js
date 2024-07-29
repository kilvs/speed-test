import SpeedTest from '@cloudflare/speedtest';

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
      labels: [0, 200, 400, 600, 800, 1000],  // Print labels at these values
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

const startTestBtn = document.getElementById('start-test');
const resultDiv = document.getElementById('result');

const target = document.getElementById('foo'); // your canvas element
const gauge = new Gauge(target).setOptions(opts); // create sexy gauge!

gauge.maxValue = 1000; // set max gauge value
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(0); // initialize gauge to 0
gauge.setTextField(document.getElementById("preview-textfield"));

const randomizer = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

startTestBtn.addEventListener("click", () => {
   gauge.set(0);
   startTestBtn.disabled = true;

   const engine = new SpeedTest();

   engine.onResultsChange = () => {
      if (!engine.isFinished) {
         const { results } = engine.results.raw.download;

         Object.values(results).forEach(({ timings }) => {
            timings.forEach(({ bps }) => {
               const downloadMbps = bps / 1024 / 1024;

               const currentReading = randomizer(
                  downloadMbps - 10,
                  downloadMbps + 10
               );

               console.log(currentReading);
               gauge.set(currentReading);

               resultDiv.textContent = `Download Speed: ${
                  currentReading.toFixed(2)
               } Mbps`;
            });
         });
      }
   };

   engine.onFinish = results => {
      const { download } = results.getSummary();
      const downloadMbps = download / 1024 / 1024;

      gauge.set(downloadMbps);
      resultDiv.textContent = `Download Speed: ${downloadMbps.toFixed(2)} Mbps`;
      startTestBtn.disabled = false;
   }
});

// document.getElementById("start-test").addEventListener("click", () => {
//    const engine = new SpeedTest();

//    engine.onResultsChange = ({ type }) => {
//       console.log(type);

//       if (!engine.isFinished) {
//          // console.log(engine.results.raw);

//          const { results } = engine.results.raw.download;

//          console.log(results);

//          Object.values(results).forEach(({ timings }) => {
//             timings.forEach(({ bps }) => {
//                const reading = bps / 1000000;
//                const currentReading = randomizer(reading, reading + 10);

//                console.log(currentReading);
//                document.getElementById("buffer").innerHTML = currentReading;
//             });
//          });
//       }
//    };

//    engine.onFinish = (results) => {
//       console.log(results.getSummary());

//       const { download } = results.getSummary();
//       const result = download / 1000000;

//       console.log(result);
//       document.getElementById("speed-result").innerHTML = result;
//    };
// });
