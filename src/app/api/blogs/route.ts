import { NextResponse } from "next/server";

export async function GET() {
    const blogs = [
        { id: 1, title: "React Best Practices", author: "John Doe", description: "Learn the best practices for writing clean React code.", category: "code" },
        { id: 2, title: "Top 10 Travel Destinations", author: "Jane Smith", description: "Explore the best travel destinations for your next vacation.", category: "travel" },
        { id: 3, title: "Healthy Eating Habits", author: "Emily Johnson", description: "Tips for maintaining a healthy diet and lifestyle.", category: "food" },
        { id: 4, title: "State Management in React", author: "Michael Brown", description: "Exploring different state management approaches.", category: "code" },
        { id: 5, title: "Building a Blog with Next.js", author: "Chris Evans", description: "Step-by-step guide to creating a blog using Next.js.", category: "code" },
        { id: 6, title: "Latest Fashion Trends", author: "Sophia Lee", description: "Discover the hottest fashion trends of the season.", category: "fashion" },
        { id: 7, title: "Exploring Mantine UI", author: "Daniel Green", description: "A deep dive into the features of Mantine UI.", category: "code" },
        { id: 8, title: "Optimizing React Performance", author: "Olivia White", description: "Tips and tricks to make React applications faster.", category: "code" },
        { id: 9, title: "Top 5 Skincare Routines", author: "Jack Wilson", description: "Effective skincare routines for glowing skin.", category: "beauty" },
        { id: 10, title: "React Testing Library Guide", author: "Sophia Adams", description: "Learn how to write tests for your React components.", category: "code" },
        { id: 11, title: "Best Street Foods Around the World", author: "Daniel Parker", description: "A guide to the most delicious street foods globally.", category: "food" },
        { id: 12, title: "Weekend Getaway Ideas", author: "Robert Hall", description: "Perfect destinations for a quick escape.", category: "travel" },
        { id: 13, title: "Fitness Tips for Beginners", author: "Sophia Thomas", description: "Essential fitness tips for a healthy lifestyle.", category: "health" },
        { id: 14, title: "GraphQL with Next.js", author: "James Lee", description: "Using GraphQL in a Next.js project.", category: "code" },
        { id: 15, title: "Makeup Tips for Beginners", author: "Sarah Brown", description: "Essential makeup tips to get started.", category: "beauty" },
        { id: 16, title: "Best Hiking Trails", author: "Chris Johnson", description: "Top hiking trails for adventure lovers.", category: "travel" },
        { id: 17, title: "Photography Techniques", author: "Emma Wilson", description: "Improve your photography skills with these techniques.", category: "photography" },
        { id: 18, title: "React Router Guide", author: "David Martinez", description: "A complete guide to React Router.", category: "code" },
        { id: 19, title: "Best Coffee Shops in the City", author: "Sophia Green", description: "Top places to enjoy a good cup of coffee.", category: "food" },
        { id: 20, title: "Personal Finance Tips", author: "Jack Thompson", description: "How to manage your finances effectively.", category: "finance" },
        { id: 21, title: "Building a Chat App with React", author: "Daniel Lee", description: "Creating a real-time chat application with React.", category: "code" },
        { id: 22, title: "Best Vegan Recipes", author: "David Brown", description: "Delicious vegan recipes for healthy living.", category: "food" },
        { id: 23, title: "Best Budget Travel Tips", author: "Michael Adams", description: "How to travel on a budget.", category: "travel" },
        { id: 24, title: "Stock Market Basics", author: "Sarah Parker", description: "Introduction to investing in the stock market.", category: "finance" },
        { id: 25, title: "React Design Patterns", author: "Sophia Martinez", description: "Common design patterns used in React development.", category: "code" },
        { id: 26, title: "Unit Testing in Next.js", author: "Chris Thomas", description: "Writing unit tests for Next.js components.", category: "code" },
        { id: 27, title: "Best Hair Care Products", author: "James Carter", description: "Top-rated hair care products for all hair types.", category: "beauty" },
        { id: 28, title: "Meditation for Beginners", author: "Emma Scott", description: "A guide to meditation and mindfulness.", category: "health" },
        { id: 29, title: "How to Start a Fashion Brand", author: "Daniel White", description: "Steps to launch your own fashion brand.", category: "fashion" },
        { id: 30, title: "Personal Development Strategies", author: "Emily Brown", description: "Techniques to improve personal growth and productivity.", category: "self-improvement" },
        { id: 31, title: "React and TypeScript", author: "Emily Brown", description: "How to use TypeScript with React effectively.", category: "code" },
        { id: 32, title: "Best Streetwear Brands", author: "James Carter", description: "Top streetwear brands to check out.", category: "fashion" },
        { id: 33, title: "Yoga for Stress Relief", author: "Sophia Adams", description: "How yoga can help reduce stress and improve well-being.", category: "health" },
        { id: 34, title: "How to Start Investing", author: "Daniel Parker", description: "A beginner’s guide to investing money wisely.", category: "finance" },
        { id: 35, title: "Photography Gear for Beginners", author: "Michael Brown", description: "Essential photography equipment for new photographers.", category: "photography" }
      ];
      

    return NextResponse.json(blogs);
}