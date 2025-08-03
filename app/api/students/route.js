let students = [
    {name : "Atharva", age: 20,  hobby : "coding"},
    {name : "Laksh", age: 22, hobby : "gaming"},
    {name : "Prem", age: 22,  hobby : "gaming"},
    {name : "Yash", age: 22,  hobby : "Rage"}
]

export async function GET() {
    
    return Response.json(students)
}