import { getInput, setOutput, setFailed } from "@actions/core";
import { readFileSync } from "fs";

export const extractTenant = (text: string): string[] => {
    let matrix: string[] = [];
    const regex =
        /^\*\*\* BEGIN TENANT LIST \*\*\*\n(.*)\*\*\* END TENANT LIST \*\*\*$/gms;
    const generator = text.matchAll(regex);
    for (const iterator of generator) {
        matrix = iterator[1].split("\n");
    }

    return matrix;
};
//

const run = async (): Promise<void> => {
    try {
        const path = getInput("path");
        const file: string = readFileSync(path, "utf8");
        const matrix = extractTenant(file);

        console.log(matrix);
        setOutput("matrix", matrix);
    } catch (error) {
        setFailed(error.message);
    }
};

run();
