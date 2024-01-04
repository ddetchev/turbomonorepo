import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/macro";

const apiKey = "YTlhMzY0Y2M4MTZkNDNiMWFlYjM5YjY2ZGNhNDI4YTktMTcwMjg3NjYyOQ==";

export async function GET() {

    const videoID = "360cd4c3de42415c9aa17e2ed63e8a27";

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': apiKey
        }
      };
      
    const res = await fetch(`https://api.heygen.com/v1/video_status.get?video_id=${videoID}`, options)
        
    const result = await res.json();

    return NextResponse.json(result)
}