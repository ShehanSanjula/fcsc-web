import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { GiSpeaker } from 'react-icons/gi'
import QAComponent, { QAProps } from '../common/QA/QAComponent'

interface AnnouncementProps {
  title: string
  announcments: Array<QAProps>
}

export default function Announcements(props: AnnouncementProps): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <section
      className="flex flex-col md:flex-row justify-center items-center"
      data-aos="fade-up"
    >
      <div className="flex flex-col py-10 w-10/12 px-1 md:px-3">
        <div className="flex flex-col md:flex-row pb-4 md:pb-0 items-center text-2xl font-semibold md:text-left text-center mb-10 bg-gray-100 rounded-lg shadow-noOffset_lighter">
          <GiSpeaker size={70} className="mx-5" />
          <div>
            <span className="underline">{props.title.split(' ')[0]}</span>
            <span>{' ' + props.title.split(' ')[1]}</span>
          </div>
        </div>
        <div className="bg-gray-100 px-8 md:px-12 md:px-24 py-4 pt-7 rounded-lg shadow-noOffset_lighter">
          <div className="w-full md:w-1/2">
            {props.announcments.map((announcement) => {
              return (
                <QAComponent
                  title={announcement.title}
                  body={announcement.body}
                  key={announcement.title + announcement.body}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
