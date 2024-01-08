import Link from 'next/link';

export default function TopTopNav() {

    return (

        <div className='flexcontainer'>

            <p className='gray text-xs hover:text-white' style={{['padding-right' as any] : '4rem'}}>CHANGE VIEW</p>
            <p className='white' style={{['padding-right' as any] : '2rem'}}>Grid</p>
            <p className='gray hover:text-white' style={{['padding-right' as any] : '15rem'}}>List</p>
            <p className='gray text-xs hover:text-white' style={{['padding-right' as any] : '5rem'}}>TYPE</p>

            <Link href="/all">
                <p className="white" style={{['padding-right' as any] : '2rem'}}>All</p>
            </Link>

            <Link href="/direction">
                <p className="gray hover:text-white" style={{['padding-right' as any] : '2rem'}}>Art Direction</p>
            </Link>

            <Link href="/production">
                <p className="gray hover:text-white" style={{['padding-right' as any] : '2rem'}}>Production</p>
            </Link>

            <Link href="/identity">
                <p className="gray hover:text-white" style={{['padding-right' as any] : '2rem'}}>Brand Identity</p>
            </Link>

            <Link href="/web">
                <p className="gray hover:text-white" style={{['padding-right' as any] : '2rem'}}>Web</p>
            </Link>

            <Link href="/management">
                <p className="gray hover:text-white">Social Media Management</p>
            </Link>

        </div>

    )

}