import { fetchRepoContent } from "./fetch-repo-content"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get("path")
  return await fetchRepoContent(path)
}
