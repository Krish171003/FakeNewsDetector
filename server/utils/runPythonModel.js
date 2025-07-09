const { spawn } = require("child_process");
const path = require("path");

const runPythonModel = (text) => {
    return new Promise((resolve, reject) => {
        const python = spawn("python", [path.join(__dirname, "../../ML_Model/predict.py"), text]);

        python.stdout.on("data", (data) => {
            resolve(data.toString().trim());
        });

        python.stderr.on("data", (data) => {
            reject(data.toString());
        });
    });
};

module.exports = runPythonModel;
