import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './timeline.css';
import { Typography } from '@material-ui/core';
import { Build, Home, People, School } from "@material-ui/icons";

const Timeline = () => {
  const iconsMap = {
    home: <Home className="z-index-3" style={{zIndex:5}}/>,
    people: <People className="z-index-3" style={{zIndex:5}}/>,
    school: <School className="z-index-3" style={{zIndex:5}}/>,
    build: <Build className="z-index-3" style={{zIndex:5}}/>,
  }

  const data = [
    {
      title: 'TietoEVRY user management project',
      subtitle: 'Opintoihin kuuluva projekti',
      date: '01/2022 ->',
      order: 1,
      iconName: 'school',
      background: '#2978b5',
      foreground: '#fff',
      html: 'Angular, C#, TypeScript'
    },
    {
      title: 'Lapin ammattikorkeakoulu',
      subtitle: '120 / 240 op (ka 4.28)',
      date: '01/2020 ->',
      order: 10,
      iconName: 'school',
      background: '#2978b5',
      foreground: '#fff',
      html: 'Tieto- ja viestintätekniikan insinööri'
    },
    {
      title: 'Asumisen ohjaaja',
      subtitle: 'Kolpeneen palvelukeskus',
      date: '11/2018 ->',
      order: 2,
      iconName: 'home',
      background: '#7e7e7e',
      foreground: '#fff',
      html: 'Pitempiä sijaisuuksia ja keikkatöitä, erilaisissa\n' +
        'kehitysvammaisten yksiköissä.'
    },
    {
      title: 'Rakennusmies',
      subtitle: 'Pallas rakennus',
      date: '06/2018 - 07/2018',
      order: 3,
      iconName: 'build',
      background: '#1b1b1c',
      foreground: '#fff',
      html: 'Rakennuksen viimeistelyvaiheen työt. As Oy Loimu.'
    },
    {
      title: 'Rakennusmies',
      subtitle: 'SSR Lappi',
      date: '06/2017 - 07/2017',
      order: 4,
      iconName: 'build',
      background: '#1b1b1c',
      foreground: '#fff',
      html: 'Eristys- ja raudoitustyöt. As Oy Loimu.'
    },
    {
      title: 'Harjoittelija',
      subtitle: 'Skanska talonrakennus Oy',
      date: '06/2016 - 06/2016',
      order: 5,
      iconName: 'build',
      background: '#1b1b1c',
      foreground: '#fff',
      html: 'Koneiden ja laitteiden asennusaputyöt. As Oy Majakka.'
    },
    {
      title: 'Ounasvaaran lukio / REDU',
      subtitle: 'Kaksoistutkinto lukio / lähihoitaja',
      date: '08/2015 - 05/2019',
      order: 8,
      iconName: 'school',
      background: '#2978b5',
      foreground: '#fff',
      html: ''
    },
  ];
  return (
    <VerticalTimeline>
      { data.map((item) => (
          <VerticalTimelineElement
            key={ item.order }
            date={ item.date }
            iconStyle={ {
              background: item.background,
              color: item.foreground,
            } }
            icon={ iconsMap[item.iconName] }
          >
            <Typography variant='h5' className='vertical-timeline-element-title'>
              { item.title }
            </Typography>
            <Typography variant='h6' className='vertical-timeline-element-subtitle'>
              { item.subtitle }
            </Typography>
            {/* eslint-disable-next-line react/no-danger */ }
            <div dangerouslySetInnerHTML={ { __html: item.html } }/>
          </VerticalTimelineElement>
        )) }
    </VerticalTimeline>
  );
};

export default Timeline;