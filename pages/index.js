
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import EventList from '@/components/events/event-list'



import { getFeaturedEvents } from '@/helpers/api-util'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Find a lot of great event that allow you to evolve...'/>
      </Head>
      <EventList items={props.events} />
    </div>
  )
}


export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return {
    props : {
      events  : featuredEvents , 
    },
    revalidate : 1800
  }
}