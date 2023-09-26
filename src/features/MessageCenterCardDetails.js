import { useState, Fragment } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useLanguage } from '../providers/languageProvider';

import FormDrawer from '../components/FormDrawer';

function MessageCenterCardDetails({ selectedMessage }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { language } = useLanguage();
  if (!selectedMessage) {
    return <Typography>No message selected</Typography>;
  }

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const getFormFields = () => {
    const formFields = [
      {
        id: '59',
        device_type: 'mobile',
        module_id_string: 'epp_manager',
        form_code: 'EPP1',
        master_table_name: 'employee_epp_master',
        label_es: 'Fecha y hora',
        label_en: 'Date',
        control_type: 'datetime',
        option_type: 'custom',
        options: '',
        control_order: '0',
        select_master_key: '',
        is_locked: '0',
        is_require: 1,
        cpy_is_require: '1',
        validation: '',
        status: 'Active',
        created: '2022-09-26 09:40:48',
        created_by: '161',
        modified: null,
        modified_by: null,
        tool_tip: 'Fecha y hora',
        content_length: '',
        has_comment_field: '0',
        comment_placeholder: null,
        mapping_table_column_name: null,
        is_use_for_chart: '0',
        field_group: null,
        subform: null,
        its_an_user_list: '0'
      },
      {
        id: '119',
        device_type: 'mobile',
        module_id_string: 'epp_manager',
        form_code: 'EPP1',
        master_table_name: 'employee_epp_master',
        label_es: 'Comprobación',
        label_en: 'Verification',
        control_type: 'dropdown',
        option_type: 'custom',
        options: 'Correcta,Erronea,Verificar,Prueba',
        control_order: '1',
        select_master_key: '',
        is_locked: '0',
        is_require: 1,
        cpy_is_require: '0',
        validation: '',
        status: 'Inactive',
        created: '2022-10-14 15:59:20',
        created_by: '161',
        modified: '2023-01-18 13:12:55',
        modified_by: '161',
        tool_tip: '',
        content_length: '',
        has_comment_field: '0',
        comment_placeholder: '',
        mapping_table_column_name: 'create_byway',
        is_use_for_chart: '1',
        field_group: '',
        subform: '',
        its_an_user_list: '0'
      },
      {
        id: '61',
        device_type: 'mobile',
        module_id_string: 'epp_manager',
        form_code: 'EPP1',
        master_table_name: 'employee_epp_master',
        label_es: 'Observaciones',
        label_en: 'Observations',
        control_type: 'textarea',
        option_type: 'custom',
        options: '',
        control_order: '2',
        select_master_key: '',
        is_locked: '0',
        is_require: 1,
        cpy_is_require: '1',
        validation: '',
        status: 'Active',
        created: '2022-09-26 09:51:14',
        created_by: '161',
        modified: null,
        modified_by: null,
        tool_tip: 'Observaciones',
        content_length: '',
        has_comment_field: '0',
        comment_placeholder: null,
        mapping_table_column_name: null,
        is_use_for_chart: '0',
        field_group: null,
        subform: null,
        its_an_user_list: '0'
      },
      {
        id: '60',
        device_type: 'mobile',
        module_id_string: 'epp_manager',
        form_code: 'EPP1',
        master_table_name: 'employee_epp_master',
        label_es: 'Firma',
        label_en: 'Signature',
        control_type: 'signature',
        option_type: 'custom',
        options: '',
        control_order: '4',
        select_master_key: '',
        is_locked: '0',
        is_require: 0,
        cpy_is_require: '1',
        validation: '',
        status: 'Active',
        created: '2022-09-26 09:41:25',
        created_by: '161',
        modified: '2022-09-27 13:15:50',
        modified_by: '161',
        tool_tip: 'Firma',
        content_length: '',
        has_comment_field: '0',
        comment_placeholder: null,
        mapping_table_column_name: null,
        is_use_for_chart: '0',
        field_group: null,
        subform: null,
        its_an_user_list: '0'
      }
    ];
    return formFields;
  };

  const updatedFormFields = getFormFields().map((field) => {
    // Use the language state to select either English or Spanish label
    const labelKey = language === 'en' ? 'label_en' : 'label_es';
    const { id, [labelKey]: label, control_type: type, is_require: required, options } = field;

    let formFieldInfo = {
      id,
      label,
      type,
      required: Boolean(required)
    };

    let updatedOptions = [];
    if (type === 'dropdown') {
      updatedOptions = options.split(',').map((opt) => ({ value: opt, label: opt }));
      formFieldInfo.options = updatedOptions;
    }

    return formFieldInfo;
  });

  const singleNotificationMessageKey = language === 'en' ? 'message_en' : 'message_es';
  const singleNotificationDescriptionKey = language === 'en' ? 'desc_en' : 'desc_es';

  return (
    <Fragment>
      <Box
        sx={{
          minHeight: '100%',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '10px',
          p: 2
        }}
      >
        <Typography variant="h4">{selectedMessage[singleNotificationMessageKey]}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>U</Avatar>
          <Box sx={{ ml: 1 }}>
            <Typography variant="body1" color="text.primary" fontWeight="bold">
              {selectedMessage.reviewer_person}
            </Typography>
            <Typography>jomgmith@skyace.com</Typography>
          </Box>
          <Typography variant="body2" color="text.primary" sx={{ marginLeft: 'auto' }}>
            {selectedMessage.date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', border: '1px solid #ccc', p: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1">
              {selectedMessage[singleNotificationDescriptionKey]}
            </Typography>

            <Typography variant="body2" sx={{ my: 1 }}>
              <span style={{ fontWeight: 'bold' }}>GRUPO ZLIPERS.</span>
            </Typography>

            <Button size="small" variant="contained" onClick={handleDialogOpen}>
              Firmar EEP
            </Button>
          </Box>
        </Box>
      </Box>
      <FormDrawer
        open={isDialogOpen}
        handleClose={handleDialogClose}
        inputFields={updatedFormFields}
      />
    </Fragment>
  );
}

export default MessageCenterCardDetails;
