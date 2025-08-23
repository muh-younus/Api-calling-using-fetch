"use client"

import { useEffect, useState } from "react"
import { useGlobalContext } from "./context"
import { Card } from "primereact/card"
import "../index.css"

const ApiCalling = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [card, setCard] = useState(1)


  const contextValue = useGlobalContext()
  const url = "https://hn.algolia.com/api/v1/search_by_date?query=html"

  // using fetch function to get data from API
  const fetchData = async (api) => {
    setLoading(true) // ✅ start loading
    try {
      const res = await fetch(api)
      const data = await res.json()
      console.log("The response is: ", data)

      setNews(data.hits)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false) // ✅ stop loading
    }
  }

  // calling function using useEffect
  useEffect(() => {
    fetchData(url)
  }, [])

  console.log("The news data is: ", news)

  return (
    <div className="flex p-3 flex-col items-center text-yellow-500 justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
      {loading ? (
        // ✅ Loading Spinner
        <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center" disabled>
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
          </svg>
          Processing...
        </button>
      ) : (
        <div className="grid grid-cols-3 gap-5 p-5">
          {news.slice(0,6).map((item) => (
            <div key={item.objectID} className="w-[370px] h-[200px] hover:scale-105 transition-transform overflow-hidden">
              <Card title={item.author}>
                <p className="m-0">{item.story_title}</p>
                <p className="m-0 flex justify-end">StoryID: {item._tags?.[2]}</p>
                <p className="m-0 text-blue-300"><a href="#">{item.created_at_i}</a></p>
              </Card>
            </div>
          ))}

          <button>Next</button>
        </div>
      )}
    </div>
  )
}

export default ApiCalling
