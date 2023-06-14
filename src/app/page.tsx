"use client"
import { useState, useMemo } from "react"
import uniqBy from "lodash/uniqBy"

interface Result {
  timestamp: number
  executionTime?: number
  address?: {
    street: string
    city: string
    state: string
  }
}

export default function Home() {
  const [results, setResults] = useState<Result[]>([])

  const fetchLocation = async () => {
    const timestamp = Date.now()

    setResults(results => ([
      {
        timestamp
      },
      ...results
    ]))

    const response = await fetch("/api/location")
    const data = await response.json()

    setResults(results => (uniqBy([
      {
        timestamp,
        ...data
      },
      ...results
    ], 'timestamp')))
  }

  const resultsTable = useMemo(() => {
    let locations = results.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)

    return locations.map(({ timestamp, address, executionTime }) => (
      <tr key={timestamp}>
        {!executionTime ? (
          <td>Loading...</td>
        ) : (
          <>
            <td>{timestamp}</td>
            <td>{address?.street}</td>
            <td>{address?.city}</td>
            <td>{address?.state}</td>
            <td>{executionTime}</td>
          </>
        )}
      </tr>
    ))
  }, [results])

  return (
    <main>
      <button onClick={fetchLocation}>Fetch Location</button>

      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Execution Time</th>
          </tr>
        </thead>
        <tbody>
          {resultsTable}
        </tbody>
      </table>
    </main>
  )
}
