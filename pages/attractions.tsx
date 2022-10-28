import React from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import AttractionCard from '../components/AttractionCard'
import Link from 'next/link'
import SlideDot from '../components/Dots/SlideDot'

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9r7n6ix1sqc01te94n45g0d/master")

const QUERY = gql`
{
  attractions {
    id,
    title,
    slug,
    description,
    coverPhoto {
      url,
    }
  }
}
`

export async function getStaticProps() {
  const {attractions} = await graphcms.request(QUERY)
  return {
    props: {
      attractions,
    },
  }
}

const Attractions = ({attractions}: any) => {
  return (
      <div className='pb-8 sm:pb-0'>
        {/* attraction list */}
        <div className='flex-col-8 sm:gap-0'>
          {attractions.map(({id, title, description, coverPhoto, slug}: any) => (
              <div 
                id={slug} 
                key={id} 
                className="flex-col-8 justify-center sm:h-screen"
              >
                  <AttractionCard
                      title={title}
                      description={description.split(".").slice(0, 1).concat(".")}
                      coverPhoto={coverPhoto}
                      slug={slug}
                  />
                  <Link 
                    className='body-link' 
                    href={"/places/" + slug}
                  >
                      Go to post
                  </Link>
              </div>
          ))}
        </div>

        {/* slide dots */}
        <div className='fixed right-8 top-[40%] flex-col lg:bottom-16 flex gap-8 self-center'>
          {attractions.map(({id, slug}: any) => (
              <Link
                key={id}
                href={`#${slug}`}
              >
                <SlideDot />
              </Link>    
          ))}  
        </div>
      </div>   
  )
}

export default Attractions