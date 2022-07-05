import React from 'react'
import codeCode from '../assets/codecode-min.jpg'
import PageSection from './PageSection';

const Developer = () => {
  const textInside = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const textRandom = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet ipsum dolor sit amet.'
    },
    {
      id: 2,
      text: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    },
    {
      id: 4,
      text: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ];

  return (
    <PageSection name='Developer Area' title='Developer Area' subtitle={textInside}>
      <div className='flex flex-col items-center justify-center gap-8 lg:flex-row'>
        <div className='lg:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col w-full gap-4'>
          {
            textRandom.map(d => (
              <p key={d.id} className='pl-4 border-l-4 odd:border-tOrange even:border-tBlue'>{d.text}</p>
            ))
          }
        </div>
        <div className='w-full lg:rotate-6 lg:w-1/2 duration-500 hover:rotate-0'>
          <img src={codeCode} alt="Code img" className='shadow-lg shadow-tBlue rounded-lg' />
        </div>
      </div>
    </PageSection>
  )
}

export default Developer