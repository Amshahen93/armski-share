import { Blogs } from 'src/app/Data/blogs';
import { Injectable } from "@angular/core";

@Injectable()
export class ArmeniaService {
  blodsList;

  constructor() {
    this.blodsList = Blogs;
  }
}
