import { NextResponse } from "next/server";

let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "editor" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "user" },
];

// get all users
export async function GET() {
    return NextResponse.json(users);
}

// add user
export async function POST(req: Request) {
    const { id, name, email, role } = await req.json();
    if (!id || !name || !email || !role) {
        return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    users.push({ id, name, email, role });
    return NextResponse.json({ message: "User added", users }, { status: 201 });
}

// delete user
export async function DELETE(req: Request) {
    //With the destructuring operation, we directly assign the id property inside the req object to a variable named id.
    const { id } = await req.json();
    users = users.filter((user) => user.id !== id);
    return NextResponse.json({ message: "User deleted", users });
}
