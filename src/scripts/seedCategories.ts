import { db } from "@/db";
import { categories } from "@/db/schema"


const categoryNames = [
    "Cars & Vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Film & Animation",
    "How-to & Style",
    "Music",
    "News & Politics",
    "People & Blogs",
    "Pets & Animals",
    "Science & Technology",
    "Sports",
    "Travel & Events"
]

async function main() {
    console.log("Seeding Categories...")

    try{

        const values = categoryNames.map((name) =>({
            name,
            description: `Videos relates to ${name.toLowerCase()}`,
        }))

        await db.insert(categories).values(values)

        console.log("Categories Seeded")

    } catch(error) {

        console.error("Error Seeding Categories:", error);
        process.exit(1)

    }
}

main();