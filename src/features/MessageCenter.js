import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import MessageCenterCardItem from './MessageCenterCardItem';
import MessageCenterCardDetails from './MessageCenterCardDetails';
import MessageCenterCarditemSkeleton from './MessageCenterCarditemSkeleton';
import MessageCenterCardDetailsSkeleton from './MessageCenterCarditemDetailsSkeleton';

import { sortRecrodsByDate, groupRecordsByDate } from '../utils/dateTimeFunctions';
import { sleep } from '../utils/others';

// const message = {
//     record_id: '100',
//     master_table_name: 'epp1',
//     extra_param: {
//       key: 'This is extra parameters array which can be used in future'
//     },
//     message_en: 'The following PPE have been delivered',
//     message_es: 'Se han entregado los siguientes EPP',
//     desc_en: 'Your signature is required, as evidence of the successful delivery of (3 FAJA)',
//     desc_es: 'Su firma es requerida, como evidencia de la entrega satisfactoria de (3 FAJA)',
//     date_of_reminder: '2023-05-08',
//     date_of_completion: '2023-05-08',
//     responsible_person: '07 ALBERTO VILLA ROMERO',
//     reviewer_person: '07 ALBERTO VILLA ROMERO',
//     status: '2'
//   };

function MessageCenter() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const targetRef = useRef(null);

  useEffect(() => {
    fetchData();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        // Options (Optional)
        root: null, // null means it observes the viewport
        rootMargin: '0px',
        threshold: 0.5 // The observer will trigger when at least 50% of the target is visible
      }
    );
    observer.observe(targetRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      console.log('Load more messages now');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  const fetchData = async () => {
    try {
      setIsFetching(true);
      const mockData = await generateMockData();
      const sortedMockData = sortRecrodsByDate(mockData, 'date_of_reminder');
      setMessages(sortedMockData);
      setSelectedMessage(sortedMockData[0]);
    } finally {
      setIsFetching(false);
    }
  };

  // Generate 20 more mock data objects and update the state
  const generateMockData = async () => {
    await sleep(2000);
    const newMessages = [...messages];

    for (let i = 1; i <= 20; i++) {
      newMessages.push({
        record_id: `${100 + i}`,
        master_table_name: `epp${i + 1}`,
        extra_param: {
          key: `This is extra parameters array for item ${i + 1}`
        },
        message_en: `The following PPE have been delivered ${i + 1}`,
        message_es: `Se han entregado los siguientes EPP ${i + 1}`,
        desc_en: `Your signature is required, as evidence of the successful delivery of (${
          i + 3
        } FAJA)`,
        desc_es: `Su firma es requerida, como evidencia de la entrega satisfactoria de (${
          i + 3
        } FAJA)`,
        date_of_reminder: `2023-05-${(i % 5) + 1 + 8}`,
        date_of_completion: `2023-05-${(i % 5) + 1 + 8}`,
        responsible_person: `07 ALBERTO VILLA ROMERO ${i}`,
        reviewer_person: `07 ALBERTO VILLA ROMERO ${i}`,
        status: `${(i % 3) + 1}`
      });
    }

    return newMessages;
  };

  const groupedMessages = groupRecordsByDate(messages, 'date_of_reminder');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: {
            lg: '35%', // On 1280px width, make it 35%
            xl: '30%', // On 1366px width, make it 30%
            xxl: '25%' // On 1920px width and above, make it 25%
          },
          height: '100%',
          overflowY: 'auto',
          backgroundColor: '#fff',
          borderRight: '1px solid #ccc'
        }}
      >
        <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
          <RefreshIcon />
        </Box>
        <Box sx={{ my: 2 }}>
          {!isFetching && messages.length > 0 ? (
            Array.from(groupedMessages).map(([dateKey, messages], idx) => {
              return (
                <Box key={dateKey} sx={idx > 0 ? { my: 1 } : null}>
                  <Typography variant="body2" color="text.primary" sx={{ ml: 1, mb: 1 }}>
                    {dateKey}
                  </Typography>
                  {messages.map((msg) => (
                    <MessageCenterCardItem
                      key={msg.record_id}
                      reviewer={msg.reviewer_person}
                      message={msg.message_es}
                      desc={msg.desc_es}
                      date={msg.date_of_completion}
                      isSelected={selectedMessage && selectedMessage.record_id === msg.record_id}
                      isUnread={msg.status < 3}
                      onSelect={() => setSelectedMessage(msg)}
                    />
                  ))}
                </Box>
              );
            })
          ) : (
            <Box ref={targetRef}>
              <MessageCenterCarditemSkeleton />
              <MessageCenterCarditemSkeleton />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          maxWidth: {
            lg: '65%', // On 1280px width, make it 65%
            xl: '70%', // On 1366px width, make it 70%
            xxl: '75%' // On 1920px width and above, make it 75%
          },
          p: 2,
          overflowY: 'auto'
        }}
      >
        {isFetching && selectedMessage === null ? (
          <MessageCenterCardDetailsSkeleton />
        ) : (
          <MessageCenterCardDetails selectedMessage={selectedMessage} />
        )}
      </Box>
    </Box>
  );
}
export default MessageCenter;
