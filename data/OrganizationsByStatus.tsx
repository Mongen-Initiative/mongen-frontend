import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function getOrganizationsByStatus(status: string) {
  const {
    data,
    mutate,
    error,
  } = useSWR(
    `${process.env.mongenCore}/api/v1/organizations/status/${status}`,
    fetcher
  )

  const loading = !data && !error
  const noData = !data

  return { loading, noData, organizations: data, mutate }
}
