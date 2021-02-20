import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function getCollaborators(org_id) {
  const {
    data,
    mutate,
    error,
  } = useSWR(
    `${process.env.mongenCore}/api/v1/collaborators/organization_id${org_id}`,
    fetcher
  )

  const loading = !data && !error
  const noData = !data

  return { loading, noData, collaborators: data, mutate }
}
