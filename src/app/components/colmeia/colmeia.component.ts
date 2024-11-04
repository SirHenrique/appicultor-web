import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';
import { formatDate, Location } from '@angular/common';

@Component({
  selector: 'app-colmeia',
  templateUrl: './colmeia.component.html',
  styleUrls: ['./colmeia.component.scss']
})
export class ColmeiaComponent {
  constructor(private router: Router, private route: ActivatedRoute,private supabaseService: SupabaseService,private location: Location) {}
  colmeiaId: string | null = null; // Variável para armazenar o ID do produtor
  dadosColmeia: any;
  relatoriosColmeia: any = [];
  async ngOnInit(): Promise<void> {
    // Captura o ID da rota
    this.colmeiaId = this.route.snapshot.paramMap.get('id');

    this.dadosColmeia = await this.supabaseService.getDadosColmeia(this.colmeiaId!);
    const dataFormatada = formatDate(this.dadosColmeia.dataInstalacao ?? '', 'dd/MM/yyyy', 'en-US');
    this.dadosColmeia.dataInstalacao = dataFormatada;

    this.relatoriosColmeia = await this.supabaseService.getRelatoriosColmeias(this.colmeiaId!);
    console.log(this.relatoriosColmeia)
    for (let relatorio of this.relatoriosColmeia) {
      const dataFormatada = formatDate(relatorio.relatorio.dataVisita ?? '', 'dd/MM/yyyy', 'en-US');
      relatorio.relatorio.dataVisita = dataFormatada;
    }


    console.log(this.dadosColmeia)
  }
  goBack(): void {
    this.location.back();// Navega para a tela anterior
  }
}
