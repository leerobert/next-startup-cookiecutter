import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useShipments () {
  const { data, mutate, error } = useSWR('/api/shipment', fetcher)

  return {
    shipments: data ? data.data : [],
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}
