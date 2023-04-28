import Image from 'next/image'
import Link from 'next/link';

const Eventspage=({data}) =>{
    return(
        <div div  className='events_page'>
            <h1>Events Pages</h1>
            

          {data.map((ev)=>(
            <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
            <a className='card' >
              <Image  src={ev.image} alt={ev.title} width={400} height={400} />
              <h2>{ev.title}</h2>
            </a>
            </Link>
          ))}

      
            
        </div>
    )
}

export default Eventspage;