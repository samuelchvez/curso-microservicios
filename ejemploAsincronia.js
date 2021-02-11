async function sleep() {
  return new Promise(
    resolve => {
      const ms = Math.floor(Math.random() * 5000);

      setTimeout(
        () => resolve(ms),
        ms,
      );
    },
  );
}

async function callAsync() {
  console.log("starting ...")

  const start = Date.now();

  const results = await Promise.all(
    [
      sleep(),
      sleep(),
      sleep(),
      sleep(),
      sleep(),
      sleep(),
      sleep(),
    ]
  );
  
  const end = Date.now();
  
  console.log("Results:", results);
  console.log("Execution time (ms):", end - start);
}


const main = callAsync();