import React, { useState, useEffect } from "react"
import { createClient } from "contentful"
import {client} from "contentful"

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

async function fetchJobPosts() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items.map(({ fields }) => fields)
    console.log(`Error getting Entries for ${contentType.name}.`)
}

function HomePage() {
    const [jobPosts, setJobPosts] = useState([])

    useEffect(() => {
        async function getJobPosts() {
            const posts = await fetchJobPosts()
            setJobPosts([...posts])
        }

        getJobPosts()
    }, [])

    return (
        <div>
            <h1>My Job Board</h1>
            {jobPosts.map(job => (
                <div>
                    <img src={job.companyImage} />
                    <a href={job.link}>
                        {job.title} - {job.company}
                    </a>
                    <p>{job.location}</p>
                    <p>{job.createdAt}</p>
                </div>
            ))}
        </div>
    )
}

export default HomePage