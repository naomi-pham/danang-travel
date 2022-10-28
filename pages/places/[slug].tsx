import React from 'react'
import {GraphQLClient, gql} from "graphql-request"
import AttractionCard from '../../components/AttractionCard'
import Link from 'next/link'

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9r7n6ix1sqc01te94n45g0d/master")


const QUERY = gql`
    query Attractions($slug: String!){
        attractions(where: {slug: $slug}){
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

const SLUGLIST = gql`
    {
        attractions{
            slug
        }
    }
`

export async function getStaticPaths() {
    const {attractions} = await graphcms.request(SLUGLIST)
    return {
        paths: attractions.map(({slug}: any) => ({params: {slug: slug}})),
        fallback: false,
    }
}

export async function getStaticProps({params}: any) {
    const slug = params.slug
    const data = await graphcms.request(QUERY, {slug})
    const attraction = data.attractions
    
    // console.log(attraction)
    return {
        props: {
            attraction,
        },
    }
}

type Props = {}

const AttractionPost = ({attraction}: any) => {
  return (
    <div className='pb-8 sm:pb-0 sm:pt-24 lg:pt-44'>
        {attraction.map(({id, title, description, coverPhoto}: any) =>(
            <div key={id} className="flex-col-8">
                <AttractionCard
                    title={title}
                    description={description}
                    coverPhoto={coverPhoto}
                />
                <div className='flex place-content-between'>
                    <Link
                        href={"/"}
                        className='body-link'
                    >
                        Back home 
                    </Link>
                    <Link
                        href={"/attractions"}
                        className='body-link'
                    >
                        See all attractions
                    </Link>       
                </div>             
            </div>
        ))}
    </div>
  )
}

export default AttractionPost