import { Component } from '@angular/core';
import { SupabaseService } from '../app/services/supabase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appicultor-web';
  public data: any[] = [];
  constructor(private supabaseService: SupabaseService) { }

  async ngOnInit(): Promise<void> {
    const fetchedData = await this.supabaseService.getDataFromTable('produtores');
    this.data = fetchedData ?? [];
    console.log(this.data)
  }
}
