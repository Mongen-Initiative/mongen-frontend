import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export default function getCountries() {
  const {
    data,
    mutate,
    error,
  } = useSWR(
    `${process.env.mongenCore}/api/v1/countries`,
    fetcher
  )

  const loading = !data && !error
  const noData = !data

  return { loading, noData, countries: data, mutate }
}
