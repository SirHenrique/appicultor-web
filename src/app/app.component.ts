import { Component } from '@angular/core';
import { SupabaseService } from '../app/services/supabase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appicultor-web';
  public data: any[] = [];
  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async ngOnInit(): Promise<void> {

  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
