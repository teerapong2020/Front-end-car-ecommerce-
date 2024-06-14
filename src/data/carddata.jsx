import React from 'react'
import {Card}  from '../components/champ/card';
import p911 from '../assets/cardcar.jsx/porche/911/porche_911_main.jpg'


export const Carddata = () => {
  
    const pdcards = [
      {
        name: 'BMW X5',
        rating: '4.9/5.0',
        ratingIcon: '',
        category: 'SUV',
        image: p911,
        location: 'Pattaya, Thailand',
        price: '฿25,000',
        now: '/view_rent/bmw/X5.html',
        detail: '/view_rent/bmw/X5.html'
      },
      {
        name: 'BMW X5',
        rating: '4.9/5.0',
        ratingIcon: '',
        category: 'SUV',
        image: p911,
        location: 'Pattaya, Thailand',
        price: '฿25,000',
        now: '/view_rent/bmw/X5.html',
        detail: '/view_rent/bmw/X5.html'
      },
      {
        name: 'BMW X5',
        rating: '4.9/5.0',
        ratingIcon: '',
        category: 'SUV',
        image: p911,
        location: 'Pattaya, Thailand',
        price: '฿25,000',
        now: '/view_rent/bmw/X5.html',
        detail: '/view_rent/bmw/X5.html'
      },
      {
        name: 'BMW X5',
        rating: '4.9/5.0',
        ratingIcon: '',
        category: 'SUV',
        image: p911,
        location: 'Pattaya, Thailand',
        price: '฿25,000',
        now: '/view_rent/bmw/X5.html',
        detail: '/view_rent/bmw/X5.html'
      },
      {
        name: 'BMW X5',
        rating: '4.9/5.0',
        ratingIcon: '',
        category: 'SUV',
        image: p911,
        location: 'Pattaya, Thailand',
        price: '฿25,000',
        now: '/view_rent/bmw/X5.html',
        detail: '/view_rent/bmw/X5.html'
      },
      {
        name: 'BMW X5',
        rating: '4.9/5.0',
        ratingIcon: '',
        category: 'SUV',
        image: p911,
        location: 'Pattaya, Thailand',
        price: '฿25,000',
        now: '/view_rent/bmw/X5.html',
        detail: '/view_rent/bmw/X5.html'
      },
      
     
      ];
  return (
    <>
    <div className=" flex flex-wrap justify-center gap-8 my-20 md:my-20">
    {pdcards.map((pdcard, index) => (
      <Card key={index} pdcard={pdcard} />
    ))}
  </div>
  <div className='flex justify-center'>
  <button>◀️</button>
    <button>1</button>
    <button>▶️</button>
  </div>
  
  </>
  )
}
