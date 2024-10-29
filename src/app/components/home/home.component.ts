import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public data: any[] = [];
  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    const fetchedData = await this.supabaseService.getDataFromTable("produtores");
    this.data = fetchedData ?? [];
    console.log(this.data)
  }

  navigateToDetail(produtorId: number): void {
    this.router.navigate(['/produtor', produtorId]); // Redireciona para a nova rota
  }
}
