import Image from "next/image"

export default function SmallDashPiece() {

    return (

        <div style={{['position' as any] : 'relative'}} className="rounded-lg bg-orange-100 smalldashpiece">

            <h1 style={{['padding' as any] : '1rem'}} className="text-lg font-bold text-center">Real-time feedback engine</h1>
            <p style={{['paddingBottom' as any] : '1rem'}} className="text-center text-xs">Learn more.</p>
            <p className="text-center text-xs">You will learn more.</p>
            <Image src="/hands.png" alt = "hands" width={280} height={150} style={{['bottom' as any] : '0px', ['position' as any] : 'absolute'}} />

        </div>

    )

}