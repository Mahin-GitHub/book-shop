import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { getStoredReadList } from '../../utility/addToDb';

const ListedBooks = () => {
    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id=>parseInt(id));

        console.log(storedReadList,storedReadListInt,allBooks);
        
    },[])
    
    return (
        <div>
            <Tabs>
                <TabList >
                    <div className='flex gap-4'>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ListedBooks
