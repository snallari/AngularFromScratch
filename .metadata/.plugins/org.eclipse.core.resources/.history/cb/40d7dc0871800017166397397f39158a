import {HEROES} from '../mockdata/mockhero';
import {Hero} from '../models/hero';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {

  constructor(private heroService: HeroService) {}

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(
        () => resolve(this.getHeroes), 2000)

    })

  }

}
