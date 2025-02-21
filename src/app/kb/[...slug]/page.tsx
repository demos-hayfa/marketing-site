import {groq} from 'next-sanity'
import urlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import {sanity} from '../../../api/sanity'
import Header from '../../../../components/Header'
import TableContent from '../../../../components/TableContent'
import { AiFillFile } from 'react-icons/ai'
import {CodeComponent} from '../../../../components/CodeComponent'
import {ImageComponent} from '../../../../components/ImageComponent'
import { HighlightComponent } from '../../../../components/HighlightComponent'
import { Badge } from "@/components/ui/badge"
import Socials from "../../../../components/Socials"
import Likee from "../../../../components/Likee"
import Suggestions  from "../../../../components/Suggestions"
import { Button } from "@/components/ui/button"
import {BaseDefaultIconWidth, AiFillStarIcon, AiFillLikeIcon} from "../../../../components/icons/BaseDefaultIcon";
const urlFor = (source:any) =>
  urlBuilder(sanity)
    .image(source)
    .width(1200)
    .url()

export const generateStaticParams = async () => {
  const data = await sanity.fetch(groq`
   *[_type == 'kbDoc']{
    "slug": slug.current
   }
  `)
  return data.map(((e:StaticParams) => ({slug: [e.slug]})))
}


const blameDiff = async (slug:any) => {
  return new Promise((resolve, reject) => {
    import('simple-git').then((git:any) => {
      git().log().then((res:any) => {
        let arr = res.latest.refs.split(' ')

        let hash = arr[0]
        let fileArr = [
          '--first-parent',
          hash,
          '--author-date-order',
          '-p',
          '-S',
          `"${slug.join('/')}"`,
          '--source'
        ]

        git().raw(['log', ...fileArr]).then((res:any) => {
           resolve(res)
        }).catch((err:any) => {
          reject(err)
        })
      })

    }).catch((err:any) => {
      reject(err)
    })
  })

}

type StaticParams = {
  slug: string
}


const itemList = [
  {
    title: "We've just published a definitive guide to Vercel and Next.js",
    desc: 'We look at Vercel and how their Next.js framework has changed the face of JavaScript development...',
    linkTo: '/',
    type: 'article',
    icon: <AiFillFile fill={BaseDefaultIconWidth.gray} width={5} height={5} />
  },
  {
    title: 'Compare Nextjs and Vercel hosting providers',
    desc: 'Compare Hosting Providers - Vercel vs Netlify vs AWS vs Google Cloud Platform vs Amazon Web Services',
    linkTo: '/',
    type: 'comparsion',
    icon: <AiFillStarIcon fill={BaseDefaultIconWidth.gold} width={5} height={5} />
  },
  {
    title: 'Vercel Authoring and Maintaining a Diverse Set of APIs',
    desc: 'Making API-based tools to support diverse client teams without bloating existing backend services while also simplifying onboarding...',
    linkTo: '/',
    type: 'guide',
    icon: <AiFillLikeIcon fill={BaseDefaultIconWidth.blue} width={5} height={5} />
  }
]
export const revalidate = 10
export default async function Page({params}: {params: { slug: string[] }}) {
  const fetchData = async () => {

    const data = await sanity.fetch(query, {slug: `/${params.slug.join('/')}`})
    // Handle the case when 'categories' is null or undefined
    const suggestionsQuery = `*[defined(categories[]->.title) && "${data?.categories?.[0]?.title}" in categories[]->.title && _id != "${data?._id}"]  { "slug": slug.current, name, "banner":banner{...asset->{url}}, excerpt,img alt, highlight{kpi1,kpi2,kpi3}} | order( like desc) [0..2]`

    // Run the second query only if 'categories' is not null or undefined
    let suggestions = []
    if (data?.categories && data?.categories.length > 0) {
      suggestions = await sanity.fetch(suggestionsQuery, {slug: `/${params.slug.join('/')}`})
    }

    return {data, suggestions}
  }

  const fetchFooterData = async () => {
    const res = await blameDiff(params.slug)

    return (res as string).slice((res as string).indexOf('author') + 7, (res as string).indexOf('Begin By:'))
  }

  fetchFooterData().then((res) => {
    return res
  })

  const [{data: data}, {suggestions: suggestions}] = await Promise.all([
    fetchData(),
    fetchFooterData()
  ])
  return (
    <>
      <section className='border-b dark:border-b-neutral-700'>
        <div className='border-b dark:border-b-neutral-700 pb-5'>
          <div
            className='pt-12 pr-12 w-full md:w-[calc(90%)] lg:w-[calc(100%-280px)] '
            style={{
              minHeight: '100vh'
            }}
          >
            <div className='markdown whitespace-normal'>
              <Header
                title={`Building a whitelabel product with Vercel`}
                tags={[
                  {
                    display_name: 'Vercel',
                    url: '/'
                  }
                ]}
                description={`Whitelabel apps don't need to be white.`}
              />
              <div className='print:hidden'>
                <TableContent />
              </div>
              <PortableText
                value={(data || {}).body}
                components={{
                  types: {
                    code: CodeComponent,
                    image: ImageComponent,
                    Highlights: HighlightComponent
                  }
                }}
              />
            </div>
            <div className='pt-8 pb-12 border-t mt-8 border-t-neutral-200 dark:border-t-neutral-700 mt-28 pb-16'>
              <div className='hidden lg:grid timestamp-component grid-cols-2 max-w-full pr-12 b-24 lg:pb-0 gap-10 xl:grid-cols-[240px,_1fr]'>
                <footer className='col-span-2'>
                  <div className='flex justify-between items-center mb-4'>
                    <div className='block shrink-0 h-fit'>
                      <h4>
                        <span className='text-sm text-nuiteral-300 pl-4'>Updated by: </span>
                      </h4>
                      <span className='text-sm pl-2 text-secondary-500 font-bold'>{fetchFooterData()}</span>
                    </div>
                    <Socials />
                  </div>
                  <p className='pb-4 text-sm pr-1 col-span-4 text-lnuetral-600'>
                    Last updated at Tue, 12 Mar 2023 09:11:57 GMT
                  </p>

                  <Likee />
                </footer>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col pr-12 w-full md:w-[calc(90%)] mt-8 lg:w-[calc(100%-280px)] gap-y-6 pb-16'>
          <Badge>Knowledge Base</Badge>
          <h3 className='font-extralight text-3xl'>
            We’ve just published a definitive guide to Vercel and Next.js
          </h3>
          <p className='text-xl opacity-80'>
            We look at Vercel and how their Next.js framework has changed the face of JavaScript
            development...
          </p>
          <div className='flex gap-x-6'>
            {data.stacks.map((type: any, index: any) => (
              <img alt={type.title} key={index} width={40} src={urlFor(type.image)} />
            ))}
          </div>
          <div className='flex gap-4 flex-wrap'>
            <Button className="h-10 rounded-[16px] px-5 text-[15px] font-bold">Read guide</Button>
            <Button className="h-10 rounded-[16px] px-5 text-[15px] font-bold outline- secondary kit">View use case</Button>
          </div>
        </div>

        <div className='bg-neutral-200 px-6 w-[calc(100%+3px)] lg:-ml-36 py-10 dark:bg-neutral-950'>
          <Suggestions parameter={itemList} />
        </div>
      </section>
    </>
  )
}

export const query = groq`*[_type == 'kbDoc' && "/kb" + slug.current == $slug][0]{
  body,
  title,
  categories[] -> {title, "slug":slug.current},
  highlights[] -> {highlight}
}`