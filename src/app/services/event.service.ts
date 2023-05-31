import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Impot du modele event
import IdEvent from '../models/idEvent.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Déclaration de l'URL vers notre API, pour ne pas avoir à la rappeller à chaque fois.
  // Idéalement, on devrait la placer en tant que variable d'environnement.
  private apiUrl = 'http://localhost:3000';

  // Injection de la dépendence HttpClient
  constructor(private httpClient: HttpClient) { }

  /**
   * On demande à retourner une liste d'évènements
   * @returns La partie entre parenthèse correspond à l'URL complète de notre route API
   */
  getEvents(): Observable<IdEvent[]> {
    return this.httpClient.get<IdEvent[]>(`${this.apiUrl}/events`)
  }

  /**
   * Idem ici mais pour récupérer un évènement en particulier
   * @param id id event
   * @returns lien vers l'API
   */
  getEvent(id: number): Observable<IdEvent> {
    return this.httpClient.get<IdEvent>(`${this.apiUrl}/events/${id}`);
  }

  /**
   * création d'un évènement
   * @param event id event
   * @returns lien vers l'API
   */
  createEvent(event: IdEvent): Observable<IdEvent> {
    return this.httpClient.post<IdEvent>(`${this.apiUrl}/events`, event);
  }

  /**
   * attention au paramètre de l'URL ${event.id}
   * celui-ci fait référence au paramètre de l'objet event déclaré comme argument de ma fonction
   * @param event id event
   * @returns lien vers l'API
   */
  updateEvent(event: IdEvent): Observable<IdEvent> {
    return this.httpClient.put<IdEvent>(`${this.apiUrl}/events/${event.id_evenement}`, event);
  }

  /**
   * destruction d'un évènement
   * @param id id event
   * @returns lien vers l'API
   */
  deleteEvent(id: number): Observable<IdEvent> {
    return this.httpClient.delete<IdEvent>(`${this.apiUrl}/events/${id}`);
  }

  /**
   * crée un évènement en appelant la méthode createEvent
   * @param date 
   * @param categorie 
   * @param lieu 
   * @param description 
   * @param fichier
   */
  onAddEvent= (date: Date, categorie: string, lieu: string, description: string, fichier: File) => {
    
  } 
}
