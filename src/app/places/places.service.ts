import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  private places : Place[] = [
    {
    id : '1',
    title : 'Torre Eiffel',
    imageURL : 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
    comments : ['Lugares Asombrosos', 'Experiencia Maravillosa']
    },
    {
      id : '2',
      title : 'Estatua de la Libertad',
      imageURL : 'https://www.turismonuevayork.com/wp-content/uploads/2014/09/La-Estatua-de-la-Libertad-en-Nueva-York-760x500.jpg',
      comments : ['Lugares Asombrosos', 'Experiencia Maravillosa']
    },
    {
      id : '3',
      title : 'Iglesia de Escuque',
      imageURL : 'https://mapio.net/images-p/8279411.jpg',
      comments : []
    }
  ]


  constructor() { }

  getPlaces() {

    return [...this.places]
  }

  getPlace( placeId : String ) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title : string, imageURL : string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id : this.places.length + 1 + ""
    });
  }

  deletePlace(placeId : string ) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })

  }
}
