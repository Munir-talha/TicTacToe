import React from 'react'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { redirect } from 'react-router-dom';
function Github() {
    const [data , setData] = useState("")
    useEffect(() => {
        fetch('https://api.github.com/users/Munir-talha')
         .then(response => response.json())
         .then(data => {
            console.log(data);
            setData(data)
         })
    }, [])
    return (
        <Card className='mt-8' style={{ width: '18rem' , marginLeft: '20rem' }}>
      <Card.Img variant="top border rounded" src={data?.avatar_url} />
      <Card.Body>
        <Card.Title className='font-semibold italic text-center text-xl'>{data?.login}</Card.Title>
        <Card.Text className='font-semibold italic text-center text-lg'>
          A Software engineer
        </Card.Text>
        <Card.Text className='font-semibold italic text-center text-sm'>
          {data?.followers} Followers and have {data?.public_repos} Repositories
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Github
