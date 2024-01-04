'use client';

import { useState, useEffect } from "react";

const BASE_URL = "https://api.heygen.com";
const apiKey = "YTlhMzY0Y2M4MTZkNDNiMWFlYjM5YjY2ZGNhNDI4YTktMTcwMjg3NjYyOQ==";



export default function Talks() {
    const [vidUrl, setVidUrl] = useState('')
    const [isLoading, setLoading] = useState(true)

    // const videoID = "d8c3fab122b8458b95ca61dec8be956f"
    const videoID = "360cd4c3de42415c9aa17e2ed63e8a27";

    useEffect(() => {
        
          
          fetch("/api", {
            headers: {
              Accept: "application/json",
              method: "GET"
            }
          })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setLoading(false)
                setVidUrl(response.data.video_url)
                console.log(`This is the URL: ${vidUrl}`)
            })
            .catch(err => console.error(err));
    }, [])

    if (isLoading) return <p>Loading .....</p>
    

    return (
        <div>
          <section className="flex justify-around items-center mt-5">
            <article className="">
              <h3 className="font-space font-bold">Agustin N. R. Ramirez</h3>
              <h5 className="font-space">Frontend Developer</h5>
            </article>
            <video
              height={512}
              width={512}
              src={vidUrl ? vidUrl : ""}
              autoPlay
              controls
            ></video>
          </section>
        </div>
      );
}

