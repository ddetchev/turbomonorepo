export default function LongDashPiece() {

    return (

        <div className="rounded-lg longdashpiece">
            <div style={{['position' as any] : 'relative', ['height' as any] : '100%'}}>
            <div className="longdashflex">
            <h1 className="font-bold text-xl" style={{['paddingLeft' as any] : '1rem', ['paddingTop' as any] : '1rem'}}>Your upcoming session with Dath.</h1>
            <p className="text-xs" style={{['paddingLeft' as any] : '1rem', ['paddingTop' as any] : '1rem'}}>Review for your upcoming session:</p>
            </div>
            <div style={{['position' as any] : 'absolute', ['bottom' as any] : '0px', ['right' as any] : '0px', ['maxWidth' as any] : '40%', }}>
                <img src = "/dath.png"></img>
            </div>
        </div>
        </div>
        

    )

}