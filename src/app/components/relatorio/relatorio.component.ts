import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';
import { formatDate, Location } from '@angular/common';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent {
  apiarioId: string | null = null; // Variável para armazenar o ID do produtor
  dadosRelatorio: any;
  constructor(private router: Router, private route: ActivatedRoute,private supabaseService: SupabaseService,private location: Location) {}
  goBack(): void {
    this.location.back();// Navega para a tela anterior
  }

  async ngOnInit(): Promise<void> {
    // Captura o ID da rota
    this.apiarioId = this.route.snapshot.paramMap.get('id');

    this.dadosRelatorio = await this.supabaseService.getRelatorios(this.apiarioId!);

    for (let relatorio of this.dadosRelatorio) {
      const dataFormatada = formatDate(relatorio.dataVisita ?? '', 'dd/MM/yyyy', 'en-US');
      relatorio.colmeiasAfetadas = JSON.parse(relatorio.colmeiasAfetadas)
      relatorio.dataVisita = dataFormatada;
    }
    console.log(this.dadosRelatorio)
  }


}
