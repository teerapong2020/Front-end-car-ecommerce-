import React from 'react'
import {Card}  from '../components/champ/card';


export const Carddata = () => {
    const pdcards = [
        {
          name: 'BENZ GLC 300 4MATIC',
          rating: '4.8/5.0',
          ratingIcon: 'icon/star.png',
          category: 'Sedan',
          favIcon: 'icon/heart.png',
          shareIcon: 'icon/sharenetwork.png',
          image: 'assets/benz/GLC 300 4MATIC/GLC 300 4MATIC.png',
          locationIcon: 'icon/location.png',
          location: 'Bangkok, Thailand',
          price: '฿20,000',
          rentLink: '/view_rent/bmw/X4.html',
          detailLink: '/view_rent/bmw/X4.html'
        },
        {
          name: 'Toyota Camry',
          rating: '4.5/5.0',
          ratingIcon: 'icon/star.png',
          category: 'Sedan',
          favIcon: 'icon/heart.png',
          shareIcon: 'icon/sharenetwork.png',
          image: 'assets/toyota/camry.png',
          locationIcon: 'icon/location.png',
          location: 'Chiang Mai, Thailand',
          price: '฿15,000',
          rentLink: '/view_rent/toyota/camry.html',
          detailLink: '/view_rent/toyota/camry.html'
        },
        {
          name: 'Honda Accord',
          rating: '4.7/5.0',
          ratingIcon: 'icon/star.png',
          category: 'Sedan',
          favIcon: 'icon/heart.png',
          shareIcon: 'icon/sharenetwork.png',
          image: 'assets/honda/accord.png',
          locationIcon: 'icon/location.png',
          location: 'Phuket, Thailand',
          price: '฿18,000',
          rentLink: '/view_rent/honda/accord.html',
          detailLink: '/view_rent/honda/accord.html'
        },
        {
          name: 'BMW X5',
          rating: '4.9/5.0',
          ratingIcon: 'icon/star.png',
          category: 'SUV',
          favIcon: 'icon/heart.png',
          shareIcon: 'icon/sharenetwork.png',
          image: 'assets/bmw/X5.png',
          locationIcon: 'icon/location.png',
          location: 'Pattaya, Thailand',
          price: '฿25,000',
          rentLink: '/view_rent/bmw/X5.html',
          detailLink: '/view_rent/bmw/X5.html'
        },
        {
          name: 'Audi Q7',
          rating: '4.8/5.0',
          ratingIcon: 'icon/star.png',
          category: 'SUV',
          favIcon: 'icon/heart.png',
          shareIcon: 'icon/sharenetwork.png',
          image: 'assets/audi/Q7.png',
          locationIcon: 'icon/location.png',
          location: 'Hua Hin, Thailand',
          price: '฿22,000',
          rentLink: '/view_rent/audi/Q7.html',
          detailLink: '/view_rent/audi/Q7.html'
        }
      ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {pdcards.map((pdcard, index) => (
      <Card key={index} pdcard={pdcard} />
    ))}
  </div>
  )
}
