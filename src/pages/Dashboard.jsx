import React from 'react';
import {useState} from 'react'
import Layout from './layouts/AppLayout';
import Topbar from '../components/dashboard/topbar';
import EmptyDashboard from '@/components/dashboard/emptyDashboard';
import GeneratedDashboard from '@/components/dashboard/generatedDashboard';

export default function Dashboard(){

    const [tweets, setTweets] = useState([])


    return(
        <Layout>
            <Topbar className="w-full" setTweets={setTweets}/>
            {
                tweets.length === 0 ? (
                    <EmptyDashboard className="" setTweets={setTweets}/>
                ) : (
                    <GeneratedDashboard tweets={tweets} />
                )
            }
        </Layout>
    )
}