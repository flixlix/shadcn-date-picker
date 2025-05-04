import { promises as fs } from "fs"
import { Octokit } from "octokit"

export async function fetchRepoContent(path: string | null) {
  if (!path)
    return Response.json({ error: "Path is required" }, { status: 400 })

  if (process.env.NODE_ENV !== "production") {
    const content = await fs.readFile(path, "utf-8")
    return Response.json({ response: { data: { content: btoa(content) } } })
  }
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "flixlix",
      repo: "shadcn-date-picker",
      path,
    }
  )

  return Response.json({ response })
}
