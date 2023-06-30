import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ContentTabOne from './ContentTabOne';
import ContentTabTwo from './ContentTabTwo';

export default function CategoryTestTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box>
                    <TabList
                        centered
                        onChange={handleChange}
                        aria-label="tab-category-test"
                        sx={{ color: '#009D9D' }}
                        textColor='inherit'
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#009D9D',
                                border: '2px solid',
                            },
                        }}

                    >
                        <Tab label="Đề thi ĐGNL" value="1" sx={{ fontWeight: 'bold', fontSize: '24px' }} />
                        <Tab label="Luyện thi THPT" value="2" sx={{ fontWeight: 'bold', fontSize: '24px' }} />
                    </TabList>
                </Box>
                <TabPanel value="1"><ContentTabOne /></TabPanel>
                <TabPanel value="2"><ContentTabTwo /></TabPanel>
            </TabContext>
        </Box>
    );
}