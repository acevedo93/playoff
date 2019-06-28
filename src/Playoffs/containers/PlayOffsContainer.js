import React from 'react';
import {FlatList} from 'react-native';
//components
import Layout from '../components/Layout';
import Column from '../components/Column';
const playOffs= [
  {
    round1: {
      id:1,
      matches:[
        {
          id: 1,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 1,
        },
        {
          id: 2,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 2,
        },
        {
          id: 4,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 3,
        },
        {
          id: 4,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 4,
        }
      ]
    },
    round2: {
      id:2,
      matches:[
        {
          id: 1,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 1,
        },
        {
          id: 2,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 2,
        },
      ]
    },
    round3: {
      id:3,
      matches:[
        {
          id: 1,
          team_a:'Aguilas negras',
          team_b: 'Aguilas feas',
          matchId: 1,
        },
      ]
    }
  }
]

export default () =>{
  return(
    <Layout>
      <Column k={0}/>
      <Column k={1}/>
      <Column k={2}/>
      <Column k={3}/>
    </Layout>
  )  
}
