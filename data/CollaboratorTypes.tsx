import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function getCollaboratorTypes() {
  const {
    data,
    mutate,
    error,
  } = useSWR(
    `${process.env.mongenCore}/api/v1/collaborators/type`,
    fetcher
  )

  const loading = !data && !error
  const noData = !data

  return { loading, noData, collaborator_types: data, mutate }
}
