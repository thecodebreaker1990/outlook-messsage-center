import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import MessageCenterCardItem from './MessageCenterCardItem';
import MessageCenterCardDetails from './MessageCenterCardDetails';

import { sortRecrodsByDate, groupRecordsByDate } from '../utils/dateTimeFunctions';

function MessageCenter() {
  const [messages, setMessages] = useState([
    {
      record_id: '100',
      master_table_name: 'epp1',
      extra_param: {
        key: 'This is extra parameters array which can be used in future'
      },
      message_en: 'The following PPE have been delivered',
      message_es: 'Se han entregado los siguientes EPP',
      desc_en: 'Your signature is required, as evidence of the successful delivery of (3 FAJA)',
      desc_es: 'Su firma es requerida, como evidencia de la entrega satisfactoria de (3 FAJA)',
      date_of_reminder: '2023-05-08',
      date_of_completion: '2023-05-08',
      responsible_person: '07 ALBERTO VILLA ROMERO',
      reviewer_person: '07 ALBERTO VILLA ROMERO',
      status: '2'
    }
  ]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const mockData = generateMockData();
    const sortedMockData = sortRecrodsByDate(mockData, 'date_of_reminder');
    setMessages(sortedMockData);
    setSelectedMessage(sortedMockData[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Generate 20 more mock data objects and update the state
  const generateMockData = () => {
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

  const onSelectedMessage = (messageID) => {
    const message = messages.find((msg) => msg.record_id === messageID);
    setSelectedMessage(message);
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
          width: '25%',
          height: '100%',
          overflowY: 'auto',
          backgroundColor: '#fff',
          borderRight: '1px solid #ccc'
        }}
      >
        <Box sx={{ position: 'absolute', right: '10px', top: '10px' }}>
          <RefreshIcon />
        </Box>
        {Array.from(groupedMessages).map(([dateKey, messages]) => {
          return (
            <Box key={dateKey} sx={{ my: 1 }}>
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
                  onSelect={() => onSelectedMessage(msg.record_id)}
                />
              ))}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ flexGrow: 1, minWidth: 0, maxWidth: '75%', p: 2, overflowY: 'auto' }}>
        <MessageCenterCardDetails />
      </Box>
    </Box>
  );
}
export default MessageCenter;
