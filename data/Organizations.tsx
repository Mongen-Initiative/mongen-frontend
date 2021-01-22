import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function getOrganizations() {
  const {
    data,
    mutate,
    error,
  } = useSWR(
    `http://localhost:8080/api/v1/organizations`,
    fetcher
  )

  const loading = !data && !error
  const noData = !data

  return { loading, noData, organizations: data, mutate }
}
