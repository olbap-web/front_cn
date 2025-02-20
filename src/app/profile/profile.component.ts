import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DefaultBackendService } from '../service/default-backend.service';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';

type ProfileType = {
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [CommonModule],
  styleUrls: [],
  standalone: true,
})
export class ProfileComponent implements OnInit {
  profile: ProfileType | undefined;
  responseBackend!: object;

  constructor(private authService: MsalService,private http: HttpClient, private backendService: DefaultBackendService) {}

  ngOnInit() {
    this.getProfile(environment.apiConfig.uri);
  }

  getProfile(url: string) {
    this.http.get(url).subscribe((profile) => {
      this.profile = profile;
    });
  }
  llamarBackend(): void {
    this.backendService.consumirBackend().subscribe(response => {
      this.responseBackend = response;
    });
  }

  mostrarResponseBackend(): string {
    return JSON.stringify(this.responseBackend);
  }
}
