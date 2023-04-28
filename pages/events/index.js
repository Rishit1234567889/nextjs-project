// import Image from 'next/image'
// import Link from 'next/link';
import Eventspage from '../../src/components/events/events-page';


const eventspage =({data})=>{
  return(
    <Eventspage data={data} />
  )

}

export default eventspage;

export async function getStaticProps() {

  const {events_categories} = await import('../../data/data.json');
  console.log(events_categories);
  

  return {
    props:{
      // data:{events_categories},
      data: JSON.parse(JSON.stringify(events_categories)) 

    },
  };
}