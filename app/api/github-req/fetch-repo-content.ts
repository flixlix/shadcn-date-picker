import { Octokit } from "octokit"

export async function fetchRepoContent(path: string | null) {
  if (!path)
    return Response.json({ error: "Path is required" }, { status: 400 })

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
