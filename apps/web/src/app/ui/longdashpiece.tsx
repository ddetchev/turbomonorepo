import Image from "next/image"

export default function LongDashPiece( { sessionName, sessionImage } : any ) {

    return (

        <div className="rounded-lg longdashpiece">
            <div style={{['position' as any] : 'relative', ['height' as any] : '100%'}}>
            <div className="longdashflex">
            <h1 className="font-bold text-xl" style={{['paddingLeft' as any] : '1rem', ['paddingTop' as any] : '1rem'}}>{`Your upcoming session with ${sessionName}.`}</h1>
            <p className="text-xs" style={{['paddingLeft' as any] : '1rem', ['paddingTop' as any] : '1rem'}}>Review for your upcoming session:</p>
            </div>
            <div style={{['position' as any] : 'absolute', ['bottom' as any] : '0px', ['right' as any] : '0px', ['maxWidth' as any] : '40%'}}>
                <Image src = {sessionImage} alt="It's Dath." width={220} height={300}></Image>
            </div>
            
        </div>
        </div>
        

    )

}