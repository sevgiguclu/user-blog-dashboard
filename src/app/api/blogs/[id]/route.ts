import { NextResponse } from "next/server";

const blogs = [
        { id: 1, title: "React Best Practices", author: "John Doe", content: "Learn the best practices for writing clean React code.", category: "code",image:"/images/blog1.jpg" },
        { id: 2, title: "Top 10 Travel Destinations", author: "Jane Smith", content: "Explore the best travel destinations for your next vacation.", category: "travel",image:"/images/blog2.jpg" },
        { id: 3, title: "Healthy Eating Habits", author: "Emily Johnson", content: "Tips for maintaining a healthy diet and lifestyle.", category: "food",image:"/images/blog3.jpg" },
        { id: 4, title: "State Management in React", author: "Michael Brown", content: "Exploring different state management approaches.", category: "code",image:"/images/blog4.jpg" },
        { id: 5, title: "Building a Blog with Next.js", author: "Chris Evans", content: "Step-by-step guide to creating a blog using Next.js.", category: "code",image:"/images/blog5.jpg" },
        { id: 6, title: "Latest Fashion Trends", author: "Sophia Lee", content: "Discover the hottest fashion trends of the season.", category: "fashion",image:"/images/blog6.jpg" },
        { id: 7, title: "Exploring Mantine UI", author: "Daniel Green", content: "A deep dive into the features of Mantine UI.", category: "code",image:"/images/blog7.jpg" },
        { id: 8, title: "Optimizing React Performance", author: "Olivia White", content: "Tips and tricks to make React applications faster.", category: "code",image:"/images/blog1.jpg" },
        { id: 9, title: "Top 5 Skincare Routines", author: "Jack Wilson", content: "Effective skincare routines for glowing skin.", category: "beauty",image:"/images/blog2.jpg" },
        { id: 10, title: "React Testing Library Guide", author: "Sophia Adams", content: "Learn how to write tests for your React components.", category: "code",image:"/images/blog3.jpg" },
        { id: 11, title: "Best Street Foods Around the World", author: "Daniel Parker", content: "A guide to the most delicious street foods globally.", category: "food",image:"/images/blog4.jpg" },
        { id: 12, title: "Weekend Getaway Ideas", author: "Robert Hall", content: "Perfect destinations for a quick escape.", category: "travel",image:"/images/blog5.jpg" },
        { id: 13, title: "Fitness Tips for Beginners", author: "Sophia Thomas", content: "Essential fitness tips for a healthy lifestyle.", category: "health",image:"/images/blog6.jpg" },
        { id: 14, title: "GraphQL with Next.js", author: "James Lee", content: "Using GraphQL in a Next.js project.", category: "code",image:"/images/blog7.jpg" },
        { id: 15, title: "Makeup Tips for Beginners", author: "Sarah Brown", content: "Essential makeup tips to get started.", category: "beauty",image:"/images/blog1.jpg" },
        { id: 16, title: "Best Hiking Trails", author: "Chris Johnson", content: "Top hiking trails for adventure lovers.", category: "travel",image:"/images/blog2.jpg" },
        { id: 17, title: "Photography Techniques", author: "Emma Wilson", content: "Improve your photography skills with these techniques.", category: "photography",image:"/images/blog3.jpg" },
        { id: 18, title: "React Router Guide", author: "David Martinez", content: "A complete guide to React Router.", category: "code",image:"/images/blog4.jpg" },
        { id: 19, title: "Best Coffee Shops in the City", author: "Sophia Green", content: "Top places to enjoy a good cup of coffee.", category: "food",image:"/images/blog5.jpg" },
        { id: 20, title: "Personal Finance Tips", author: "Jack Thompson", content: "How to manage your finances effectively.", category: "finance",image:"/images/blog6.jpg" },
        { id: 21, title: "Building a Chat App with React", author: "Daniel Lee", content: "Creating a real-time chat application with React.", category: "code",image:"/images/blog7.jpg" },
        { id: 22, title: "Best Vegan Recipes", author: "David Brown", content: "Delicious vegan recipes for healthy living.", category: "food",image:"/images/blog1.jpg" },
        { id: 23, title: "Best Budget Travel Tips", author: "Michael Adams", content: "How to travel on a budget.", category: "travel",image:"/images/blog2.jpg" },
        { id: 24, title: "Stock Market Basics", author: "Sarah Parker", content: "Introduction to investing in the stock market.", category: "finance",image:"/images/blog1.jpg" },
        { id: 25, title: "React Design Patterns", author: "Sophia Martinez", content: "Common design patterns used in React development.", category: "code",image:"/images/blog3.jpg" },
        { id: 26, title: "Unit Testing in Next.js", author: "Chris Thomas", content: "Writing unit tests for Next.js components.", category: "code",image:"/images/blog1.jpg" },
        { id: 27, title: "Best Hair Care Products", author: "James Carter", content: "Top-rated hair care products for all hair types.", category: "beauty",image:"/images/blog1.jpg" },
        { id: 28, title: "Meditation for Beginners", author: "Emma Scott", content: "A guide to meditation and mindfulness.", category: "health",image:"/images/blog1.jpg" },
        { id: 29, title: "How to Start a Fashion Brand", author: "Daniel White", content: "Steps to launch your own fashion brand.", category: "fashion",image:"/images/blog1.jpg" },
        { id: 30, title: "Personal Development Strategies", author: "Emily Brown", content: "Techniques to improve personal growth and productivity.", category: "self-improvement",image:"/images/blog1.jpg" },
        { id: 31, title: "React and TypeScript", author: "Emily Brown", content: "How to use TypeScript with React effectively.", category: "code",image:"/images/blog1.jpg" },
        { id: 32, title: "Best Streetwear Brands", author: "James Carter", content: "Top streetwear brands to check out.", category: "fashion",image:"/images/blog1.jpg" },
        { id: 33, title: "Yoga for Stress Relief", author: "Sophia Adams", content: "How yoga can help reduce stress and improve well-being.", category: "health",image:"/images/blog1.jpg" },
        { id: 34, title: "How to Start Investing", author: "Daniel Parker", content: "A beginner’s guide to investing money wisely.", category: "finance",image:"/images/blog1.jpg" },
        { id: 35, title: "Photography Gear for Beginners", author: "Michael Brown", content: "Essential photography equipment for new photographers.", category: "photography",image:"/images/blog1.jpg" }
];

export async function GET(req:Request,{params}: {params:{id:string}}) {

    const blog = blogs.find((b)=>b.id.toString() === params.id);
    
    if(!blog)
        return NextResponse.json({error:"Blog is not found"},{status:404});

    return NextResponse.json(blog);
}