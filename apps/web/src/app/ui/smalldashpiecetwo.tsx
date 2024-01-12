import { FaGlobe } from "react-icons/fa"

export default function SmallDashPieceTwo( { dashsection, dashsectiontext } : any) {

    return (

        <div className="rounded-lg bg-orange-100 smalldashpiece">
            <div style={{['padding' as any] : '1.2rem'}}>
                <FaGlobe size={24} />
            </div>
            <h1 style={{['paddingLeft' as any] : '1.2rem'}} className="text-lg font-bold">{dashsection}</h1>
            <p style={{['paddingLeft' as any] : '1.2rem', ['paddingRight' as any] : '1.2rem', ['paddingTop' as any] : '.5rem'}} className="text-xs">{dashsectiontext}</p>

        </div>

    )

}