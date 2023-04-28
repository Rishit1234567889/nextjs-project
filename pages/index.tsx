
import { Inter } from 'next/font/google'
import {HomePage} from '../src/components/home/home'

const inter = Inter({ subsets: ['latin'] })

export default function pages({...data}) {
  
  return (
    <>
      
      <HomePage data={data} />
    
      
    </>
  )
} 

//use to fetch data from data folder.

export async function getServerSideProps() {

  const {events_categories} = await import('../data/data.json');
  

  return {
    props:{
      // data:{events_categories},
      data: JSON.parse(JSON.stringify(events_categories)) 

    },
  };
}
