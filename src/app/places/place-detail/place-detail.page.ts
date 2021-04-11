import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular'
import { Place } from '../place.model';
import { Alert } from 'selenium-webdriver';
import { __await } from 'tslib';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute, private placesService:
    PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('placeId')
      // placedId viene de app-routing.module.ts, recoge lo que esta en la barra de direccion del navegador
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place)
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header : 'Esta seguro de Eliminar ?',
      message : 'Se Cuidadoso',
      buttons : [{
        text : 'Cancelar',
        role : 'cancel'
      },
      {
        text : 'Eliminar',
        handler : () => {
          this.placesService.deletePlace(this.place.id);
          this.router.navigate(['/places'])
        }
      }  
    ]
    });

    await alertElement.present();

    
  }

}
