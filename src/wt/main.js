import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { cpus } from "os";
import { dirname } from "path";

export const performCalculations = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const cpu = cpus();
  let number = 10;
  const worckersResults = await Promise.allSettled(
    cpu.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__dirname + "/worker.js", {
          workerData: number++,
        });
        worker.on("message", (res) => resolve(res));
        worker.on("error", (rej) => reject(rej));
      });
    })
  );

  const results = worckersResults.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(results);

  return results;
};
performCalculations();

