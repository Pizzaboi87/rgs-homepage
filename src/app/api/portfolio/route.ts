import fs from 'fs';
import path from 'path';

import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        // Read the content of the portfolio directory
        const data: { [key: string]: any } = {};
        const files = fs.readdirSync(path.resolve('./data/portfolio'));

        // Read the content of each file and store it in the data object
        files.forEach((file: string) => {
            const key = file.split('.')[0];
            const filePath = path.resolve(`./data/portfolio/${file}`);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                data[key] = JSON.parse(fileContent);
            } catch (error) {
                console.error(`Error parsing JSON in file ${file}: ${error}`);
            }
        });

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return new NextResponse("Unable to fetch portfolio data", { status: 500 });
    }
}
