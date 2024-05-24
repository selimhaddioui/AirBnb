import { Injectable } from '@angular/core';
import {Estate} from "../interfaces/estate";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EstateService {
  private readonly locationsPath = `${environment.estateApiUrl}/estates`;

  async getEstates(): Promise<Estate[]> {
    const data = await fetch(this.locationsPath);
    return await data.json() ?? [];
  }

  async getEstateById(id: string): Promise<Estate | undefined> {
    const data = await fetch(`${this.locationsPath}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() { }
}
