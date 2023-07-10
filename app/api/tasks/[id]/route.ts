import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { MyData } from "../route";
import { fileName } from "@/utils/requiredUtils";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	const id = params.id;

	try {
		const data = await fs.readFileSync(fileName);
		const jsonData = JSON.parse(data.toString());
		const taskData = jsonData.filter((data: MyData) => data.taskId === id);
		const taskId = taskData[0].taskId;
		if (id === taskId) {
			return NextResponse.json(
				{ message: "API Data Fetched Successfully!", data: taskData },
				{ status: 200 }
			);
		}
	} catch (error) {
		console.error(`API Data Fetching failed! ${error}`);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	const id = params.id;
	const { title, description, status }: MyData = await request.json();

	if (!title || !description || !status) {
		return new NextResponse(
			JSON.stringify({ name: "Please fill all required fields" }),
			{ status: 400 }
		);
	}

	const data = await fs.readFileSync(fileName);
	const jsonData = JSON.parse(data.toString());
	const taskData = jsonData.filter((data: MyData) => data.taskId === id);

	if (taskData.length === 0) {
		return new NextResponse(JSON.stringify({ name: "Task not found" }), {
			status: 404,
		});
	}
	taskData[0].title = title;
	taskData[0].description = description;
	taskData[0].status = status;
	await fs.writeFileSync(fileName, JSON.stringify(jsonData));
	return NextResponse.json(taskData, { status: 200 });
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	const id = params.id;

	const data = await fs.readFileSync(fileName);
	const jsonData = JSON.parse(data.toString());
	const taskData = jsonData.filter((data: MyData) => data.taskId !== id);
	await fs.writeFileSync(fileName, JSON.stringify(taskData));
	return NextResponse.json(
		{
			message: `Task deleted successfully!}`,
			jsonData,
		},
		{ status: 200 }
	);
}